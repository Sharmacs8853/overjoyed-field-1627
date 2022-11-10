const express = require("express");
const { userController } = require("./Routes/user.route");
const app = express();
const { connection } = require(".//Config/db")
require("dotenv").config();
const { authentication } = require(".//Middlewares/authentication");
const { userModel } = require("./Models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

const cors = require("cors");
// const { default: mongoose } = require("mongoose");
const { jobModel } = require("./Models/Job.model");
const { adminModel } = require("./Models/Admin.model");
app.use(cors())
app.use(express.json());

app.get("/", (req, res) => {
  res.send("welcome to the jobkar app");
});

app.use("/user", userController);

app.get("/job", async (req, res) => {
  const job = await jobModel.find()
  // console.log(job)
  res.send(job)
})

app.post("/adminsignup", async (req, res) => {
  const { email, password ,name} = req.body;
  const existing_user = await adminModel.findOne({ email });

  if (existing_user) {
    res.send("Admin already exist")
    return;
  }
  bcrypt.hash(password, 4, async function (err, hash) {
    if (err) {
      res.send({"msg":"signup failed ..please try again.."});
    } else {
      
      const new_admin = new adminModel({
        email,
        password: hash,
        name,
       
      });

      await new_admin.save();
      res.send({msg:"signup succesfull.."});
    }
  });
});


app.post("/adminlogin", async (req, res) => {
  const {email, password} = req.body

  const admin = await adminModel.findOne({email})

  const hashed_password = admin.password;

  const admin_id = admin._id;
 
  if(admin){

    bcrypt.compare(password, hashed_password, function(err, result) {
      if(err){
        res.send({"msg" : "Something went wrong, try again later"})
      }
      if(result){
        const token = jwt.sign({admin_id}, process.env.SECRET);  
        res.send({message : "Login successfull", token})
      }
      else{
        alert("login failed")
        res.send({"msg" : "Login failed"})
      }
    });
  }else{
    res.send({msg:"only admin can access ..please login with correct credentials.."})
  }
})




app.listen(process.env.PORT, async () => {

  try {
    await connection
    console.log("database connected")
    console.log("listening on " + process.env.PORT);
  } catch (err) {
    console.log("databse connecting failed")
    console.log(err);
  }

});