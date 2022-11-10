import styled from "styled-components";
import {Link} from "react-router-dom";

export const SignupWrapper=styled.div`
    font-family:sans-serif;
    width:380px;
    height:450px;
    margin:auto;
    margin-top:30px;
    border-radius:13px;
    border:1px solid black;
    input{
       width:300px;
       height:25px;
       padding-left:5px;
       margin-top:3px;
       margin-bottom:10px;
    }
   
 
    h5{
        text-align: center;
        margin-top:5px;
        text-decoration:none;
    }
    
`


export const InputWrapper=styled.div`
  margin:auto;
  width:310px;

`

export const HeadingWrapper=styled.div `
    text-align:center;
    margin-top:10px;
    margin-bottom:30px;
`

export const SubmitWrapper=styled.div`
  
    margin-top:20px;
    input{
        width:100%;
        height:35px;
        border-radius:5px;
     
    }
`
export const NavLink=styled(Link)`
    text-decoration:none;
`