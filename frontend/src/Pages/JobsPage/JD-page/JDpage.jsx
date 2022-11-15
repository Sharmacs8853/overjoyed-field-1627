import React, { useEffect, useState } from "react";
import Styles from "./JD.module.css";
import { Divider,Alert ,Button, AlertIcon,AlertTitle,AlertDescription } from "@chakra-ui/react";
import { TfiBag, TfiWallet } from "react-icons/tfi";
import { CiLocationOn } from "react-icons/ci";
import { useNavigate, useParams,Link } from "react-router-dom";
import axios from "axios";

const JDpage = () => {
  const [isLoading,setIsLoading]=useState(false)
  const [jobs, setJobs] = useState('');
  const [apply, setApply] = useState(false);
  const User = JSON.parse(localStorage.getItem("profile")) || "";
  const token = User.token;
  const navigate = useNavigate();

  const {REACT_APP_MONGO_URL}=process.env
   const {id}= useParams()
 

   const description =(id)=>{ 
    setIsLoading(true)
    axios.get(`${REACT_APP_MONGO_URL}/job/${id}`).then((res)=>{
     setJobs(res.data)
     setIsLoading(false)
   }).catch((err)=>{
    setIsLoading(false)
    console.log(err)
   })
  
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
  



  return (
   isLoading ? <img src="https://createwebsite.net/wp-content/uploads/2015/09/GD.gif" style={{height:"150px",display:"flex",alignItems:"center",justifyContent:"center",margin:"auto",marginTop:"200px"}}></img> : <div>
  {  apply?  <Alert
  status='success'
  variant='subtle'
  flexDirection='column'
  alignItems='center'
  textAlign='center'
  height='270px'
  width="450px"
  margin="auto"
  marginTop="40px"
  borderRadius="8px"
  
 
>
  <AlertIcon boxSize='40px' mr={0} />
  <AlertTitle mt={4} mb={1} fontSize='lg'>
    Application submitted!
  </AlertTitle>
  <AlertDescription maxWidth='sm' marginBottom="50px">
    Thanks for submitting your application. Our team will get back to you soon.
  </AlertDescription>
  <Button backgroundColor="rgb(69,126,255)" _hover={{backgroundColor:"rgb(69,126,255)",color:"white"}} color="white" ><Link style={{color:"white"}} to="/user/jobs">Go back</Link></Button>
</Alert>:
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
                                        <p className={Styles.jobd}>Pune</p>
                                      </div>
                                      {token?<div  className={Styles.forthflexbox}>
                                       <button className={Styles.btn2}>Save</button>
                                       <button className={Styles.btn1} onClick={handleRegister}>{apply?"Applied":"Apply"}</button>
                                      </div>: <div  className={Styles.forthflexbox}>
                                       <button className={Styles.btn2} onClick={handleRegister}></button>
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
    </div>}

    <div style={{margin:"100px"}}>
     { !apply && <p >{jobs.job_description}</p>}
    </div>
    </div>  

  );
};
  
export default JDpage;
