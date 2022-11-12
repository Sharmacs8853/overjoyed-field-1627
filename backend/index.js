const express = require("express");
const { userController } = require("./Routes/user.route");
const app = express();
const cors=require("cors")
const { connection } = require(".//Config/db")
require("dotenv").config();
const { authentication } = require(".//Middlewares/authentication");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")


const { jobModel } = require("./Models/Job.model");
// const { adminModel } = require("./Models/Admin.model");
const { adminController } = require("./Routes/Admin.route");
const { userModel } = require("./Models/user.model");
// const { userModel } = require("./Models/user.model");


app.use(cors())
app.use(express.json());

app.get("/", (req, res) => {
  res.send("welcome to the jobkar app");
});


app.use("/user", userController);
app.use("/admin", adminController)

app.get("/job", async (req, res) => {
  const job = await jobModel.find()
  // console.log(job)
  res.send(job)
})

app.get("/registeredusers",async(req,res)=>{
const registeredusers= await userModel.find()
res.send(registeredusers)
})

// app.get("/job/companyname", async (req, res) => {
//   const job = await jobModel.find({company_name:"Accenture" })
//   console.log(job)
//   res.send(job)
// })


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

