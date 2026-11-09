
require("dotenv").config();

const express = require("express");
const cors = require("cors");

const studentRoutes = require("./src/routes/student.route");
const subjectRoutes = require("./src/routes/subject.route");

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Home
app.get("/", (req, res) => {
    res.json({
        message: "Lomphong is Running!"
    });
});

// API Routes
app.use("/api/students", studentRoutes);
app.use("/api/subjects", subjectRoutes);

// Start Server
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is Running on http://localhost:${PORT}`);
});
