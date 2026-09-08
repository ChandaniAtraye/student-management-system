const Student = require("../models/Student");

exports.createStudent = async (req,res) =>{
    try{
         const student = await Student.create(req.body);
     res.status(200).json({message:"Student Created Successfully",student});
    }catch(error){
        console.error(error);
        res.status(500).json({message:"Server error"});
    }
   
};
exports.getStudents = async(req,res) =>{
    const students = await Student.find().populate("course");
    res.json(students);
};

exports.updateStudent = async(req,res) =>{
    await Student.findByIdAndUpdate(req.params.id, req.body);
    res.json({message:"Student Updated Successfully"});
};
exports.deleteStudent = async(req,res) =>{
    await Student.findByIdAndDelete(req.params.id);
    res.json({message:"Student Deleted Successfully"});
};