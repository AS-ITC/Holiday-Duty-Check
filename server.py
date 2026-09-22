"""Small SQLite-backed server for Holiday Duty Check.

Run with:
    python3 server.py
Then open http://127.0.0.1:8000/
"""

from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import json
import os
import re
import sqlite3
from urllib.parse import urlparse


ROOT = Path(__file__).resolve().parent
DB_PATH = ROOT / "holiday-duty.db"


def load_default_master():
    data_file = ROOT / "data.js"
    source = data_file.read_text(encoding="utf-8")
    match = re.search(r"window\.MASTER_DATA\s*=\s*(\{.*\})\s*;?\s*$", source, re.DOTALL)
    if not match:
        raise RuntimeError("ไม่พบ window.MASTER_DATA ใน data.js")
    return json.loads(match.group(1))


def connect_db():
    connection = sqlite3.connect(DB_PATH)
    connection.execute(
        "CREATE TABLE IF NOT EXISTS records (id TEXT PRIMARY KEY, payload TEXT NOT NULL)"
    )
    connection.execute(
        "CREATE TABLE IF NOT EXISTS master (id INTEGER PRIMARY KEY CHECK (id = 1), payload TEXT NOT NULL)"
    )
    connection.execute(
        "INSERT OR IGNORE INTO master (id, payload) VALUES (1, ?)",
        (json.dumps(load_default_master(), ensure_ascii=False),),
    )
    connection.commit()
    return connection


def read_json(handler):
    try:
        length = int(handler.headers.get("Content-Length", "0"))
        return json.loads(handler.rfile.read(length).decode("utf-8"))
    except (ValueError, json.JSONDecodeError) as error:
        raise ValueError("Request body ต้องเป็น JSON ที่ถูกต้อง") from error


class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def end_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
        super().end_headers()

    def send_json(self, status, payload):
        body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def do_OPTIONS(self):
        self.send_response(204)
        self.end_headers()

    def do_GET(self):
        path = urlparse(self.path).path
        if path == "/api/health":
            self.send_json(200, {"ok": True})
            return
        if path == "/api/master":
            with connect_db() as db:
                row = db.execute("SELECT payload FROM master WHERE id = 1").fetchone()
            self.send_json(200, json.loads(row[0]))
            return
        if path == "/api/records":
            with connect_db() as db:
                rows = db.execute("SELECT payload FROM records").fetchall()
            self.send_json(200, [json.loads(row[0]) for row in rows])
            return
        super().do_GET()

    def do_POST(self):
        if urlparse(self.path).path != "/api/records":
            self.send_json(404, {"error": "ไม่พบ API นี้"})
            return
        try:
            record = read_json(self)
            record_id = record.get("id")
            if not record_id:
                raise ValueError("record ต้องมี id")
            with connect_db() as db:
                db.execute(
                    "INSERT OR REPLACE INTO records (id, payload) VALUES (?, ?)",
                    (record_id, json.dumps(record, ensure_ascii=False)),
                )
                db.commit()
            self.send_json(200, record)
        except ValueError as error:
            self.send_json(400, {"error": str(error)})

    def do_PUT(self):
        path = urlparse(self.path).path
        try:
            payload = read_json(self)
            if path == "/api/master":
                required = ("members", "areas", "issueTypes", "orgList")
                if any(not isinstance(payload.get(key), list) for key in required):
                    raise ValueError("ข้อมูล Master ต้องมีรายการ members, areas, issueTypes และ orgList")
                with connect_db() as db:
                    db.execute(
                        "INSERT OR REPLACE INTO master (id, payload) VALUES (1, ?)",
                        (json.dumps(payload, ensure_ascii=False),),
                    )
                    db.commit()
                self.send_json(200, payload)
                return
            if path.startswith("/api/records/"):
                record_id = path.rsplit("/", 1)[-1]
                if not record_id or payload.get("id") != record_id:
                    raise ValueError("id ของ record ไม่ถูกต้อง")
                with connect_db() as db:
                    db.execute(
                        "INSERT OR REPLACE INTO records (id, payload) VALUES (?, ?)",
                        (record_id, json.dumps(payload, ensure_ascii=False)),
                    )
                    db.commit()
                self.send_json(200, payload)
                return
            self.send_json(404, {"error": "ไม่พบ API นี้"})
        except ValueError as error:
            self.send_json(400, {"error": str(error)})

    def do_DELETE(self):
        path = urlparse(self.path).path
        with connect_db() as db:
            if path == "/api/records":
                db.execute("DELETE FROM records")
            elif path.startswith("/api/records/"):
                db.execute("DELETE FROM records WHERE id = ?", (path.rsplit("/", 1)[-1],))
            else:
                self.send_json(404, {"error": "ไม่พบ API นี้"})
                return
            db.commit()
        self.send_json(200, {"ok": True})


if __name__ == "__main__":
    host = os.environ.get("HOST", "127.0.0.1")
    port = int(os.environ.get("PORT", "8765"))
    with ThreadingHTTPServer((host, port), Handler) as server:
        print(f"Holiday Duty Check: http://{host}:{port}/")
        server.serve_forever()
