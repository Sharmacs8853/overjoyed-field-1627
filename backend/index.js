
require("dotenv").config();
const express = require("express");
const app = express();
const cors=require("cors")
const {connection}=require("./config/db")
const { userController } = require("./Routes/user.route");
const { jobModel } = require("./Models/Job.model");
const { adminController } = require("./Routes/Admin.route");
const { userModel } = require("./Models/user.model");

const PORT=process.env.PORT || 8080

app.use(cors())
app.use(express.json());

app.get("/", (req, res) => {
  res.send("welcome to the jobkar app");
});

app.use("/user", userController);
app.use("/admin", adminController)

app.get("/job", async (req, res) => {
  console.log(req.query)
  const query = req.query
  
    const job = await jobModel.find(query)
  
  res.send(job)

})

app.get("/job/:id", async (req, res) => {
  console.log(req.params.id)
  const id = req.params.id
  try{

    const job = await jobModel.findOne({_id:id})
  
  res.send(job)
  }
  catch(err){
    console.log(err)
  }
 
})

app.delete("/job/:id",async(req,res)=>{

  const id= req.params.id ;
  try{

    await jobModel.deleteOne({_id:id})
  
    // console.log(req.params)
   res.send({msg:"Job deleted successfully"}) 
  }
  catch(err){
    console.log(err)
  }


})



app.delete("/resgisteredusers/:id" , async(req,res)=>{
  const id= req.params.id ;
  try{

    await userModel.deleteOne({_id:id})
  
   
   res.send({msg:"User deleted successfully"}) 
  }
  catch(err){
    console.log(err)
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

  } catch (err) {
    console.log("databse connecting failed")
    console.log(err);
  }
  console.log("listening on " + PORT);
});

=======
require("dotenv").config();
const express = require("express");


const app = express();
const cors=require("cors")

const PORT=process.env.PORT || 8080
app.use(cors())
app.use(express.json());


const {connection}=require("./config/db")
const {userController}=require("./Routes/User.route")
const {adminController}=require("./Routes/Admin.route")
const {jobController}=require("./Routes/Job.route")
const {crudController}=require("./Routes/AdminCrud.route")



app.get("/", (req, res) => {
  res.send("welcome to the jobkar app");
});



app.use("/user", userController);
app.use("/admin", adminController);
app.use("/job",jobController);
app.use("/registeredusers",crudController);


app.listen(PORT, async () => {

  try {
    await connection
    console.log("Database Connection Successful")

  } catch (err) {
    console.log("Database Connection  Failed")
    console.log(err);
  }
  console.log("Listening to PORT",PORT);
});


