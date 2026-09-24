const Attendance = require("../models/Attendance");

// CREATE ATTENDANCE
exports.createAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.create(req.body);

    res.status(201).json({
      message: "Attendance marked successfully",
      attendance
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server error"
    });
  }
};


// GET ALL ATTENDANCE
exports.getAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.find()
      .populate("student")
      .populate("course");

    res.json(attendance);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server error"
    });
  }
};


// UPDATE ATTENDANCE
exports.updateAttendance = async (req, res) => {
  try {
    await Attendance.findByIdAndUpdate(
      req.params.id,
      req.body
    );

    res.json({
      message: "Attendance updated successfully"
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server error"
    });
  }
};


// DELETE ATTENDANCE
exports.deleteAttendance = async (req, res) => {
  try {
    await Attendance.findByIdAndDelete(req.params.id);

    res.json({
      message: "Attendance deleted successfully"
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server error"
    });
  }
};