const express = require("express");
const { userController } = require("./Routes/user.route");
const app = express();
const {connection} = require(".//Config/db")
require("dotenv").config();
const {authentication} = require(".//Middlewares/authentication");
const { userModel } = require("./Models/user.model");

const cors= require("cors")
app.use(cors())
app.use(express.json());

app.get("/", (req, res) => {
  res.send("welcome to the jobkar app");
});

app.use("/user",userController);





app.listen(process.env.PORT, async() => {

    try{
         await connection
         console.log("database connected")
         console.log("listening on " + process.env.PORT);
    }catch(err){
        console.log("databse connecting failed" )
        console.log(err);
    }
});
