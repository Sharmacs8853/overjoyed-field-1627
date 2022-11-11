import React, { useState } from "react";
import {

  FormWrapper,
  LeftDivWrapper,
  LoginWrapper,
  RightDivWrapper,
} from "../../Style/login.style"

import {SubmitWrapper} from "../../Style/signup.style"
import { NavLink } from "../../Style/signup.style"
import {login} from "../../Redux/AuthReducer/action"
import { useDispatch,useSelector } from "react-redux";
import {useNavigate} from "react-router-dom"
import {IoMdCheckmark} from "react-icons/io"

const Login = () => {
  
  // const dispatch=useDispatch();
  // const [email,setEmail]=useState("")
  // const [password,setPassword]=useState("")
  // const navigate=useNavigate();

  // const {isError,isLoading}=useSelector((state)=>{return {isError:state.AuthReducer.isError,isLoading:state.AuthReducer.isLoading}})



  // const handleSubmit=(e)=>{
  //   e.preventDefault();
  //   if(email && password){
  //     const payload={
  //       email:email,
  //       password:password
  //      }
  //      dispatch(login(payload)).then((res)=>{
      
  //      if(res.payload.token){
  //       const user_token=res.payload.token;
  //       const first_name=res.payload.name
  //       const last_name=res.payload.title
  //       const user_email=res.payload.email
         

  //       const data={
  //          name:first_name,
  //          title:last_name,
  //          email:user_email,
  //          token:user_token
  //       }

  //       localStorage.setItem("profile",JSON.stringify(data))
  //       navigate("/")
       
  //      }
  //      else{
  //       alert(res.payload.mesg)
  //      }
      
       
  //      }).catch((err)=>{
  //       console.log(err)
  //      })
  //   }
  // }

  return (


    // isLoading ?<img src="https://createwebsite.net/wp-content/uploads/2015/09/GD.gif" style={{height:"150px",display:"flex",alignItems:"center",justifyContent:"center",margin:"auto",marginTop:"200px"}}></img>  :
    
    
    <LoginWrapper>
  
      {/* <HeadingWrapper>
        <h1>Sign In</h1>
      </HeadingWrapper>
      <form onSubmit={handleSubmit}>
        <InputWrapper>
          <label>Email</label>
          <br />
          <input id="Login-input" value={email} type="text" onChange={(e)=>setEmail(e.target.value)}></input>
          <br />
          <label>Password</label>
          <br />
          <input vlaue={password} type="text" onChange={(e)=>setPassword(e.target.value)}></input>
          <SubmitWrapper>
          <input type="submit"></input>
          </SubmitWrapper>
        
        </InputWrapper>
      </form>
      <h5>Don't have an account ?<NavLink to="/signup">Sign Up</NavLink></h5> */}

   
        <LeftDivWrapper>
          <div id="left-main-div">
          <h2 className="left-heading">New to Naukri?</h2>
          <div>
           <p><IoMdCheckmark style={{display:"inline",marginRight:"10px",fontWeight:"300",fontSize:"18px",color:"rgb(74,144,226)"}}/>One click apply using naukri profile.</p>
        <p><IoMdCheckmark style={{display:"inline",marginRight:"10px",fontWeight:"300",fontSize:"18px",color:"rgb(74,144,226)"}}/>Get relevant job recommendations.</p>
          <p><IoMdCheckmark style={{display:"inline",marginRight:"10px",fontWeight:"300",fontSize:"18px",color:"rgb(74,144,226)"}}/>Showcase profile to top companies and consultants.</p>
             <p><IoMdCheckmark style={{display:"inline",marginRight:"10px",fontWeight:"300",fontSize:"18px",color:"rgb(74,144,226)"}}/>Know application status on applied jobs.</p>
          </div>
          <button className="regis-button">Register for Free</button>
          </div>

          <div className="img-parent">
            <img id="login-last-image" src="https://static.naukimg.com/s/5/105/i/register.png" alt="" />
          </div>
         
        </LeftDivWrapper>

       <RightDivWrapper>
            <div className="right-main-div">

        
           <h2 className="rit-heading">Login</h2>
           <div>
              <FormWrapper>
              <label className="form-label-right">Email ID/Username </label><br/>
              <input className="form-input-right" type="email" placeholder="Enter Email ID / Username"></input>
              <label className="form-label-right" id="label-hide1">Email ID/Username cannot be left blank</label>
              <br/>
              <label className="form-label-right">Password</label><br/>
              <input className="form-input-right" type="password" placeholder="Enter password" ></input>
              <label id="label-hide2"  className="form-label-right">Password cannot be left blank</label>
              <br/>
              <p className="forgot-pass">Forgot Password?</p>
              <button className="normal-login-right">Login</button><br/>
              <button className="OTP-login-right">Use OTP to Login</button>
              </FormWrapper>
            <div className="or-div">
               <div className="line-div"></div>
              <div className="or-span">or</div></div>
            <button className="google-sign-right"><img className="img-right-google" src="https://static.naukimg.com/s/5/105/i/ic-google.png"></img>Sign In with Google</button>
           </div>
           </div>
       </RightDivWrapper>

    
    </LoginWrapper>
  );
};

export default Login;
