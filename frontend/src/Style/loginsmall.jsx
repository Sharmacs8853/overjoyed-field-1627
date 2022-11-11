
import styled from "@emotion/styled";

export const SmallLoginWrapper=styled.div`
 
  width:97%;
.small-login-main-div{

    width:85%;
    
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
.dis{
    font-size:11px;
    font-weight:500;
    margin-bottom:15px;
    margin-top:10px;
}
  
.small-signup-register{
    width:100%;
    margin-top:30px;
    margin-bottom:50px;
    color:white;
    font-weight:600;
    background-color:rgb(69, 126, 255);
    border-radius:20px;
    padding:4px 0px;
}
`

export const TermsWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 3px;
  color: rgb(68, 85, 120);
  font-size: 11px;
  font-weight: 400;
  line-height: 20px;
  vertical-align: baseline;

  span {
    color: rgb(69, 126, 255);
  }
`;


export const WhatsappWrapperSmall = styled.div`
  margin-top: 20px;
  border:1px solid transparent;
  margin-bottom: 20px;
  background-color: white;
  display: flex;
  align-items: center;
   width:100%;

  .whats-input {
    display: inline-block;
    margin: auto;
    vertical-align: middle;
    margin-right: 10px;
    width: 15px;
    height: 15px;
    accent-color: rgb(255, 117, 85);
    color: white;
    &:hover {
      background-color: blue;
    }
  }
 .whats-img{
    vertical-align: middle;
    font-size: 11px;
    width: 15px;
    height: 15px;
    margin-left: 5px;
    margin-right: 5px;

  }
  .whats-span{
    display:flex;
    align-items: center;
    color: rgb(68, 85, 120);
    font-family: Inter;
    font-weight: 400;
    font-size: 11px;
    line-height: 20px;
    cursor: pointer;

  }
 
`;