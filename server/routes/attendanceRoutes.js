const router = require("express").Router();

const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");

const {
  createAttendance,
  getAttendance,
  updateAttendance,
  deleteAttendance
} = require("../controllers/attendanceController");


// Admin only
router.post("/", auth, role("admin"), createAttendance);

router.put("/:id", auth, role("admin"), updateAttendance);

router.delete("/:id", auth, role("admin"), deleteAttendance);


// Admin + Staff
router.get("/", auth, getAttendance);


module.exports = router;