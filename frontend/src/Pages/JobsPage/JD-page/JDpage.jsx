import React, { useEffect, useState } from "react";
import Styles from "./JD.module.css";
import { Divider } from "@chakra-ui/react";
import { TfiBag, TfiWallet } from "react-icons/tfi";
import { CiLocationOn } from "react-icons/ci";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const JDpage = () => {
  const [jobs, setJobs] = useState('');
  const [apply, setApply] = useState(false);
  const User = JSON.parse(localStorage.getItem("profile")) || "";
  const token = User.token;
  const navigate = useNavigate();
  
  const { id } = useParams();

 


   const description =(id)=>{ axios.get(`http://localhost:8001/job/${id}`)
   .then(res=>{setJobs(res.data)})
   }
  
useEffect(()=>{
  description(id)
},[id])


  const handleRegister = () => {
    setApply(true);
  };

  const handleLogin = () => {
    navigate("/user/login");
  };
  

  console.log("jobs",jobs);

  return (
    <div>
    <div>
      {/* First box in JD PAGE its the toppest part start here*/}
      <div className={Styles.topestPart}></div>
      {/* First box in JD PAGE its the toppest part end here */}
        { /* First box in JD PAGE its the toppest part start here*/}
          <div>
                    <div className={Styles.firstBox}>
                        <p className={Styles.secSubHead}>{jobs.job_title}</p>
                        <p className={Styles.jobd}>{jobs.company_name} 4.0 ⭐ (1841   Reviews)</p>
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
                                          <p className={Styles.jobd}>{jobs.job_type}</p>
                                        </div>
                                  </div>
                             </div>
                             <br />
                             <div>
                                <div className={Styles.flexBoxInSec}>
                                      <div  className={Styles.finalFlex}>
                                        <CiLocationOn/>
                                        <p className={Styles.jobd}></p>
                                      </div>
                                      {token?<div  className={Styles.forthflexbox}>
                                       <button className={Styles.btn2}>Save</button>
                                       <button className={Styles.btn1}>Apply</button>
                                      </div>: <div  className={Styles.forthflexbox}>
                                       <button className={Styles.btn2} onClick={handleRegister}>{apply?"Applyed":"Apply"}</button>
                                       <button className={Styles.btn1} onClick={handleLogin}>Login In</button>
                                      </div>}
                                </div>
                             </div>
                        </div>
                        <br />
                        <Divider style={{ marginBottom:"10px" }}/>


          <div>
            <div className={Styles.flexBoxInSec}>
              <div className={Styles.finalFlex}>
                <p className={Styles.jobd}>
                  Posted: 2 day ago | agoOpenings: 10 | Job Applicants: 2546
                </p>
              </div>
            </div>
            <div>
              <p className={Styles.forthBoxlast}>Send Me Jobs Like This</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div style={{margin:"100px"}}>
      <p>{jobs.job_description}</p>
    </div>
  </div>  

  );
};
  
export default JDpage;
