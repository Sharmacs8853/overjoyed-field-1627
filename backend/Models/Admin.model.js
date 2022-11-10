const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String , required:true},
    password:{type:String , required :true,min:4},
    
}) 

const adminModel = mongoose.model("admin" , adminSchema);

module.exports={
    adminModel
}
