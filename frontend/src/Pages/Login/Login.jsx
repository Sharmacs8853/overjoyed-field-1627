import React, { useState,useEffect } from "react";
import {

  FormWrapper,
  LeftDivWrapper,
  LoginWrapper,
  RightDivWrapper,
} from "../../Style/login.style"

import {Link} from "react-router-dom";
import {login} from "../../Redux/AuthReducer/action"
import { useDispatch,useSelector } from "react-redux";
import {useNavigate} from "react-router-dom"
import {IoMdCheckmark} from "react-icons/io"
import { LoginSmallWrapper } from "../../Style/loginRender.style";

const Login = () => {

  const dispatch=useDispatch();
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const navigate=useNavigate();
  const [size,setWindowSize]=useState(window.innerWidth)



  // const {isError,isLoading}=useSelector((state)=>{return {isError:state.AuthReducer.isError,isLoading:state.AuthReducer.isLoading}})



  const handleSubmit=(e)=>{
    e.preventDefault();
    if(email && password){
      
      const payload={
        email:email,
        password:password
       }
        
       dispatch( login(payload)).then((res)=>{
      
    
        const user_token=res.payload.document.token;
        const user_name=res.payload.document.name
        const user_mobile=res.payload.document.mobile
        const user_email=res.payload.document.email
        const user_id=res.payload.document.id
        
        const data={
           name:user_name,
           mobile:user_mobile,
           email:user_email,
           token:user_token,
           id:user_id
        }
    
        localStorage.setItem("profile",JSON.stringify(data))
         navigate("/")
           alert(res.payload.msg)
       
       }).catch((err)=>{
        console.log(err)
        
       })
    }

  }
 
  React.useEffect(() => {
    function handleResize() {
     setWindowSize(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
  })


 
  return (


    // isLoading ?<img src="https://createwebsite.net/wp-content/uploads/2015/09/GD.gif" style={{height:"150px",display:"flex",alignItems:"center",justifyContent:"center",margin:"auto",marginTop:"200px"}}></img>  :
    
    
    //  size<1300 ?<LoginSmallWrapper>
    //        <div  className="small-login-main-div">
    //        <h2 className="small-login-heading">Login to Naukri</h2>
    // <p className="small-login-para">5 Lakh+ recruiters are looking for candidates on Naukri</p>
    // <form className="small-signup-form" >
    //   <label className="small-signup-label">Email Address</label><br/>
    //   <input  className="small-signup-input" type="email"  ></input><br/>
    //   <label className="small-signup-label">Password</label><br/>
    //   <input  className="small-signup-input" type="password"></input><br/>
    //    </form>   
    //         <button  className="small-signup-register">Login</button>
    //       </div>
    //  </LoginSmallWrapper>:
    <LoginWrapper>
  
        <LeftDivWrapper>
          <div id="left-main-div">
          <h2 className="left-heading">New to Naukri?</h2>
          <div>
           <p><IoMdCheckmark style={{display:"inline",marginRight:"10px",fontWeight:"300",fontSize:"18px",color:"rgb(74,144,226)"}}/>One click apply using naukri profile.</p>
        <p><IoMdCheckmark style={{display:"inline",marginRight:"10px",fontWeight:"300",fontSize:"18px",color:"rgb(74,144,226)"}}/>Get relevant job recommendations.</p>
          <p><IoMdCheckmark style={{display:"inline",marginRight:"10px",fontWeight:"300",fontSize:"18px",color:"rgb(74,144,226)"}}/>Showcase profile to top companies and consultants.</p>
             <p><IoMdCheckmark style={{display:"inline",marginRight:"10px",fontWeight:"300",fontSize:"18px",color:"rgb(74,144,226)"}}/>Know application status on applied jobs.</p>
          </div>
          <button className="regis-button"><Link to="/user/signup">Register for Free</Link></button>
          </div>

          <div className="img-parent">
            <img id="login-last-image" src="https://static.naukimg.com/s/5/105/i/register.png" alt="" />
          </div>
         
        </LeftDivWrapper>

       <RightDivWrapper>
            <div className="right-main-div">

        
           <h2 className="rit-heading">Login</h2>
           <div>
              <form onSubmit={handleSubmit}>
              <label className="form-label-right">Email ID/Username </label><br/>
              <input value={email} className="form-input-right" type="email" placeholder="Enter Email ID / Username" onChange={(e)=>setEmail(e.target.value)}></input>
               {/* <label className="form-label-right" id="label-hide1">Email ID/Username cannot be left blank</label> */}
              <br/>
              <label className="form-label-right">Password</label><br/>
              <input value={password} className="form-input-right" type="password" placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)} ></input>
             {/* <label id="label-hide2"  className="form-label-right">Password cannot be left blank</label> */}
              <br/>
              <p className="forgot-pass">Forgot Password?</p>
              <button className="normal-login-right">Login</button><br/>
              <button className="OTP-login-right">Use OTP to Login</button>
              </form>
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
