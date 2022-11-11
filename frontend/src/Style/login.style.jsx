import styled from "styled-components";

export const LoginWrapper=styled.div`
 display:flex;
 align-items: center;
 justify-content: center;
padding-top:30px;
margin-top:-30px;
 background-color: rgb(250,250,250);
 padding-bottom:80px;
    
`

export const LeftDivWrapper=styled.div`
    background-color:white;
    margin-bottom:-30px;
    border-radius: 2px;
     width:530px;
     height:500px;
     box-shadow: rgba(74,146,227, 0.3) 0px 5px 24px;
     h2{
        font-size:20px;
        font-family:Roboto;
     }
     .regis-button{
      border:1px solid rgb(74,146,227);
      color:rgb(74,146,227);
      margin-top:30px;
      padding:8px 55px;
      font-weight:600;
      letter-spacing:0.3px;
     }
     .left-heading{
      font-family:sans-serif;
      font-size:20px;
      font-weight:600;
      line-height: 28px;
      color:rgb(9,30,66);

     }
     .img-parent{
        width:100%;
        height:200px;
     }
     #login-last-image{
          margin-bottom:0px;
          width:205px;
      
         
    margin-top:47px;
    margin-left:325px;
     }
     #left-main-div{
        width:80%;
        margin-left:50px;
        margin-top:55px;
        p{
            font-size:14px;
            font-weight:400;
            line-height: 24px;
            color:rgb(9,30,66);
            margin-top:15px;
        }
     }
`

export const RightDivWrapper=styled.div`       
      background-color: white;
      border-radius: 2px;
       width:450px;
      box-shadow: rgba(74,146,227, 0.2) 0px 8px 24px;
     height:550px;
     margin-top:10px;
     .right-main-div{
      width:69%;

      margin:auto;
      margin-top:40px;
     }
     .rit-heading{
        font-size:20px;
        font-family:sans-serif;
        font-weight:600;

     }
     .form-input-right{
      border:1px solid gray;
      width:310px;
      height:40px;
      padding-left:15px;
      font-size:16px;
      margin-bottom:-40px;
      &:focus{
         outline:none;
         border:1px solid rgb(74,146,227);
      }
     }
     .form-label-right{
      font-size:12px;
      font-weight:500;
      margin-top:25px;
      margin-bottom:5px;
     }
     .forgot-pass{
       color:rgb(74,146,227);
       text-align: right;
       font-size:12px;
       font-family:sans-serif;
      cursor:pointer;


     }
     #label-hide1{
      color:red;
      margin-top:6px;
      visibility: show;
     }
     #label-hide2{
      color:red;
      margin-top:6px;
      visibility:show;
     }

     .normal-login-right{
      width:310px;
       height:40px;
       font-size:16px;
       font-weight:600;
       letter-spacing: 0.3px;
       background-color:rgb(74,146,227);
       color:white;
       margin-top:13px;
     }
     .OTP-login-right{
      text-align: center;
       width:310px;
       height:40px;
       font-size:16px;
       font-weight:600;
       letter-spacing: 0.3px;
       color:rgb(74,146,227);
     }

     .google-sign-right{
         display:flex;
         align-items: center;
       
       width:310px;
       border-radius:25px;
       height:40px;
       font-size:13px;
       font-weight:500;
       font-family:sans-serif;
       letter-spacing: 0.6px;
         box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
     }

     .img-right-google{
       width:20px;
       margin-left:20px;
       margin-right:60px;
       vertical-align: middle;
     }

     .or-div{
        display:flex;
         margin-top:10px;
         margin-bottom:30px;
        align-items: center;
        font-weight:100
        
     }
     .line-div{
      height:1px;
      border-bottom:1px solid gray;
      width:100%;
      
     }
     .or-span{
    
      width:25px;
      background-color: white;
      display:flex;
      justify-content: center;
      align-items: center;
      height:25px;
      margin-left:-170px;
      border-radius:50%;
     }
  
`

export const RightDivInside=styled.div`
    
`

export const FormWrapper=styled.form`
    
`

// export const InputWrapper=styled.div`
//   margin:auto;
//   width:310px;

// `

// export const HeadingWrapper=styled.div `
//     text-align:center;
//     margin-top:10px;
//     margin-bottom:30px;
  
// `

// export const SubmitWrapper=styled.div`
 
//     margin-top:20px;
//     input{
//         width:100%;
//         height:35px;
//         border-radius:5px;
     
//     }
// `

