import React from 'react'
import Styles from './Right.module.css'
import { Avatar,Divider } from '@chakra-ui/react'
import {Slider,SliderTrack,SliderFilledTrack} from '@chakra-ui/react'
import {VscInfo} from 'react-icons/vsc'
const RightPart = () => {

  const User=JSON.parse(localStorage.getItem("profile")) || ""
  return (
    <div>
      {/* ProfilePart the first box*/}
       <div className={Styles.firstDiv}>
               <div className={Styles.avatharBox}>
                    <Avatar src='https://bit.ly/broken-link' className={Styles.avathar} size='m'/>
               </div>
               <div className={Styles.userName}>{User.name}</div>

               {/* completed percent showing part */}

               <div className={Styles.percentBox}>
                <p className={Styles.perHead}>Profile completed(average)</p>
                <p className={Styles.percent}>63%</p>
               </div>
               <Slider aria-label='slider-ex-1' defaultValue={63}>
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
              </Slider>

              <div className={Styles.percentBox}>
                 <p className={Styles.missing}>06 Details missing</p>
                 <p className={Styles.perHead}>ADD DETAILS</p>
              </div>
              <div>
                <button className={Styles.btn}>UPDATE PROFILE</button>
              </div>

               <div className={Styles.flex} >
               <p className={Styles.newHead2}>Profile Performance</p><VscInfo className={Styles.info}/>
               </div>

               <div className={Styles.flex2}>
                  <div className={Styles.flexdivBox}>
                    <p className={Styles.perHead}>0</p>
                    <p className={Styles.perHead}>Search Appearances</p>
                  </div>
                  <div className={Styles.flexdivBox}>
                    <p className={Styles.perHead}>0</p>
                    <p className={Styles.perHead}>Recruiter Actions</p>
                  </div>
               </div>
               <div className={Styles.firstLastBox}>
                <p className={Styles.perHead}>3X Boost to Your Profile Performance. Explore.</p>
                <p className={Styles.newHead2}>Paid Service</p>
               </div>
      </div>
{/* second box of qr code starting here */}
      <div className={Styles.secMainDiv}>
            <div className={Styles.secSubdiv}>
                <p className={Styles.des}> Get real-time job updates & instant notifications only on the app!</p>
               <div className={Styles.flex}>
                  <p className={Styles.subdes}>Available on</p>
                  <img src="https://static.naukimg.com/s/5/105/i/play-store.png" alt="" style={{ height:"20px", marginTop:"10px"}} />
                  <img src="https://static.naukimg.com/s/5/105/i/app-store.png" alt=""  style={{ height:"20px", marginTop:"10px" }} />
               </div>
            </div>
              
            <div className={Styles.secSubdiv2}>
                <img src="https://static.naukimg.com/s/5/105/i/qrcode.png" alt="" className={Styles.qrCode}/>
                <p  className={Styles.subdes}>Scan to download</p>
            </div>
      </div>
{/* second box of qr code ending here */}

{/* third box of starting here */}
      <div className={Styles.secMainDiv2}>

        <div>
          <img src="https://static.naukimg.com/s/4/123/i/ffLogo.png" alt="" style={{ marginLeft:"10px" }}/>
        </div>

        <div className={Styles.width}>
          <p className={Styles.des}>Naukri Services you might be interested in</p>
        </div>

        <div className={Styles.width2}>
          <p className={Styles.des}>Be a Priority Applicant</p>
          <p className={Styles.newHead3}>Increase your chances of getting shortlisted for the applied jobs and receiving calls from recruiters.</p>
          <p  className={Styles.last}><a href="https://resume.naukri.com/priority-job-application?fftid=desk_home_pa">KNOW MORE</a></p>
        </div>

        <div className={Styles.width2}>
          <p className={Styles.des}>Increase your visibility by up to 3 times</p>
          <p className={Styles.newHead3}>Get your profile marked as 'Featured' and get a higher rank when recruiters search for resumes.</p>
          <p  className={Styles.last}><a href="https://resume.naukri.com/priority-job-application?fftid=desk_home_pa">KNOW MORE</a></p>
        </div>

        <div className={Styles.width2}>
          <p>Call 1800-572-5557 now! (Toll-free)</p>
        </div>
      </div>
{/* third box of ending here */}

{/* fourth and final box of starting here */}
      <div className={Styles.secMainDiv2}>
             <p className={Styles.des}>FAQ</p>
             <Divider style={{ marginBottom:'10px',marginTop:"10px" }}/>
             <div className={Styles.flex}>
                <p className={Styles.perHead}> Click here</p>
                <p className={Styles.newHead4}>for frequently asked questions.</p>
             </div>
      </div>
{/* fourth box of end ing here */}
    </div>
  )
}

export default RightPart