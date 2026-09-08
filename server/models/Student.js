const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name:String,
    email:String,
    phone:String,
    course:{type:mongoose.Schema.Types.ObjectId,ref:"Course"},
    isActive:{type:Boolean, default:true}
},{timestamps:true});
module.exports = mongoose.model("Student",studentSchema);