const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");

const {createStudent,getStudents,updateStudent,deleteStudent} = require("../controllers/studentController");

//Admin Only
router.post("/",auth,role("admin"),createStudent);
router.put("/:id",auth,role("admin"),updateStudent);
router.delete("/:id",auth,role("admin"),deleteStudent);


//Admin + Staff
router.get("/",auth,getStudents);
module.exports = router;