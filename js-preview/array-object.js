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
    {id: 102, name: "Ball", age: 19, major:"IT Roblox"},
    {id: 103, name: "Korn", age: 30, major:"IT PUBG"},
];

// map : แปลงทุกตัว ให้ได้ array ใฟม่ในการแสดงผล
const names = studentList.map((s) => `รหัส ${s.id} ชื่อ ${s.name} อายุ ${s.age} สาขา ${s.major}`);
console.log(`ข้อมูลที่ใช้การ map : ${names}`);
