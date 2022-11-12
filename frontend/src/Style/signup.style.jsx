import styled from "styled-components";
import { Link } from "react-router-dom";
export const MainSignup = styled.div`
  background-color: #fafbfe;
  box-sizing: border-box;
  font-family: Inter;
  font-family: sans-serif;
`;
export const SignupWrapper = styled.div`
  display: flex;

  box-sizing: border-box;
  font-family: Inter;
  font-family: sans-serif;
`;

export const HeadingWrapper = styled.div`

  background-color: white;
  font-weight: 700;
 
  margin-top: 55px;
  margin-bottom: 35px;
  h1 {
    
    font-size: 32px;
    background-color: white;
  }
`;

export const SubmitWrapper = styled.div`
  background-color: white;
  margin-bottom: 35px;
  margin-top:8px;
  button {
    cursor: pointer;
    padding: 10px 20px;
    font-size: 17px;
    font-weight: 500;
    border-radius: 25px;
    color: white;
    outline: none;
    border: none;
    background-color: rgb(69, 126, 255);
  }
`;
export const NavLink = styled(Link)`
  text-decoration: none;
`;

export const SignupWrapperLeft = styled.div`
  width: 280px;
  background-color: white;
  position: fixed;
  left: 75px;
  top: 180px;
  height: 300px;
  border: 1px dashed #d3e1ea;
  border-radius: 13px;
  z-index: 999;
  .all-div {
    background-color: white;

    width: 80%;
    margin: auto;
    margin-top: 10px;
  }
  p {
    background-color: white;
    margin-left: 25px;
    margin-top: -18px;
  }
  .indiv {
    font-family: Inter;
    font-weight: 400;
    font-size: 13px;

    color: rgb(68, 85, 120);
    background-color: white;
    display: block;
    justify-content: space-between;
    overflow-wrap: break-word;
    margin-bottom: 15px;
    line-height: 18px;
    text-align: left;
  }
  .heading {
    text-align: center;
    margin-top: 10px;
    background-color: white;
    h3 {
      background-color: white;
    }
  }
  img {
    margin-top: -50px;
    display: block;
    margin: auto;
    margin-top: -55px;
    background-color: transparent;
  }
`;

export const SignupWrapperRight = styled.div`
  width: 64vw;
  margin-top: 40px;
  margin-left: 400px;
  top: 200px;
  display: flex;
  border-radius: 15px;
  /* box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; */
  background-color: white;
`;

export const GoogleWrapper = styled.div`
  border-left: 1px solid #d3e1ea;
  width: 150px;
  font-family: Inter;
  height: 220px;
  margin-top: 130px;
  display: flex;

  justify-content: space-evenly;
  align-items: center;
  background-color: white;
  .OrDiv {
    background-color: white;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #d3e1ea;
    margin-left: -26px;
    font-size: 12px;
    border-radius: 50%;
  }
`;
export const GoogleImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  label {
    font-size: 13px;
    padding-bottom: 5px;
    font-weight: 500;
    letter-spacing: 0.5px;
  }
  button {
    display: flex;
    align-items: center;
    border-radius: 20px;
    border: 1px solid rgb(69, 126, 255);
    background-color: white;
    padding: 8px 15px;
    font-weight: 700;
    color: rgb(69, 126, 255);
  }
  span {
    margin-left: 5px;
  }
  img {
    width: 20px;
  }
`;
export const FormWrapper = styled.div`
  background-color: white;
  margin-left: 85px;
  width: 600px;
  font-family: Inter;

  label {
    letter-spacing: 0.5px;
    font-size: 13px;
    margin-bottom: 5px;
    font-weight: 500;
  }
  input {
    font-family: Inter;
    border: 1px solid #d3e1ea;
    font-weight: 400;
    width: 550px;
    font-size: 17px;
    color: gray;
    background-color: white;
    border-radius: 4px;
    height: 43px;
    padding-left: 15px;
    margin-top: 3px;
    margin-bottom: 30px;
    font-weight: 400;
    &:focus {
      outline: none;
      border: 2px solid rgb(69, 126, 255);
    }
  }

  h5 {
    text-align: center;
    margin-top: 5px;
    text-decoration: none;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  background-color: white;
`;

export const WorkStatusWrapper = styled.div`
  
  .work-status {
    background-color: white;
    height: 80px;
    margin-top: 5px;
    margin-bottom: 20px;
    display: flex;
    margin-right: 15px;
    cursor: pointer;

  }
  .Ind-status {
   
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: white;
   
    border:1px solid #d3e1ea;
    width: 290px;
    margin-right: 12px;
    height: 100%;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
    border-top-right-radius: 2px;
    border-bottom-left-radius: 2px;
   
  
    p {
      color: rgb(130, 146, 180);
     
      font-size: 13px;
      font-weight: 400;
      margin-top: 6px;
    }
  }

  /* #fresh{
      border:${({fresher})=>(fresher?"1px solid rgb(69, 126, 255)":"1px solid #d3e1ea")};
 
  
    }
    #exper{
      border:${({fresher})=>(fresher?"1px solid rgb(69, 126, 255)":"1px solid #d3e1ea")};
      
    } */
  .Brief-icon {
    color: rgb(69, 126, 255);
    margin-left: 5px;
    margin-right: 15px;
    font-size: 25.5px;
    font-weight: 200;
  }
  h2 {
    letter-spacing: 0.9px;
    color: rgb(69, 126, 255);
    font-size: 15px;
    margin-bottom: -5px;
    font-weight: 600;
    line-height: 20px;
    overflow-wrap: break-word;
  }
`;

export const SuggestionWrapper = styled.div`
  width: 570px;
  margin-bottom: 20px;
  background-color: white;

  div {
    background-color: white;
  }
  .place-button{
    margin-top: 10px;
    padding: 5px 15px;
    border: 1px solid #d3e1ea;
    border-radius: 25px;
    font-size: 13px;
    margin-right: 10px;
    background-color: white;
    font-weight: 500;
    letter-spacing:0.7px;
    color: gray;
  }
`;

export const ResumeSection = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: white;
  .resume-button {
    width: 330px;
    background-color: white;
    border: 1px solid rgb(130, 146, 180);
    font-weight: 100;
    display: flex;
    align-items: center;
    border-radius: 20px;
    margin-top: 5px;
    p {
      margin-left: 8px;
      color: rgb(130, 146, 180);
      font-size: 12px;
      font-family: Inter;
      overflow-wrap: break-word;
    }
  }
  .Recruter {
    background-color: white;
    color: rgb(68, 85, 120);
    font-family: Inter;
    font-size: 13px;
    font-weight: 400;
    line-height: 18px;
    overflow-wrap: break-word;
    box-sizing: border-box;
    margin-top: 10px;
  }
  .upload-resume {
    cursor: pointer;
    padding:6px 10px;
    font-weight:11px;
    font-size:14px;
    border-radius: 20px;
    background-color: rgb(255, 117, 85);
    color: white;
    border: 1px solid rgb(255, 117, 85);
    z-index: 999;
  }
  label {
    margin-bottom: 5px;
  }
`;

export const WhatsappWrapper = styled.div`
  margin-top: 20px;
  width: 359px;
  margin-bottom: 20px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: flex-start;

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
    font-size: 13px;
    width: 20px;
    height: 20px;
    margin-left: 5px;
    margin-right: 5px;

  }
  .whats-span{
    display:flex;
    align-items: center;
    color: rgb(68, 85, 120);
    font-family: Inter;
    font-weight: 400;
    font-size: 13px;
    line-height: 20px;
    cursor: pointer;

  }
`;

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

export const FooterWrapperSignup = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: auto;
  margin-top: 50px;
  padding-bottom: 80px;
  margin-right: 250px;
  width: 500px;
  .all-rights {
    font-family: Inter;
    font-size: 11px;
    line-height: 18px;
    color: rgb(130, 146, 180);
    font-weight: 400;
  }
  #privacy {
    color: rgb(69, 126, 255);
   
  }
`;
