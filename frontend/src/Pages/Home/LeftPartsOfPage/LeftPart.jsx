import React from 'react'
import Styles from './leftPart.module.css'
import { TfiBag,TfiWallet } from 'react-icons/tfi';
import {CiLocationOn} from 'react-icons/ci'
import {FiPenTool} from 'react-icons/fi'
import {VscOutput} from 'react-icons/vsc'
import { Divider } from '@chakra-ui/react'

const LeftPart = () => {
  return (
   <div>
        {/* first box starting  */}
               <div className={Styles.firstBox}>
                   <div className={Styles.headingBox}>
                    <p className={Styles.firstHead}>What is most important to you when looking for a new job?</p>
                    <p className={Styles.poll}>Poll Results</p>
                   </div>
                    <div className={Styles.firstGrid}>
                        <div className={Styles.divInGrid}>
                            <p className={Styles.gridHead}>Work-life balance 30.2%</p>
                            <p  className={Styles.slider}></p>
                        </div>
                        <div className={Styles.divInGrid}>
                            <p className={Styles.gridHead}>Work culture 20.9%</p>
                            <p  className={Styles.slider2}></p>
                        </div>
                        <div className={Styles.divInGrid}>
                            <p className={Styles.gridHead}>Competitive salary 20.5%</p>
                            <p  className={Styles.slider3}></p>
                        </div>
                        <div className={Styles.divInGrid}>
                            <p className={Styles.gridHead}>Quality of work 20%</p>
                            <p  className={Styles.slider2}></p>
                        </div>
                        <div className={Styles.divInGrid}>
                            <p className={Styles.gridHead}>Company's reputation 8.4%</p>
                            <p  className={Styles.slider5}></p>
                        </div>
                    </div>
                    <div className={Styles.lastBoxInfirst}>
                        <p className={Styles.lastPoll}>824.1K+ votes | Poll closed</p>
                        <img src="https://static.naukimg.com/s/0/0/i/poll-wdgt-bg.png" alt="" style={{ height:"50px" }} />
                    </div>
                </div>
        {/* first box ended */}

        {/* Second box started */}
                <div>
                <p className={Styles.secHead}>Jobs</p>
                   {/* Thrid box of left side of the page started */}
                    <div className={Styles.firstBox}>
                        <p className={Styles.secSubHead}>03 New Recommended Job(s)</p>
                        <Divider/>
                        <div className={Styles.subJobBox}>
                            <p className={Styles.secSubSubHead}>Full Stack MERN / MEAN / Dot Net Core Developer</p>
                            <p className={Styles.jobd}>Asindia Innovations</p>
                        </div>

                         {/* job discribtion  */}
                         <div className={Styles.jobexper}>
                            <p  className={Styles.jobd}><TfiBag style={{ marginRight:"5px" }}/> <span> 0-5 Years</span> </p>
                            <p  className={Styles.jobd}><CiLocationOn style={{ marginRight:"5px" }}/>Permanent Remote</p>
                        </div>
                        {/* skills */}
                        <div className={Styles.jobSkill}>
                            <p className={Styles.jobd}><FiPenTool style={{ marginRight:"5px"}}/>CSS, Nodejs Server, Redux, MySQL, Javascript, PHP, HTML, Redux Framework, React.Js </p>
                            <p className={Styles.jobd}><VscOutput style={{ marginRight:"5px" }}/> Must have experience in web development, frontend & backend.Must have expertise...</p>
                        </div>
                            {/* Salary expected */}
                        <div className={Styles.jobSal}>
                            <p  className={Styles.jobd}><TfiWallet style={{ marginRight:"5px" }}/> 300,000 - 600,000 PA </p>
                            <p  className={Styles.jobd}>Posted 1 day ago</p>
                        </div>
                        <div className={Styles.view}>
                            VIEW ALL
                        </div>

                    </div>
                </div>  

        {/*Second box of left side of the page ended  */}

        {/* Thrid box of left side of the page started */}

                <div className={Styles.thridBox}>
                   <p className={Styles.secHead}></p>
                    <div className={Styles.firstBox}>
                        <p className={Styles.secSubHead}>New Jobs in My Job Alerts</p>
                        <Divider/>
                        <p className={Styles.tridhead}>CREATE CUSTOM JOB ALERTS</p>
                        <p className={Styles.tridSub}>Stay informed about the latest jobs for you</p>
                    </div>
                    <p className={Styles.secHead}></p>
                        <div className={Styles.jobgrid}>
                            <div className={Styles.jobgridDiv}>
                                <p className={Styles.secSubHead}>Application Summary</p>
                                <Divider/>
                                <div>
                                <p className={Styles.tridSub2}>Daily Limit of Application: 50</p>
                                </div>
                                <div className={Styles.view}>
                                </div>
                            </div>
                            <div className={Styles.jobgridDiv}>
                                <p className={Styles.secSubHead}>Saved Job(s)</p>
                                <Divider/>
                                <br />
                                <div>
                                <p className={Styles.tridSub2}>You have 0 saved job(s) till now.</p>
                                </div>
                                <br />
                                <br />
                                <div className={Styles.view}>
                                    VIEW ALL
                                </div>
                            </div>
                        </div>
                </div>
        {/* Thrid box of left side of the page ended */}

        {/* Forth and the final box starts here */}

        <div>
        <p className={Styles.secHead}>Recruiters</p>

                <div className={Styles.firstBox}>
                        <p className={Styles.secSubHead}>New Recruiter Messages</p>
                        <Divider/>
                       <div className={Styles.forth1stDiv}>
                       <p className={Styles.fortSub}>You do not have any unread message. Messages received from different recruiters will appear in this section.</p>
                       </div>
                </div>
                <p className={Styles.secHead}></p>
                <div className={Styles.firstBox}>
                        <p className={Styles.secSubHead}>Recruiter Connections</p>
                        <Divider/>
                       <div className={Styles.forthGrid}>
                            <div className={Styles.gridDivForth}>
                                <div className={Styles.forthGrid}>
                                    <p className={Styles.forthZeros}>00</p>
                                    <p className={Styles.forthSpan}>Credits Purchased</p>
                                </div>
                                <div className={Styles.forthGrid}>
                                    <p className={Styles.forthZeros}>00</p>
                                    <p className={Styles.forthSpan}>Credits Remaining</p>
                                </div>
                            </div>

                            <div className={Styles.gridDivForth2}>
                                <p className={Styles.forthbuy}>Buy recruiter connections credits to contact more recruiters hiring in your domain.</p>
                                <button className={Styles.buttonforth}>BUY CREDITS</button>
                            </div>
                       </div>
                       <div className={Styles.view}>
                                    VIEW ALL
                       </div>
                </div>
        </div>
   </div>
  )
}

export default LeftPart