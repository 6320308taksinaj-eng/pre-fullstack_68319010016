const prisma = require("../prisma");
const { param } = require("../routes/student.route");

exports.getAllStudents = async (req, res) => {
    try {
        const serarch = req.query.search || "";
        const students = await prisma.student.findMany({
            where: { name: { contains: serarch } },
            orderBy: { id: "asc" },
        });
        res.json({ students });
    } catch (error) {
        res.status(500).json({ message: "Error" });
    }
}

//ดึงข้อมูลหลายคน
exports.getStudentById = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const student = await prisma.student.findUnique({
            where: { id }
        });
        if (!student) {
            return res.status(404).json({ message: 'Students not found' });
        }
        res.json(student);
    } catch {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

exports.createStudent = async (req, res) => {
    try {
        const { name, age, major } = req.body;

        if (!name || !age || !major) {
            return res.status(400).json({
                message: "Please Fill Information"
            });
        }

        const newStudent = await prisma.student.create({
            data: {
                name: name,
                age: Number(age),
                major: major
            }
        });

        res.status(201).json(newStudent);

    } catch (error) {
        console.error("Create Student Error:", error);

        res.status(500).json({
            message: "Fail",
            error: error.message
        });
    }
};

exports.updateStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, age, major } = req.body;

        const updateStudent = await prisma.student.update({
            where: { id: Number(id) },
            data: { name, age: Number(age), major }
        });

        res.status(200).json(updateStudent);
    } catch (error) {
        if (error.code === 'p2025') {
            return res.status(404).json({
                message: 'student Not Found'
            });
        }

        console.error(error);
        res.status(500).json({ message: 'Fail'});
    }
};

exports.deleteStudent = async (req, res) => {
    try {
        const { id } = req.params;

        await prisma.student.delete({
            where: { id: Number(id) },
        });

        res.json({ message: 'ลบนักศึกษารหัส ${id} สำเร็จ' });
    } catch (error) {
        if (error.code === 'P2025') {
            return res.status(404).json({ message: 'ไม่พบนักศึกษา' });
        }
        console.error(error);
        res.status(500).json({ message: 'Fail', error: error.message });
    }
};