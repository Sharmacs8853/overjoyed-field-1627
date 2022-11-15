const {Router}=require("express");
const {userModel}=require("../Models/User.model")
const crudController=Router()


crudController.delete("/:id" , async(req,res)=>{
    const id= req.params.id ;
    try{
      await userModel.deleteOne({_id:id})
     res.send({msg:"User deleted successfully"}) 
    }
    catch(err){
      console.log(err)
    }
  })

  


  
  crudController.get("/",async(req,res)=>{
  const registeredusers= await userModel.find()
  res.send(registeredusers)
  })
  


module.exports={crudController};