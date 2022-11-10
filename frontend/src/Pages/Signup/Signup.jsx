import React from 'react'
import {Link,useNavigate} from "react-router-dom"
import { HeadingWrapper, InputWrapper, NavLink, SignupWrapper, SubmitWrapper } from '../../Style/signup.style'
import { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {signup} from  "../../Redux/AuthReducer/action"

const Signup = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate()
  const [alrt,setAlrt]=useState("")
  const [name,setName]=useState("")
  const [last,setLast]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  const {isError,isLoading}=useSelector((state)=>{return {isError:state.AuthReducer.isError,isLoading:state.AuthReducer.isLoading}})


 

  const handleSubmit=(e)=>{
    const payload={
      first_name:name,
      last_name:last,
      email:email,
      password:password
    }
    e.preventDefault();
    if(name && last && email && password){
       dispatch(signup(payload)).then((res)=>{
        let resp=(res.payload.data.mesg)
         setAlrt(resp)
         alert(resp)
         navigate("/login")
       }).catch((err)=>{
        console.log(err)
       })
    }

  }

  return (
    
        // isLoading ?<img src="https://createwebsite.net/wp-content/uploads/2015/09/GD.gif" style={{height:"150px",display:"flex",alignItems:"center",justifyContent:"center",margin:"auto",marginTop:"200px"}}></img> :
        
        
        <SignupWrapper>
       
        <HeadingWrapper><h1>Sign Up</h1></HeadingWrapper>
         <form onSubmit={handleSubmit}>
          <InputWrapper>
         
          <label>First Name</label><br/>
           <input value={name} type="text" onChange={(e)=>setName(e.target.value)}></input>
           <label>Last Name</label><br/>
           <input value={last} type="text" onChange={(e)=>setLast(e.target.value)}></input>
           <label>Email</label><br/>
           <input value={email} type="text" onChange={(e)=>setEmail(e.target.value)}></input>
           <label>Password</label><br/>
           <input value={password}  type="text" onChange={(e)=>setPassword(e.target.value)}></input>
           <SubmitWrapper>
           <input type="submit"></input>
           </SubmitWrapper>
           
          </InputWrapper>
          
         </form>
         <h5>Already have an account ?<NavLink to="/login">Sign In</NavLink></h5>
      </SignupWrapper>  
  
  )
}

export default Signup;
