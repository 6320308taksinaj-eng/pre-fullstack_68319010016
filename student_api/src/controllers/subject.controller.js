
const prisma = require("../prisma");

// ดึงข้อมูลรายวิชาทั้งหมด + ค้นหา
exports.getAllSubjects = async (req, res) => {
    try {
        const search = req.query.search || "";

        const subjects = await prisma.subject.findMany({
            where: {
                OR: [
                    { SubjectCode: { contains: search } },
                    { Subjectname: { contains: search } },
                    { teacher: { contains: search } }
                ]
            },
            orderBy: { id: "asc" }
        });

        res.json({ subjects });

    } catch (error) {
        console.error("Get All Subjects Error:", error);
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
};

// ดึงข้อมูลรายวิชาตาม ID
exports.getSubjectById = async (req, res) => {
    try {
        const id = Number(req.params.id);

        if (!Number.isInteger(id) || id <= 0) {
            return res.status(400).json({
                message: "Invalid Subject ID"
            });
        }

        const subject = await prisma.subject.findUnique({
            where: { id }
        });

        if (!subject) {
            return res.status(404).json({
                message: "Subject Not Found"
            });
        }

        res.json(subject);

    } catch (error) {
        console.error("Get Subject Error:", error);
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
};

// เพิ่มข้อมูลรายวิชา
exports.createSubject = async (req, res) => {
    try {
        const {
            subjectCode,
            subjectName,
            objective,
            description,
            credits,
            teacher
        } = req.body;

        if (
            !subjectCode ||
            !subjectName ||
            !objective ||
            !description ||
            !credits ||
            !teacher
        ) {
            return res.status(400).json({
                message: "Please Fill Information"
            });
        }

        const newSubject = await prisma.subject.create({
            data: {
                SubjectCode: subjectCode,
                Subjectname: subjectName,
                objective: objective,
                description: description,
                credit: credits,
                teacher: teacher
            }
        });

        res.status(201).json(newSubject);

    } catch (error) {
        console.error("Create Subject Error:", error);

        if (error.code === "P2002") {
            return res.status(409).json({
                message: "Subject Code Already Exists"
            });
        }

        res.status(500).json({
            message: "Fail",
            error: error.message
        });
    }
};

// แก้ไขข้อมูลรายวิชา
exports.updateSubject = async (req, res) => {
    try {
        const id = Number(req.params.id);

        if (!Number.isInteger(id) || id <= 0) {
            return res.status(400).json({
                message: "Invalid Subject ID"
            });
        }

        const {
            subjectCode,
            subjectName,
            objective,
            description,
            credits,
            teacher
        } = req.body;

        const updateData = {};

        if (subjectCode !== undefined)
            updateData.SubjectCode = subjectCode;

        if (subjectName !== undefined)
            updateData.Subjectname = subjectName;

        if (objective !== undefined)
            updateData.objective = objective;

        if (description !== undefined)
            updateData.description = description;

        if (credits !== undefined)
            updateData.credit = credits;

        if (teacher !== undefined)
            updateData.teacher = teacher;

        if (Object.keys(updateData).length === 0) {
            return res.status(400).json({
                message: "No Information to Update"
            });
        }

        const updatedSubject = await prisma.subject.update({
            where: { id },
            data: updateData
        });

        res.status(200).json(updatedSubject);

    } catch (error) {
        console.error("Update Subject Error:", error);

        if (error.code === "P2025") {
            return res.status(404).json({
                message: "Subject Not Found"
            });
        }

        if (error.code === "P2002") {
            return res.status(409).json({
                message: "Subject Code Already Exists"
            });
        }

        res.status(500).json({
            message: "Fail",
            error: error.message
        });
    }
};

// ลบข้อมูลรายวิชา
exports.deleteSubject = async (req, res) => {
    try {
        const id = Number(req.params.id);

        if (!Number.isInteger(id) || id <= 0) {
            return res.status(400).json({
                message: "Invalid Subject ID"
            });
        }

        await prisma.subject.delete({
            where: { id }
        });

        res.json({
            message: `ลบรายวิชารหัส ${id} สำเร็จ`
        });

    } catch (error) {
        console.error("Delete Subject Error:", error);

        if (error.code === "P2025") {
            return res.status(404).json({
                message: "ไม่พบรายวิชา"
            });
        }

        res.status(500).json({
            message: "Fail",
            error: error.message
        });
    }
};
