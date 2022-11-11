
const jwt = require("jsonwebtoken");
require("dotenv").config();
const authentication = (req,res,next)=>{
      console.log(req.headers.authorization)
      if(!req.headers.authorization){
        res.send("submit the token first...")
         return  
    }

    const token = req.headers.authorization.split(" ")[1];

   const decoded= jwt.verify(token, process.env.SECRET);
   const user_id = decoded.user_id
    if(decoded){
        req.body.user_id = user_id
        next()
    }else{
        res.send("YOU ARE NOT Logged in")
    }
    
 }

 module.exports= {
    authentication
 }