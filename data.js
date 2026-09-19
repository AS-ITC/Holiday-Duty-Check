// data.js — รายชื่อผู้ตรวจ + พื้นที่/โซน ("master data")
// ไฟล์นี้แก้ไขโดย Dev เท่านั้น ผ่าน GitHub (เปิดไฟล์นี้ในเว็บ GitHub -> แก้ไข -> Commit)
// ทุกคนที่เปิดแอปจะเห็นข้อมูลชุดเดียวกันเสมอ ไม่ต้องตั้งค่าอะไรเพิ่มนอกจาก GitHub ที่มีอยู่แล้ว
// หมายเหตุ: อัปเดต 2026-09-19 — แทนที่ areas/issueTypes ทั้งหมดด้วยข้อมูลจริงของ SS (Zone1-13)
// ที่มา: งาน ผจก เวรวันหยุด 1.xlsx (ชีท Zone 1-13) — รายชื่อผู้ตรวจ (members) คงไว้เหมือนเดิม ยังไม่เปลี่ยน
window.MASTER_DATA = {
  "members": [
    {
      "id": "m22",
      "name": "กัลยา ผลบุญ",
      "department": "PF1"
    },
    {
      "id": "m40",
      "name": "จันทร์เพ็ญ รุ่งเรือง",
      "department": "WH"
    },
    {
      "id": "m25",
      "name": "จิราภรณ์ จันทร์แจ่ม",
      "department": "AC"
    },
    {
      "id": "m19",
      "name": "ชัยวัฒน์ สายทอง",
      "department": "EN"
    },
    {
      "id": "m24",
      "name": "ชาญชัย ทิพย์รัตน์",
      "department": "WH"
    },
    {
      "id": "m16",
      "name": "ชาญชัย บัวขาว",
      "department": "WH"
    },
    {
      "id": "m41",
      "name": "ชาญชัย แก้วมณี",
      "department": "AC"
    },
    {
      "id": "m32",
      "name": "ดวงใจ รุ่งเรือง",
      "department": "WH"
    },
    {
      "id": "m11",
      "name": "ธนา ทองดี",
      "department": "EN"
    },
    {
      "id": "m38",
      "name": "ธิดา อินทร์แก้ว",
      "department": "PF1"
    },
    {
      "id": "m36",
      "name": "นงลักษณ์ จันทร์แจ่ม",
      "department": "HR"
    },
    {
      "id": "m21",
      "name": "นงลักษณ์ วงศ์ษา",
      "department": "PE"
    },
    {
      "id": "m23",
      "name": "นงลักษณ์ แก้วมณี",
      "department": "PF2"
    },
    {
      "id": "m47",
      "name": "นันทนา บุญมี",
      "department": "PF2"
    },
    {
      "id": "m1",
      "name": "นันทนา ใจดี",
      "department": "AC"
    },
    {
      "id": "m43",
      "name": "ประเสริฐ มั่นคง",
      "department": "EN"
    },
    {
      "id": "m14",
      "name": "ประเสริฐ สายทอง",
      "department": "PF1"
    },
    {
      "id": "m6",
      "name": "ปราณี โพธิ์ทอง",
      "department": "PF1"
    },
    {
      "id": "m9",
      "name": "พรทิพย์ ศรีสุข",
      "department": "AC"
    },
    {
      "id": "m44",
      "name": "พรทิพย์ เพชรรัตน์",
      "department": "HR"
    },
    {
      "id": "m5",
      "name": "รัตนา รุ่งเรือง",
      "department": "PE"
    },
    {
      "id": "m42",
      "name": "รัตนา สว่างวงศ์",
      "department": "CS"
    },
    {
      "id": "m30",
      "name": "วรวุฒิ รุ่งเรือง",
      "department": "PF1"
    },
    {
      "id": "m10",
      "name": "วรวุฒิ โพธิ์ทอง",
      "department": "CS"
    },
    {
      "id": "m46",
      "name": "วิชัย วิริยะกุล",
      "department": "PF1"
    },
    {
      "id": "m17",
      "name": "วิภา แก้วมณี",
      "department": "AC"
    },
    {
      "id": "m35",
      "name": "วีระ รักงาน",
      "department": "EN"
    },
    {
      "id": "m48",
      "name": "วีระ หอมจันทร์",
      "department": "WH"
    },
    {
      "id": "m18",
      "name": "ศิริพร แก้วมณี",
      "department": "CS"
    },
    {
      "id": "m39",
      "name": "สมบัติ สว่างวงศ์",
      "department": "PF2"
    },
    {
      "id": "m12",
      "name": "สมศักดิ์ ทองดี",
      "department": "HR"
    },
    {
      "id": "m37",
      "name": "สมศักดิ์ ผลบุญ",
      "department": "PE"
    },
    {
      "id": "m29",
      "name": "สมศักดิ์ พูลสวัสดิ์",
      "department": "PE"
    },
    {
      "id": "m28",
      "name": "สมหญิง รุ่งเรือง",
      "department": "HR"
    },
    {
      "id": "m45",
      "name": "สายฝน จันทร์แจ่ม",
      "department": "PE"
    },
    {
      "id": "m33",
      "name": "สิทธิชัย เพชรรัตน์",
      "department": "AC"
    },
    {
      "id": "m4",
      "name": "สุภาพร อินทร์แก้ว",
      "department": "HR"
    },
    {
      "id": "m26",
      "name": "สุเมธ รักงาน",
      "department": "CS"
    },
    {
      "id": "m27",
      "name": "อภิสิทธิ์ เพชรรัตน์",
      "department": "EN"
    },
    {
      "id": "m7",
      "name": "อรุณี ทองดี",
      "department": "PF2"
    },
    {
      "id": "m13",
      "name": "อรุณี รุ่งเรือง",
      "department": "PE"
    },
    {
      "id": "m31",
      "name": "อรุณี หอมจันทร์",
      "department": "PF2"
    },
    {
      "id": "m2",
      "name": "อัมพร ชูเกียรติ",
      "department": "CS"
    },
    {
      "id": "m49",
      "name": "อัมพร อินทร์แก้ว",
      "department": "AC"
    },
    {
      "id": "m34",
      "name": "เพ็ญศรี บุญมี",
      "department": "CS"
    },
    {
      "id": "m3",
      "name": "เพ็ญศรี รุ่งเรือง",
      "department": "EN"
    },
    {
      "id": "m15",
      "name": "เพ็ญศรี สุขสันต์",
      "department": "PF2"
    },
    {
      "id": "m8",
      "name": "เอกชัย ทองดี",
      "department": "WH"
    },
    {
      "id": "m50",
      "name": "เอกชัย วงศ์ษา",
      "department": "CS"
    },
    {
      "id": "m20",
      "name": "ไพศาล บุญมี",
      "department": "HR"
    }
  ],
  "areas": [
    {
      "id": "a1",
      "location": "SS",
      "zone": "Zone1 - Pilot Plant ชั้น 5 / Office / Meeting Room / ห้องน้ำ / ห้องครัว /ห้อง Lab",
      "order": 1
    },
    {
      "id": "a2",
      "location": "SS",
      "zone": "Zone1 - Pilot Plant ชั้น 4 / Office / Meeting Room / ห้องน้ำ / ห้องครัว",
      "order": 2
    },
    {
      "id": "a3",
      "location": "SS",
      "zone": "Zone1 - Pilot Plant ชั้น 3  / ห้องน้ำ  / ห้อง Lab / ห้องเก็บอุปกรณ์ / ไลน์",
      "order": 3
    },
    {
      "id": "a4",
      "location": "SS",
      "zone": "Zone1 - Pilot Plant ชั้น 2 /  Meeting Room / ห้องน้ำ / ห้องครัว",
      "order": 4
    },
    {
      "id": "a5",
      "location": "SS",
      "zone": "Zone1 - Pilot Plant ชั้น 1  / ห้องน้ำ  / ห้อง Lab / ห้องเก็บอุปกรณ์ / ไลน์",
      "order": 5
    },
    {
      "id": "a6",
      "location": "SS",
      "zone": "Zone2 - ITC 2.1  Office ชั้น2 / Office / Meeting Room / ห้องน้ำ / ห้องครัว / ห้องLab",
      "order": 6
    },
    {
      "id": "a7",
      "location": "SS",
      "zone": "Zone3 - ITC 2.1 พื้นที่ส่วนกลาง ชั้น2 / ทางเดิน / ห้องน้ำ / ห้องผ้า / ห้องฝากของ / ห้องโอ๊บเอี้ยม / Office HR / ห้องพักผ่อนพนักงาน ชายและหญิง / โรงอาหาร",
      "order": 7
    },
    {
      "id": "a8",
      "location": "SS",
      "zone": "Zone4 - ITC 2.1  พื้นที่การผลิต ชั้น2 / ห้องชั่งสาร / สโตร์ / ห้อง Ink / ห้องปล่อยกระป๋อง / ช๊อปช่างด้านหลัง",
      "order": 8
    },
    {
      "id": "a9",
      "location": "SS",
      "zone": "Zone5 - ITC 2.1  พื้นที่การผลิต ชั้น1 / ทางเข้าไลน์ผลิตกลางไลน์ / คลุกผสม / บรรจุ / ขูดหนังขูดเลือด / เตรียมวัตถุดิบ Topping / ปลาสด / Retort / เช็คกระป๋อง / ทางเดินลูกค้า",
      "order": 9
    },
    {
      "id": "a10",
      "location": "SS",
      "zone": "Zone6 - ITC 2.2  พื้นที่การผลิต ชั้น1 / เตรียมวัตถุดิบ + คลุกผสม / บรรจุ / Retort / เช็คกระป๋อง",
      "order": 10
    },
    {
      "id": "a11",
      "location": "SS",
      "zone": "Zone7 - ITC 2.2  พื้นที่ส่วนกลาง ชั้น1.5 / ห้องควมคุมไฟฟ้า / ทางเดินเข้าไลน์ผลิต / ห้องน้ำพนักงาน / ทางเดินลูกค้า / ห้องน้ำลูกค้า / Meeting Room / Office Fa",
      "order": 11
    },
    {
      "id": "a12",
      "location": "SS",
      "zone": "Zone8 - ITC 2.2  พื้นที่การผลิต ชั้น2 / เตรียมวัตถุดิบ + คลุกผสม / บรรจุ / Retort / เช็คกระป๋อง",
      "order": 12
    },
    {
      "id": "a13",
      "location": "SS",
      "zone": "Zone9 - ITC 2.2  พื้นที่ส่วนกลาง ชั้น2.5 / ห้องควมคุมไฟฟ้า / ทางเดินเข้าไลน์ผลิต / ห้องน้ำพนักงาน / ทางเดินลูกค้า / ห้องน้ำลูกค้า / Meeting Room",
      "order": 13
    },
    {
      "id": "a14",
      "location": "SS",
      "zone": "Zone10 - ITC 2.2  พื้นที่การผลิต ชั้น3 / เตรียมวัตถุดิบ + คลุกผสม / บรรจุ / Retort / เช็คกระป๋อง",
      "order": 14
    },
    {
      "id": "a15",
      "location": "SS",
      "zone": "Zone11 - พื้นที่ปิดฉลาก 40 ไร่ / ไลน์ปิดฉลาก / ลานโหลด / ห้องเย็น C / สโตร์",
      "order": 15
    },
    {
      "id": "a16",
      "location": "SS",
      "zone": "Zone12 - พื้นที่ห้องเย็น  / จุดลงปลา คัดปลา",
      "order": 16
    },
    {
      "id": "a17",
      "location": "SS",
      "zone": "Zone13 - พื้นที่รอบนอก  / ป้อม รปภ 1 /จุดเก็บถังปลา / Boiler /  ห้องขยะ  / ลานจอดรถ / ป้อม รปภ 2",
      "order": 17
    }
  ],
  "issueTypes": [
    "น้ำไม่ปิด",
    "อุปกรณ์ไฟฟ้าถูกเปิดทิ้งไว้",
    "ลมรั่ว",
    "สารเคมีรั่วซึม",
    "สายไฟชำรุด",
    "ไม่ปิดประตู / หน้าต่าง",
    "พบสัตว์พาหะ",
    "น้ำรั่วซึม",
    "ประตูฉุกเฉินถูกเปิดใช้งาน",
    "อื่นๆ",
    "เครื่องจักรถูกเปิดทิ้งไว้",
    "สารเคมี",
    "แก๊สรั่ว"
  ]
};
