// data.js — รายชื่อผู้ตรวจ + พื้นที่/โซน ("master data")
// ไฟล์นี้แก้ไขโดย Dev เท่านั้น ผ่าน GitHub (เปิดไฟล์นี้ในเว็บ GitHub -> แก้ไข -> Commit)
// ทุกคนที่เปิดแอปจะเห็นข้อมูลชุดเดียวกันเสมอ ไม่ต้องตั้งค่าอะไรเพิ่มนอกจาก GitHub ที่มีอยู่แล้ว
// หมายเหตุ:
// - areas: location = ZoneN, zone = จุดตรวจย่อยในโซนนั้น (51 จุด ตามไฟล์ Zone_Area_Detail_Rev.)
// - zoneGroups: ชื่อ/คำอธิบายของแต่ละ Zone (มาจากคอลัมน์ "พื้นที่หลัก" ในไฟล์เดียวกัน) ใช้แสดง
//   เป็นข้อความบรรทัดที่ 2 ใต้ชื่อ ZoneN บนปุ่มหน้าพื้นที่ตรวจเท่านั้น ไม่กระทบ logic อื่น —
//   ถ้า Zone ไหนไม่มีใน list นี้ก็แค่ไม่มีบรรทัดที่ 2 โชว์ ไม่ error
// - issueTypes: "อื่นๆ" ย้ายไปเป็นตัวเลือกสุดท้ายเสมอ (ตามที่ผู้ใช้ขอ)
// - orgList (ฝ่าย/แผนกทั้งบริษัท) ไว้ใช้เป็น dropdown ในฟอร์ม 'เบิกของสโตร์'/'ขนย้ายเครื่องจักร' เท่านั้น
// - สมาชิก (members) เป็นรายชื่อจริงของทีม SS 45 คน — ไม่มี field แผนก (department) แล้ว เพราะหน้าแรก
//   ของแอปให้ค้นหาจากชื่ออย่างเดียว ไม่ต้องเลือกแผนกก่อน
window.MASTER_DATA = {
  "members": [
  {
    "id": "ss1",
    "name": "ธัญสินี ทองกาญจนา"
  },
  {
    "id": "ss2",
    "name": "นพพร พึ่งชื่น"
  },
  {
    "id": "ss3",
    "name": "นิยม วงศ์ศิรินพ"
  },
  {
    "id": "ss4",
    "name": "ประชาชาติ แสนทรัพย์"
  },
  {
    "id": "ss5",
    "name": "ประหยัด รัตนะวัน"
  },
  {
    "id": "ss6",
    "name": "ปัทมาวดี เกียรติเบญจกุล"
  },
  {
    "id": "ss7",
    "name": "ทัศนีย์ แซ่อึ้ง"
  },
  {
    "id": "ss8",
    "name": "ศุภกิจ จันทรวิสุทธิ์เลิศ"
  },
  {
    "id": "ss9",
    "name": "กรวรรณ วรกิจบำรุง"
  },
  {
    "id": "ss10",
    "name": "จริยา คงเพชร"
  },
  {
    "id": "ss11",
    "name": "จารุณี ปานต่อเหล่า"
  },
  {
    "id": "ss12",
    "name": "ชฎาภรณ์ พลชาติ"
  },
  {
    "id": "ss13",
    "name": "ฐิติชัย อธิคมกุลชัย"
  },
  {
    "id": "ss14",
    "name": "ณัฐกฤษณ์ อรุณพัฒนสุข"
  },
  {
    "id": "ss15",
    "name": "ณัฐกิตติ์ จิรวุฒิวรานันท์"
  },
  {
    "id": "ss16",
    "name": "ณัฐวุฒิ เรืองพุ่ม"
  },
  {
    "id": "ss17",
    "name": "ดาริน เปรมปรีชา"
  },
  {
    "id": "ss18",
    "name": "ธนัดดา เครือคำ"
  },
  {
    "id": "ss19",
    "name": "ธัญพิมล ขันทอง"
  },
  {
    "id": "ss20",
    "name": "ธีรทัศน์ พาโคกทม"
  },
  {
    "id": "ss21",
    "name": "นคร นิรุตตินานนท์"
  },
  {
    "id": "ss22",
    "name": "นภัสสร มีรอด"
  },
  {
    "id": "ss23",
    "name": "นภาพร ศรีกุล"
  },
  {
    "id": "ss24",
    "name": "นรากร พีราวัชร"
  },
  {
    "id": "ss25",
    "name": "นวคุณ ประสิทธิ์ศิลป์"
  },
  {
    "id": "ss26",
    "name": "บังเอิญ แจ่มนารี"
  },
  {
    "id": "ss27",
    "name": "ปฏิญญา คงเคารพธรรม"
  },
  {
    "id": "ss28",
    "name": "พัชรี นวเลิศกษมา"
  },
  {
    "id": "ss29",
    "name": "พัทธ์ธีรา ประชาเสรี"
  },
  {
    "id": "ss30",
    "name": "พาริสา โกศัลลกูฏ"
  },
  {
    "id": "ss31",
    "name": "พีรพัฒน์ ศิรวัฒนากุล"
  },
  {
    "id": "ss32",
    "name": "ภรภัทร เตโชเสถียร"
  },
  {
    "id": "ss33",
    "name": "มนต์ชัย ลือประเสริฐ"
  },
  {
    "id": "ss34",
    "name": "เลอสรวง แสงธนู"
  },
  {
    "id": "ss35",
    "name": "วณิชยา ผลวัฒนะ"
  },
  {
    "id": "ss36",
    "name": "วัชรพล บรรเทิง"
  },
  {
    "id": "ss37",
    "name": "วิษณุ ช่างทอง"
  },
  {
    "id": "ss38",
    "name": "วีระพงษ์ มะลิงาม"
  },
  {
    "id": "ss39",
    "name": "วีระพล สุนทรศิริชัย"
  },
  {
    "id": "ss40",
    "name": "ศุภวดี สิทธิจำเริญ"
  },
  {
    "id": "ss41",
    "name": "สายรุ้ง ศรีนาค"
  },
  {
    "id": "ss42",
    "name": "สุรสีห์ วงค์สมศรี"
  },
  {
    "id": "ss43",
    "name": "อรนุช พุทธบูชา"
  },
  {
    "id": "ss44",
    "name": "อัจฉรา พันเลิศนรากุล"
  },
  {
    "id": "ss45",
    "name": "เอกสิทธิ์ โฆษิตวงษา"
  }
],
  "areas": [
  {
    "id": "a1",
    "location": "Zone1",
    "zone": "Pilot Plant ชั้น 5",
    "order": 0
  },
  {
    "id": "a2",
    "location": "Zone1",
    "zone": "Pilot Plant ชั้น 4",
    "order": 1
  },
  {
    "id": "a3",
    "location": "Zone1",
    "zone": "Pilot Plant ชั้น 3",
    "order": 2
  },
  {
    "id": "a4",
    "location": "Zone1",
    "zone": "Pilot Plant ชั้น 2",
    "order": 3
  },
  {
    "id": "a5",
    "location": "Zone1",
    "zone": "Pilot Plant ชั้น 1",
    "order": 4
  },
  {
    "id": "a6",
    "location": "Zone2",
    "zone": "Office",
    "order": 0
  },
  {
    "id": "a7",
    "location": "Zone2",
    "zone": "ห้อง Lab",
    "order": 1
  },
  {
    "id": "a8",
    "location": "Zone2",
    "zone": "พื้นที่อื่นๆ เช่น Meeting Room / ห้องครัว / ห้องน้ำ",
    "order": 2
  },
  {
    "id": "a9",
    "location": "Zone3",
    "zone": "ทางเดิน",
    "order": 0
  },
  {
    "id": "a10",
    "location": "Zone3",
    "zone": "ห้องผ้า",
    "order": 1
  },
  {
    "id": "a11",
    "location": "Zone3",
    "zone": "โรงอาหาร",
    "order": 2
  },
  {
    "id": "a12",
    "location": "Zone3",
    "zone": "พื้นที่อื่นๆ เช่น ห้องน้ำ / ห้องฝากของ / ห้องโอ๊บเอี้ยม / ห้องพักผ่อนพนักงาน ชายและหญิง / Office HR",
    "order": 3
  },
  {
    "id": "a13",
    "location": "Zone4",
    "zone": "ห้องชั่งสาร",
    "order": 0
  },
  {
    "id": "a14",
    "location": "Zone4",
    "zone": "สโตร์",
    "order": 1
  },
  {
    "id": "a15",
    "location": "Zone4",
    "zone": "ห้อง Ink",
    "order": 2
  },
  {
    "id": "a16",
    "location": "Zone4",
    "zone": "ห้องปล่อยกระป๋อง",
    "order": 3
  },
  {
    "id": "a17",
    "location": "Zone4",
    "zone": "ช๊อปช่างด้านหลัง",
    "order": 4
  },
  {
    "id": "a18",
    "location": "Zone5",
    "zone": "ทางเข้าไลน์ผลิตกลางไลน์",
    "order": 0
  },
  {
    "id": "a19",
    "location": "Zone5",
    "zone": "คลุกผสม",
    "order": 1
  },
  {
    "id": "a20",
    "location": "Zone5",
    "zone": "บรรจุ",
    "order": 2
  },
  {
    "id": "a21",
    "location": "Zone5",
    "zone": "ขูดหนังขูดเลือด",
    "order": 3
  },
  {
    "id": "a22",
    "location": "Zone5",
    "zone": "เตรียมวัตถุดิบ Topping",
    "order": 4
  },
  {
    "id": "a23",
    "location": "Zone5",
    "zone": "ปลาสด",
    "order": 5
  },
  {
    "id": "a24",
    "location": "Zone5",
    "zone": "Retort",
    "order": 6
  },
  {
    "id": "a25",
    "location": "Zone5",
    "zone": "เช็คกระป๋อง",
    "order": 7
  },
  {
    "id": "a26",
    "location": "Zone5",
    "zone": "ทางเดินลูกค้า",
    "order": 8
  },
  {
    "id": "a27",
    "location": "Zone6",
    "zone": "เตรียมวัตถุดิบ + คลุกผสม",
    "order": 0
  },
  {
    "id": "a28",
    "location": "Zone6",
    "zone": "บรรจุ",
    "order": 1
  },
  {
    "id": "a29",
    "location": "Zone6",
    "zone": "Retort",
    "order": 2
  },
  {
    "id": "a30",
    "location": "Zone6",
    "zone": "เช็คกระป๋อง",
    "order": 3
  },
  {
    "id": "a31",
    "location": "Zone7",
    "zone": "-",
    "order": 0
  },
  {
    "id": "a32",
    "location": "Zone7",
    "zone": "ทางเดินเข้าไลน์ผลิต",
    "order": 1
  },
  {
    "id": "a33",
    "location": "Zone7",
    "zone": "พื้นที่อื่นๆ เช่น ห้องน้ำพนักงาน / ทางเดินลูกค้า / ห้องน้ำลูกค้า /Meeting Room / Office Fa",
    "order": 2
  },
  {
    "id": "a34",
    "location": "Zone8",
    "zone": "เตรียมวัตถุดิบ + คลุกผสม",
    "order": 0
  },
  {
    "id": "a35",
    "location": "Zone8",
    "zone": "บรรจุ",
    "order": 1
  },
  {
    "id": "a36",
    "location": "Zone8",
    "zone": "Retort",
    "order": 2
  },
  {
    "id": "a37",
    "location": "Zone8",
    "zone": "เช็คกระป๋อง",
    "order": 3
  },
  {
    "id": "a38",
    "location": "Zone9",
    "zone": "-",
    "order": 0
  },
  {
    "id": "a39",
    "location": "Zone9",
    "zone": "ทางเดินเข้าไลน์ผลิต",
    "order": 1
  },
  {
    "id": "a40",
    "location": "Zone9",
    "zone": "ทางเดินลูกค้า",
    "order": 2
  },
  {
    "id": "a41",
    "location": "Zone9",
    "zone": "พื้นที่อื่นๆ เช่น ห้องน้ำพนักงาน /ห้องน้ำลูกค้า /Meeting Room",
    "order": 3
  },
  {
    "id": "a42",
    "location": "Zone10",
    "zone": "เตรียมวัตถุดิบ + คลุกผสม",
    "order": 0
  },
  {
    "id": "a43",
    "location": "Zone10",
    "zone": "บรรจุ",
    "order": 1
  },
  {
    "id": "a44",
    "location": "Zone10",
    "zone": "Retort",
    "order": 2
  },
  {
    "id": "a45",
    "location": "Zone10",
    "zone": "เช็คกระป๋อง",
    "order": 3
  },
  {
    "id": "a46",
    "location": "Zone11",
    "zone": "ไลน์ปิดฉลาก",
    "order": 0
  },
  {
    "id": "a47",
    "location": "Zone11",
    "zone": "ลานโหลด",
    "order": 1
  },
  {
    "id": "a48",
    "location": "Zone11",
    "zone": "ห้องเย็น C",
    "order": 2
  },
  {
    "id": "a49",
    "location": "Zone11",
    "zone": "สโตร์",
    "order": 3
  },
  {
    "id": "a50",
    "location": "Zone12",
    "zone": "พื้นที่ห้องเย็น / จุดลงปลา คัดปลา",
    "order": 0
  },
  {
    "id": "a51",
    "location": "Zone13",
    "zone": "พื้นที่รอบนอก ได้แก่ ป้อม รปภ.1-2 /จุดเก็บถังปลา / Boiler / ห้องขยะ /ลานจอดรถ",
    "order": 0
  }
],
  "zoneGroups": [
  {
    "location": "Zone1",
    "desc": "Pilot Plant"
  },
  {
    "location": "Zone2",
    "desc": "ITC 2.1 Office ชั้น 2"
  },
  {
    "location": "Zone3",
    "desc": "ITC 2.1 พื้นที่ส่วนกลาง ชั้น 2"
  },
  {
    "location": "Zone4",
    "desc": "ITC 2.1 พื้นที่การผลิต ชั้น 2"
  },
  {
    "location": "Zone5",
    "desc": "ITC 2.1 พื้นที่การผลิต ชั้น 1"
  },
  {
    "location": "Zone6",
    "desc": "ITC 2.2 พื้นที่การผลิต ชั้น 1"
  },
  {
    "location": "Zone7",
    "desc": "ITC 2.2 พื้นที่ส่วนกลาง ชั้น 1.5"
  },
  {
    "location": "Zone8",
    "desc": "ITC 2.2 พื้นที่การผลิต ชั้น 2"
  },
  {
    "location": "Zone9",
    "desc": "ITC 2.2 พื้นที่ส่วนกลาง ชั้น 2.5"
  },
  {
    "location": "Zone10",
    "desc": "ITC 2.2 พื้นที่การผลิต ชั้น 3"
  },
  {
    "location": "Zone11",
    "desc": "พื้นที่ปิดฉลาก 40 ไร่"
  },
  {
    "location": "Zone12",
    "desc": "ห้องเย็น ITC"
  },
  {
    "location": "Zone13",
    "desc": "พื้นที่รอบนอก"
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
  "เครื่องจักรถูกเปิดทิ้งไว้",
  "สารเคมี",
  "แก๊สรั่ว",
  "อื่นๆ"
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
