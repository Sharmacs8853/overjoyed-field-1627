import styled from "styled-components"

export const LoginSmallWrapper=styled.div`
border:1px solid transparent;
box-sizing: border-box;

.small-login-main-div{
border:1px solid transparent;
box-sizing:border-box;
width:70%;
margin:auto;

}

.small-signup-input{

width:100%;
height:35px;
padding-left:15px;
border:1px solid gray;
font-size:14px;
&:focus{
outline:none;
border:1px solid rgb(69, 126, 255)
}

}
.small-login-heading{
font-size:16px;
font-family:sans-serif;
font-weight:700;
margin-top:30px;
margin-bottom:5px;
}
.small-login-para{
font-size:13px;
font-family:sans-serif;
font-weight:300;

}
.small-signup-label{
margin-top:20px;
margin-bottom:5px;
font-size:12px;
font-family:sans-serif;
letter-spacing:0.5px;
}


.small-signup-register{
width:100%;
margin-top:30px;
margin-bottom:50px;
color:white;
font-weight:600;
background-color:rgb(74,102,160);
border-radius:16px;
padding:4px 0px;
}  
`