require("dotenv").config();
const express = require("express");
const app = express();
const cors=require("cors")
const { connection } = require(".//Config/db")

const { userController } = require("./Routes/user.route");
const { jobModel } = require("./Models/Job.model");
const { adminController } = require("./Routes/Admin.route");
const { userModel } = require("./Models/user.model");

const PORT=process.env.PORT || 8000

app.use(cors())
app.use(express.json());

app.get("/", (req, res) => {
  res.send("welcome to the jobkar app");
});

app.use("/user", userController);
app.use("/admin", adminController)

app.get("/job", async (req, res) => {
   
   
    let obj=req.query;
    console.log(obj)
    let size=Object.keys(obj).length;
    try{
      if(size>0){
        const job = await jobModel.find(req.query)
        res.send(job)
      }
      else if(size===0){
        const job = await jobModel.find({})
        res.send(job)
      }
    }
    catch(err){
      res.send({mesg:"Something went wrong"})
    }
   
  
})

app.get("/registeredusers",async(req,res)=>{
const registeredusers= await userModel.find()
res.send(registeredusers)
})



app.listen(PORT, async () => {

  try {
    await connection
    console.log("database connected")
    console.log("listening on " + PORT);
  } catch (err) {
    console.log("databse connecting failed")
    console.log(err);
  }

});

