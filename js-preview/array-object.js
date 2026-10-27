// อาร์เรย์ และ ออบเจ็คต์

// Array
const students = ["Earth", "Tho", "Silapakorn", "Ood", "Matus"];

console.log(`ก. ทั้งหมด ${students}`);
console.log(`ข. คนแรก ${students[0]}`);
students.push("Mang");
console.log(`ค. หลังเพิ่มข้อมูลใหม่ให้ทำการแสดงผลลัพธ์ที่อัพเดต ${students} จำนวนรายชื่อ ${students.length} คน`);

// Object
const student = {
    id: 101,
    name: "Ice",
    age: 18,
    major: "Information Technologe",
};

console.log(`Name ${student.name}`);
console.log(`Major ${student.major}`);

// Array and Object
const studentList = [
    {id: 101, name: "Ice", age: 20, major:"IT"},
    {id: 102, name: "Ball", age: 19, major:"CG"},
    {id: 103, name: "Korn", age: 30, major:"IT"},
];

// map : แปลงทุกตัว ให้ได้ array ใฟม่ในการแสดงผล
const names = studentList.map((s) => `รหัส ${s.id} ชื่อ ${s.name} อายุ ${s.age} สาขา ${s.major}`);
console.log(`ข้อมูลที่ใช้การ map : ${names}`);


//filter : คัดกรองเฉพาะตัวที่เลือกและตรงเงื่อนไข
const isStudents = studentList.filter((s) => s.major === "IT");
console.log(`กรอกข้อมูล ${isStudents.length}`);

//find : หาตัวแรก(ตัวอักษร ตัวเลข)ที่ตรงเงื่อนไข
const found = studentList.find((s) => s.id === 103);
console.log("ค้นหา", found);
console.log(`ผลการค้นหา ${found.name}`);

//ค้นหาจากชื่อ ไม่สนพิมพ์เล็กพิมพ์ใหญ่
const keyword = "Ba";
const searchResult = studentList.filter((s) => s.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()));
console.log(`ผลการค้นหา : ${keyword}` , searchResult.map((s) => s.name));

// ค้นหา สาขา และให้แสดงข้อมูลทั้งหมดที่ตรงกับการพิมพ์แค่บางตัวอักขระ
const keywordmajor = "i";
const searchResultmajor = studentList.filter((s) => s.major.toLocaleLowerCase().includes(keywordmajor.toLocaleLowerCase()));
console.log(`ผลการค้นหา : ${keywordmajor}` , searchResultmajor.map((s) => s.major));