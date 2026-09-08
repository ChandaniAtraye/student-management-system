const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");

const {createCourse,updateCourse,deleteCourse, getCourses} = require("../controllers/courseController");

router.post("/",auth,role("admin"),createCourse);
router.put("/:id",auth,role("admin"),updateCourse);
router.delete("/:id",auth,role("admin"),deleteCourse);

// admin + staff
router.get("/",auth,getCourses);

module.exports = router;