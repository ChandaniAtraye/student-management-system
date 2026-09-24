const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const app = express();

connectDB();
app.use(cors({
//  origin: "https://studentmern.netlify.app", // Vite frontend
  origin: "http://localhost:5173", 
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));


app.use(express.json());

app.use("/api/auth",require("./routes/authRoutes"));
app.use('/api/courses',require('./routes/courseRoutes'));
app.use("/api/students",require("./routes/studentRoutes"));
app.use("/api/attendance",require("./routes/attendanceRoutes"));

app.get("/",(req,res)=>{
    res.send("Student API is running");
})

app.listen(process.env.PORT,()=>
    console.log(`Server running on port ${process.env.PORT} `)
);