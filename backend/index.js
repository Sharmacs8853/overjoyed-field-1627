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

