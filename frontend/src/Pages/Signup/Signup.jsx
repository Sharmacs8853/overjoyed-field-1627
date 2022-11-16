import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { VscBriefcase } from "react-icons/vsc";
import { GiSchoolBag } from "react-icons/gi";
import {IoMdCheckmark} from "react-icons/io"
import {
  HeadingWrapper,
  SignupWrapperLeft,
  SignupWrapperRight,
  InputWrapper,
  NavLink,
  SignupWrapper,
  SubmitWrapper,
  GoogleWrapper,
  FormWrapper,
  WorkStatusWrapper,
  SuggestionWrapper,
  ResumeSection,
  GoogleImageWrapper,
  WhatsappWrapper,
  TermsWrapper,
  FooterWrapperSignup,
  MainSignup,
} from "../../Style/signup.style";
import { useState } from "react";
import { SmallLoginWrapper, WhatsappWrapperSmall } from "../../Style/loginsmall";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../Redux/AuthReducer/action";
import { BsFillCheckCircleFill } from "react-icons/bs";
import {AiOutlineArrowLeft} from "react-icons/ai"

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile,setMobile]=useState("+91 ");
  const [password, setPassword] = useState("");
  const [update,setUpdate]=useState(false)
  const [fresher,setFresher]=useState(false)
  const [exp,setExp]=useState(false)
  const [cityValue,setCityValue]=useState("")
  const { isError, isLoading } = useSelector((state) => {
    return {
      isError: state.AuthReducer.isError,
      isLoading: state.AuthReducer.isLoading,
    };
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      name: name,
      email: email,
      password: password,
      mobile:mobile,
      work_status:"fresher"
    };
   

   
    if (name && email && mobile && password) {
      dispatch(signup(payload))
        .then((res) => {
         
          let resp = res.payload.msg;
          alert(resp);
          navigate("/user/login");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };


  const [size,setWindowSize]=useState(window.innerWidth)
  React.useEffect(() => {
    function handleResize() {
     setWindowSize(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
  })


  const handleFresher=()=>{
       setFresher(true)
       setExp(false)
  }

  const handleExp=()=>{
    setFresher(false)
    setExp(true)
      
  }

  const handleCityValue=(e)=>{
    e.preventDefault()
      setCityValue(e.target.value)
  }

  

  const getResume=(e)=>{
    e.preventDefault();
    console.log(e.target.files)
  }

  const  handleResume=()=>{
    getResume()
}


  return (

   
   size<1300 ? <SmallLoginWrapper>
    <div className="small-login-main-div">
    <h2 className="small-login-heading">Register for free to apply jobs</h2>
    <p className="small-login-para">5 Lakh+ recruiters are looking for candidates on Naukri</p>
    <form className="small-signup-form">
      <label className="small-signup-label">Full Name</label><br/>
      <input className="small-signup-input" type="text" ></input><br/>
      <label className="small-signup-label">Email Address</label><br/>
      <input className="small-signup-input" type="email" ></input><br/>
      <label className="small-signup-label">Password</label><br/>
      <input className="small-signup-input" type="password" ></input><br/>
      <label className="small-signup-label">Mobile Number</label><br/>
      <input className="small-signup-input" type="password" ></input><br/>
      <label className="small-signup-label">Gender</label><br/>
      <select>
      <option value="">Select</option>
        <option value="male">Male</option>
        <option value="male">Female</option>
        <option value="male">Transgender</option>
      </select>
     
   
      
    </form>
    <p className="dis">Companies hire candidates of all genders to celebrate diversity</p>
  
   
 
 <WhatsappWrapperSmall>
  
                  <div>
                  <input  className="whats-input" type="checkbox" onChange={(e)=>setUpdate(e.target.checked)}></input>
                  </div>
                 
                  <div className="whats-span">  
                   <p>Send me important updates on</p> 
                   <span  className="whats-span">
                      <img className="whats-img" src="https://static.naukimg.com/s/7/104/assets/images/whatsappicon.0011d8c1.png"></img>
                    </span>
                    <span  className="whats-span">WhatsApp</span>
                  </div>
                </WhatsappWrapperSmall>
                <TermsWrapper>
                  <p>
                    By clicking Register, you agree to the
                    <span> Terms and Conditions</span> &{" "}
                    <span>Privacy Policy</span> of Naukri.com
                  </p>
                </TermsWrapper>
                <button  className="small-signup-register">Register</button>
              
                </div>
</SmallLoginWrapper> :isLoading? <img src="https://createwebsite.net/wp-content/uploads/2015/09/GD.gif" style={{height:"150px",display:"flex",alignItems:"center",justifyContent:"center",margin:"auto",marginTop:"200px"}}></img> : <MainSignup>
      <SignupWrapper>
        <SignupWrapperLeft>
          <img
            className="img-div"
            src="https://static.naukimg.com/s/7/104/assets/images/green-boy.c8b59289.svg"
          ></img>

          <div className="heading">
            <h3>On registering, you can</h3>
          </div>
          <div className="all-div">
            <div className="indiv">
              <BsFillCheckCircleFill
                style={{ color: "rgb(24,193,163)", fontSize: "19px" }}
              />
              <p>Build your profile and let recruiters find you</p>
            </div>
            <div className="indiv">
              <BsFillCheckCircleFill
                style={{ color: "rgb(24,193,163)", fontSize: "19px" }}
              />
              <p>Get job postings delivered right to your email</p>
            </div>

            <div className="indiv">
              <BsFillCheckCircleFill
                style={{ color: "rgb(24,193,163)", fontSize: "19px" }}
              />
              <p>Find a job and grow your career</p>
            </div>
          </div>
        </SignupWrapperLeft>

        <SignupWrapperRight>
          <FormWrapper>
            <HeadingWrapper>
              <h1>Find a job & grow your Career</h1>
            </HeadingWrapper>

            <form>
              <InputWrapper>
                <label>Full Name</label>
                <br />
                <input
                  value={name}
                  type="text"
                  placeholder="What is your Name?"
                  onChange={(e) => setName(e.target.value)}
                ></input>
                <br />

                <label>Email Id</label>
                <br />
                <input
                  value={email}
                  type="text"
                  placeholder="Tell us your Email ID"
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
                <br />
                <label>Password</label>
                <br />
                <input
                  value={password}
                  type="text"
                  placeholder="Create a password for your account"
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
                <br />

                <label>Mobile Number</label>
                <br />
                <input
                  value={mobile}
                  type="text"
                  placeholder="Mobile Number"
                  onChange={(e) => setMobile(e.target.value)}
                ></input>
                <WorkStatusWrapper fresher={fresher} exp={exp} >
                  <label>Work Status</label>
                  <div className="work-status">
                    <div className="Ind-status" id="exper" onClick={handleExp}  >
                      <div>
                        <VscBriefcase className="Brief-icon" />
                      </div>
                      <div>
                        <h2>I'm Experienced</h2>
                        <p>I have work experience (excluding internships)</p>
                        <IoMdCheckmark id="left-check"/>
                      </div>
                    </div>

                    <div className="Ind-status" id="fresh" onClick={handleFresher}>
                      <div>
                        <GiSchoolBag className="Brief-icon" />
                      </div>
                      <div>
                        <h2>I'm a Fresher</h2>
                        <p>I am a student/ Haven't worked after graduation</p>
                        <IoMdCheckmark id="right-check"/>
                      </div>
                    </div>
                  </div>
                </WorkStatusWrapper>
              
                <SuggestionWrapper fresher={fresher}>
                <label>Current city</label>
                <br />
                <input
                  value={cityValue}
                  type="text"
                  placeholder="Mention the city you live in"
                ></input>
                <br />
                  <label>Suggestions:</label>
                  <div >
                    <button value="Kolkata" className="place-button" onClick={handleCityValue}>Kolkata</button>
                    <button value="Banglore/Bengaluru" className="place-button" onClick={handleCityValue}>Bangalore/Bengaluru</button>
                    <button value="Hyderabad/Secunderabad" className="place-button" onClick={handleCityValue}>Hyderabad/Secunderabad</button>
                    <button value="Mumbai" className="place-button" onClick={handleCityValue}>Mumbai</button>
                    <button value="Chennai" className="place-button" onClick={handleCityValue}>Chennai</button>
                    <button value="New Delhi" className="place-button" onClick={handleCityValue} >New Delhi</button>
                    <button value="Pune" className="place-button"  onClick={handleCityValue}>Pune</button>
                  </div>
                </SuggestionWrapper>
                <ResumeSection fresher={fresher}>
                  <label>Resume</label>
              
                  <div className="resume-button"  >
                    <button className="upload-resume">Upload Resume</button>
                  {/* <input style={{display:"none"}} type="file"  accept=".pdf" ></input> */}
                    <p>Doc, Docx, PDF, RTF | Max:2MB</p>
                  </div>
                  <p className="Recruter">
                    Recruiters give first preference to candidates who have a
                    resume
                  </p>
                </ResumeSection>
                <WhatsappWrapper>
                  <div>
                  <input  className="whats-input" type="checkbox" onChange={(e)=>setUpdate(e.target.checked)}></input>
                  </div>
                 
                  <div className="whats-span">  
                   <p>Send me important updates on</p> 
                   <span  className="whats-span">
                      <img className="whats-img" src="https://static.naukimg.com/s/7/104/assets/images/whatsappicon.0011d8c1.png"></img>
                    </span>
                    <span  className="whats-span">WhatsApp</span>
                  </div>
                 

                </WhatsappWrapper>
                <TermsWrapper>
                  <p>
                    By clicking Register, you agree to the
                    <span> Terms and Conditions</span> &{" "}
                    <span>Privacy Policy</span> of Naukri.com
                  </p>
                </TermsWrapper>
                <SubmitWrapper>
                  <button type="submit" onClick={handleSubmit}>Register Now</button>
                </SubmitWrapper>
              </InputWrapper>
            </form>
          </FormWrapper>

          <GoogleWrapper>
            <div className="OrDiv">OR</div>
            <GoogleImageWrapper>
              <label>Continue with</label>
              <button>
                <img src="https://static.naukimg.com/s/7/104/assets/images/google-icon.9273ac87.svg"></img>
                <span>Google</span>
              </button>
            </GoogleImageWrapper>
          </GoogleWrapper>
        </SignupWrapperRight>
      </SignupWrapper>
      <FooterWrapperSignup>
        <span>
          <p id="privacy" className="all-rights">
            About Us | Contact Us | FAQs | Terms and Conditions | Report a
            Problem | Privacy Policy
          </p>
        </span>
        <div className="all-rights">
          <p>All rights reserved &copy; 2022 info Edge India Ltd.</p>
        </div>
      </FooterWrapperSignup>
    </MainSignup>
  );
};

export default Signup;
