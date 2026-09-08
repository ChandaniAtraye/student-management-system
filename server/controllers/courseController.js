const Course = require("../models/Course");

exports.createCourse = async (req,res) =>{
    try{
         const course = await Course.create(req.body);
     res.status(200).json({message:"Course Created Successfully",course});
    }catch(error){
        console.error(error);
        res.status(500).json({message:"Server error"});
    }
   
};
exports.getCourses = async (req,res)=>{
    res.json(await Course.find());
}

exports.updateCourse = async(req,res) =>{
    await Course.findByIdAndUpdate(req.params.id, req.body);
    res.json({message:"Course Updated Successfully"});
};
exports.deleteCourse = async(req,res) =>{
    await Course.findByIdAndDelete(req.params.id);
    res.json({message:"Course Deleted Successfully"});
};