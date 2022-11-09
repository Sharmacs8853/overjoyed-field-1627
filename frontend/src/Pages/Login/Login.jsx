import React, { useState } from "react";
import {
  HeadingWrapper,
  InputWrapper,
  LoginWrapper,
} from "../../Style/login.style"

import {SubmitWrapper} from "../../Style/signup.style"
import { NavLink } from "../../Style/signup.style"
import {login} from "../../Redux/AuthReducer/action"
import { useDispatch,useSelector } from "react-redux";
import {useNavigate} from "react-router-dom"


const Login = () => {
  const dispatch=useDispatch();
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const navigate=useNavigate();

  const {isError,isLoading}=useSelector((state)=>{return {isError:state.AuthReducer.isError,isLoading:state.AuthReducer.isLoading}})



  const handleSubmit=(e)=>{
    e.preventDefault();
    if(email && password){
      const payload={
        email:email,
        password:password
       }
       dispatch(login(payload)).then((res)=>{
      
       if(res.payload.token){
        const user_token=res.payload.token;
        const first_name=res.payload.name
        const last_name=res.payload.title
        const user_email=res.payload.email
         

        const data={
           name:first_name,
           title:last_name,
           email:user_email,
           token:user_token
        }

        localStorage.setItem("profile",JSON.stringify(data))
        navigate("/")
       
       }
       else{
        alert(res.payload.mesg)
       }
      
       
       }).catch((err)=>{
        console.log(err)
       })
    }
  }

  return (


    // isLoading ?<img src="https://createwebsite.net/wp-content/uploads/2015/09/GD.gif" style={{height:"150px",display:"flex",alignItems:"center",justifyContent:"center",margin:"auto",marginTop:"200px"}}></img>  :
    
    
    <LoginWrapper>
      <HeadingWrapper>
        <h1>Sign In</h1>
      </HeadingWrapper>
      <form onSubmit={handleSubmit}>
        <InputWrapper>
          <label>Email</label>
          <br />
          <input value={email} type="text" onChange={(e)=>setEmail(e.target.value)}></input>
          <br />
          <label>Password</label>
          <br />
          <input vlaue={password} type="text" onChange={(e)=>setPassword(e.target.value)}></input>
          <SubmitWrapper>
          <input type="submit"></input>
          </SubmitWrapper>
        
        </InputWrapper>
      </form>
      <h5>Don't have an account ?<NavLink to="/signup">Sign Up</NavLink></h5>
    </LoginWrapper>
  );
};

export default Login;
