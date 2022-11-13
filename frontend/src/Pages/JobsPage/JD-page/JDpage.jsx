import React, { useEffect } from "react";
import Styles from "./JD.module.css";
import { Divider } from "@chakra-ui/react";
import { TfiBag, TfiWallet } from "react-icons/tfi";
import { CiLocationOn } from "react-icons/ci";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const JDpage = () => {
  const User = JSON.parse(localStorage.getItem("profile")) || "";
  const token = User.token;
  const navigate = useNavigate();
  const params = useParams()
   const {id}= useParams()


   const description =(id)=>{ axios.get(`http://localhost:8001/job/${id}`)
   .then(res=>{console.log(res.data)})
   }
useEffect(()=>{
  description(id)
},[id])

  const handleRegister = () => {
    navigate("/user/signup");
  };

  const handleLogin = () => {
    navigate("/user/login");
  };

  return (
    <div>
      {/* First box in JD PAGE its the toppest part start here*/}
      <div className={Styles.topestPart}></div>
      {/* First box in JD PAGE its the toppest part end here */}
        { /* First box in JD PAGE its the toppest part start here*/}
          <div>
                    <div className={Styles.firstBox}>
                        <p className={Styles.secSubHead}>Freshers_Desktop Support Engineer_Bangalore/Hyderabad/Chennai</p>
                        <p className={Styles.jobd}>TeamLease 4.0 ⭐ (1841   Reviews)</p>
                        <br />
                        <div className={Styles.secSubBox2}>
                                     <div  className={Styles.finalFlex}>
                                        <TfiBag/>
                                        <p className={Styles.jobd}>0-5 Years</p>
                                      </div>
                                <br />
                             <div >
                                  <div className={Styles.flexBoxInSec}>
                                        <div  className={Styles.finalFlex}>
                                          <TfiWallet/>
                                          <p className={Styles.jobd}>300,000 - 600,000 PA</p>
                                        </div>
                                  </div>
                             </div>
                             <br />
                             <div>
                                <div className={Styles.flexBoxInSec}>
                                      <div  className={Styles.finalFlex}>
                                        <CiLocationOn/>
                                        <p className={Styles.jobd}>Bangalore/Bengaluru</p>
                                      </div>
                                      {token?<div  className={Styles.forthflexbox}>
                                       <button className={Styles.btn2}>Save</button>
                                       <button className={Styles.btn1}>Apply</button>
                                      </div>: <div  className={Styles.forthflexbox}>
                                       <button className={Styles.btn2} onClick={handleRegister}> Register To apply</button>
                                       <button className={Styles.btn1} onClick={handleLogin}>Login In</button>
                                      </div>}
                                </div>
                             </div>
                        </div>
                        <br />
                        <Divider style={{ marginBottom:"10px" }}/>

                        <div>
                                <div className={Styles.flexBoxInSec}>
                                      <div  className={Styles.finalFlex}>
                                        <p className={Styles.jobd}>Posted: 2 day ago  |  agoOpenings: 10  |  Job Applicants: 2546</p>
                                      </div>
                                </div>
                                <div>
                                     <p  className={Styles.forthBoxlast}>Send Me Jobs Like This</p>
                                </div>
                          </div>
                    </div>
    </div>
  </div>  
  );
};

export default JDpage;
