// data.js — รายชื่อผู้ตรวจ + พื้นที่/โซน ("master data")
// ไฟล์นี้แก้ไขโดย Dev เท่านั้น ผ่าน GitHub (เปิดไฟล์นี้ในเว็บ GitHub -> แก้ไข -> Commit)
// ทุกคนที่เปิดแอปจะเห็นข้อมูลชุดเดียวกันเสมอ ไม่ต้องตั้งค่าอะไรเพิ่มนอกจาก GitHub ที่มีอยู่แล้ว
// หมายเหตุ: อัปเดต 2026-09-19 — areas แยกเป็น location Zone1..Zone13 ตามจริง (17 จุดตรวจ)
// เพิ่ม orgList (ฝ่าย/แผนกทั้งบริษัท) ไว้ใช้เป็น dropdown ในฟอร์ม 'เบิกของสโตร์'/'ขนย้ายเครื่องจักร'
// (orgList ไม่เกี่ยวกับ department ของผู้ตรวจ — เป็นคนละรายการกัน) รายชื่อผู้ตรวจ (members) คงไว้เหมือนเดิม
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
      "location": "Zone1",
      "zone": "Pilot Plant ชั้น 5 / Office / Meeting Room / ห้องน้ำ / ห้องครัว /ห้อง Lab",
      "order": 0
    },
    {
      "id": "a2",
      "location": "Zone1",
      "zone": "Pilot Plant ชั้น 4 / Office / Meeting Room / ห้องน้ำ / ห้องครัว",
      "order": 1
    },
    {
      "id": "a3",
      "location": "Zone1",
      "zone": "Pilot Plant ชั้น 3  / ห้องน้ำ  / ห้อง Lab / ห้องเก็บอุปกรณ์ / ไลน์",
      "order": 2
    },
    {
      "id": "a4",
      "location": "Zone1",
      "zone": "Pilot Plant ชั้น 2 /  Meeting Room / ห้องน้ำ / ห้องครัว",
      "order": 3
    },
    {
      "id": "a5",
      "location": "Zone1",
      "zone": "Pilot Plant ชั้น 1  / ห้องน้ำ  / ห้อง Lab / ห้องเก็บอุปกรณ์ / ไลน์",
      "order": 4
    },
    {
      "id": "a6",
      "location": "Zone2",
      "zone": "ITC 2.1  Office ชั้น2 / Office / Meeting Room / ห้องน้ำ / ห้องครัว / ห้องLab",
      "order": 0
    },
    {
      "id": "a7",
      "location": "Zone3",
      "zone": "ITC 2.1 พื้นที่ส่วนกลาง ชั้น2 / ทางเดิน / ห้องน้ำ / ห้องผ้า / ห้องฝากของ / ห้องโอ๊บเอี้ยม / Office HR / ห้องพักผ่อนพนักงาน ชายและหญิง / โรงอาหาร",
      "order": 0
    },
    {
      "id": "a8",
      "location": "Zone4",
      "zone": "ITC 2.1  พื้นที่การผลิต ชั้น2 / ห้องชั่งสาร / สโตร์ / ห้อง Ink / ห้องปล่อยกระป๋อง / ช๊อปช่างด้านหลัง",
      "order": 0
    },
    {
      "id": "a9",
      "location": "Zone5",
      "zone": "ITC 2.1  พื้นที่การผลิต ชั้น1 / ทางเข้าไลน์ผลิตกลางไลน์ / คลุกผสม / บรรจุ / ขูดหนังขูดเลือด / เตรียมวัตถุดิบ Topping / ปลาสด / Retort / เช็คกระป๋อง / ทางเดินลูกค้า",
      "order": 0
    },
    {
      "id": "a10",
      "location": "Zone6",
      "zone": "ITC 2.2  พื้นที่การผลิต ชั้น1 / เตรียมวัตถุดิบ + คลุกผสม / บรรจุ / Retort / เช็คกระป๋อง",
      "order": 0
    },
    {
      "id": "a11",
      "location": "Zone7",
      "zone": "ITC 2.2  พื้นที่ส่วนกลาง ชั้น1.5 / ห้องควมคุมไฟฟ้า / ทางเดินเข้าไลน์ผลิต / ห้องน้ำพนักงาน / ทางเดินลูกค้า / ห้องน้ำลูกค้า / Meeting Room / Office Fa",
      "order": 0
    },
    {
      "id": "a12",
      "location": "Zone8",
      "zone": "ITC 2.2  พื้นที่การผลิต ชั้น2 / เตรียมวัตถุดิบ + คลุกผสม / บรรจุ / Retort / เช็คกระป๋อง",
      "order": 0
    },
    {
      "id": "a13",
      "location": "Zone9",
      "zone": "ITC 2.2  พื้นที่ส่วนกลาง ชั้น2.5 / ห้องควมคุมไฟฟ้า / ทางเดินเข้าไลน์ผลิต / ห้องน้ำพนักงาน / ทางเดินลูกค้า / ห้องน้ำลูกค้า / Meeting Room",
      "order": 0
    },
    {
      "id": "a14",
      "location": "Zone10",
      "zone": "ITC 2.2  พื้นที่การผลิต ชั้น3 / เตรียมวัตถุดิบ + คลุกผสม / บรรจุ / Retort / เช็คกระป๋อง",
      "order": 0
    },
    {
      "id": "a15",
      "location": "Zone11",
      "zone": "พื้นที่ปิดฉลาก 40 ไร่ / ไลน์ปิดฉลาก / ลานโหลด / ห้องเย็น C / สโตร์",
      "order": 0
    },
    {
      "id": "a16",
      "location": "Zone12",
      "zone": "พื้นที่ห้องเย็น  / จุดลงปลา คัดปลา",
      "order": 0
    },
    {
      "id": "a17",
      "location": "Zone13",
      "zone": "พื้นที่รอบนอก  / ป้อม รปภ 1 /จุดเก็บถังปลา / Boiler /  ห้องขยะ  / ลานจอดรถ / ป้อม รปภ 2",
      "order": 0
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
  ],
  "orgList": [
    {
      "faction": "Facilities, Security & Admin - SS",
      "dept": "Facilities, Security & Admin - SS"
    },
    {
      "faction": "Global Pet Care Innovation - GPCI",
      "dept": "Pet Technician"
    },
    {
      "faction": "Global Pet Care Innovation - GPCI",
      "dept": "Attending Veterinarian"
    },
    {
      "faction": "Global Pet Care Innovation - GPCI",
      "dept": "Cattery Specialist"
    },
    {
      "faction": "Global Pet Care Innovation - GPCI",
      "dept": "Engineering"
    },
    {
      "faction": "Global Pet Care Innovation - GPCI",
      "dept": "Nutrition & Technical Innovation"
    },
    {
      "faction": "Pet BU Quality",
      "dept": "Audit & Compliance-SS"
    },
    {
      "faction": "Pet BU Quality",
      "dept": "Food Law & Regulations"
    },
    {
      "faction": "Pet BU Quality",
      "dept": "Pet BU Quality"
    },
    {
      "faction": "Pet BU Quality",
      "dept": "Pet Quality"
    },
    {
      "faction": "Pet BU Quality",
      "dept": "Plant Quality Customer Experience"
    },
    {
      "faction": "Pet BU Quality",
      "dept": "QMS"
    },
    {
      "faction": "Pet BU Quality",
      "dept": "Quality Project Improvement & Data Support"
    },
    {
      "faction": "Plant Engineering &  Maintenance - SS",
      "dept": "Area Maintenance #1 -SS"
    },
    {
      "faction": "Plant Engineering &  Maintenance - SS",
      "dept": "Area Maintenance #2 -SS"
    },
    {
      "faction": "Plant Engineering &  Maintenance - SS",
      "dept": "Boiler and Utilities"
    },
    {
      "faction": "Plant Engineering &  Maintenance - SS",
      "dept": "General Maintenance & Building"
    },
    {
      "faction": "Plant Engineering &  Maintenance - SS",
      "dept": "Pet Engineering & Maintenance"
    },
    {
      "faction": "Plant Engineering &  Maintenance - SS",
      "dept": "Plant Engineering &  Maintenance - SS"
    },
    {
      "faction": "Plant Engineering &  Maintenance - SS",
      "dept": "Refrigeration and Air con"
    },
    {
      "faction": "Plant Engineering &  Maintenance - SS",
      "dept": "Robotics & Automation"
    },
    {
      "faction": "Plant Engineering &  Maintenance - SS",
      "dept": "Wastewater Treatment"
    },
    {
      "faction": "Plant Engineering &  Maintenance - SS",
      "dept": "Electrical"
    },
    {
      "faction": "ฝ่ายคลังสินค้า ITC2",
      "dept": "ITC 40 Rai/ Suansom"
    },
    {
      "faction": "ฝ่ายคลังสินค้า ITC2",
      "dept": "Technical Support"
    },
    {
      "faction": "ฝ่ายคลังสินค้า ITC2",
      "dept": "WH Ops & Logistics – SS"
    },
    {
      "faction": "ฝ่ายคลังสินค้า ITC2",
      "dept": "จัดส่งสินค้า"
    },
    {
      "faction": "ฝ่ายคลังสินค้า ITC2",
      "dept": "วิศวกรรมและซ่อมบำรุง WH (สวนส้ม)"
    },
    {
      "faction": "ฝ่ายคลังสินค้า ITC2",
      "dept": "แผนกบรรจุภัณฑ์"
    },
    {
      "faction": "ฝ่ายคลังสินค้า ITC2",
      "dept": "แผนกปิดฉลากและบรรจุ"
    },
    {
      "faction": "ฝ่ายคุณภาพ ITC2",
      "dept": "Plant Quality Assurance-SS"
    },
    {
      "faction": "ฝ่ายคุณภาพ ITC2",
      "dept": "Quality Control-SS"
    },
    {
      "faction": "ฝ่ายคุณภาพ ITC2",
      "dept": "ควบคุมคุณภาพ คลุกผสม-เช็ดกระป๋อง ITC Plant 2.2 (QC.ฆ่าเชื้อ-เช็ดกระป๋อง)"
    },
    {
      "faction": "ฝ่ายคุณภาพ ITC2",
      "dept": "ควบคุมคุณภาพ ปลาสด-เช็ดกระป๋อง ITC2 Plant 2.1 (QC.ปิดผนึก)"
    },
    {
      "faction": "ฝ่ายคุณภาพ ITC2",
      "dept": "คุณภาพห้องปฏิบัติการเคมี"
    },
    {
      "faction": "ฝ่ายคุณภาพ ITC2",
      "dept": "สอบเทียบ"
    },
    {
      "faction": "ฝ่ายคุณภาพ ITC2",
      "dept": "ห้องปฏิบัติการเคมี Proximate - Ingredient"
    },
    {
      "faction": "ฝ่ายผลิต ITC2",
      "dept": "PD - ผลิต Can & Cup"
    },
    {
      "faction": "ฝ่ายผลิต ITC2",
      "dept": "PD - ผลิต Pouch & Sachet"
    },
    {
      "faction": "ฝ่ายผลิต ITC2",
      "dept": "PD - เตรียมการผลิต"
    }
  ]
};
