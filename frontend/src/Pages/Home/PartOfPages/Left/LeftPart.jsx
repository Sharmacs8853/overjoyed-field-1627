import React from 'react'
import Styles from './Left.module.css'
import { Divider } from '@chakra-ui/react'
import {TfiBag,TfiWallet} from 'react-icons/tfi'
import {CiLocationOn} from 'react-icons/ci'
import {CiPen} from 'react-icons/ci'
import {TbClipboardList} from 'react-icons/tb'
const LeftPart = () => {
  return (
    <div>
                {/* First box in left side start */}
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
                {/* First box in left side ended here */}

                {/* Second box of left side page start*/}
                <div>
                    <p className={Styles.secHead}>Jobs</p>
                    <div className={Styles.firstBox}>
                        <p className={Styles.secSubHead}>01 New Recommended Job(s)</p>
                        {/* <div className={Styles.divider}></div> */}
                        <Divider style={{ marginBottom:"20px" }}/>
                        <div className={Styles.secSubBox}>
                           <p className={Styles.jobHead}>Full Stack Engineer</p>
                           <p className={Styles.jobd}>Modaka Technologies</p>
                        </div>

                        <div className={Styles.secSubBox2}>
                             <div>
                                <div className={Styles.forthflexbox}>
                                      <div  className={Styles.finalFlex}>
                                        <TfiBag/>
                                        <p className={Styles.jobd}>0-5 Years</p>
                                      </div>

                                      <div  className={Styles.finalFlex}>
                                        <CiLocationOn/>
                                        <p className={Styles.jobd}>Bangalore/Bengaluru</p>
                                      </div>
                                </div>
                             </div>
                             <br />
                              <div>
                                  <div  className={Styles.finalFlex}>
                                    <CiPen/>
                                    <p className={Styles.jobd}>CSS, Nodejs Server, Redux, MySQL, Javascript, PHP, HTML, Redux Framework, React.Js</p>
                                  </div>
                              </div>
                              <br />
                              <div>
                                  <div  className={Styles.finalFlex}>
                                    <TbClipboardList/>
                                    <p className={Styles.jobd}>Must have experience in web development, frontend & backend. Must have expertise in javascript..</p>
                                  </div>
                              </div>
                                <br />
                             <div >
                                  <div className={Styles.flexBoxInSec}>
                                        <div  className={Styles.finalFlex}>
                                          <TfiWallet/>
                                          <p className={Styles.jobd}>300,000 - 600,000 PA</p>
                                        </div>

                                        <div  className={Styles.finalFlex}>
                                          <p className={Styles.jobd}>Posted 2 days ago</p>
                                        </div>
                                  </div>
                             </div>
                        </div>
                        <div>
                        <p  className={Styles.forthBoxlast}>VIEW MORE</p>
                        </div>
                    </div>
                </div>
                {/* Second box of left side page ended here*/}

                {/* Third box of left side page start here*/}
                <div>
                    <p className={Styles.secHead}></p>
                    <div className={Styles.firstBox}>
                        <p className={Styles.secSubHead}>New Jobs in My Job Alerts</p>
                        <Divider/>
                        <div className={Styles.newJobdiv}>
                            <p className={Styles.newJobhead}><a href="/">CREATE CUSTOM JOB ALERTS</a></p>
                            <p className={Styles.jobd}>Stay informed about the latest jobs for you</p>
                            <br />
                        </div>
                    </div>
                </div>
                {/* third box of left side page ended here*/}

                {/* forth box of left side page start here*/}
                <p className={Styles.secHead}></p>
                <div className={Styles.forthflexbox}>
                  <div className={Styles.forthBox}>
                      <p className={Styles.secSubHead}>Application Summary</p>
                      <Divider style={{ marginBottom:"60px" }}/>
                      <p className={Styles.jobd}>Daily Limit of Application: 50</p>
                  </div>
                  <div className={Styles.forthBox}>
                      <p className={Styles.secSubHead}>Saved Job(s)</p>
                      <Divider style={{ marginBottom:"60px" }}/>
                      <p className={Styles.jobd}>You have 0 saved job(s) till now.</p>
                      <p  className={Styles.forthBoxlast}><a href="https://www.naukri.com/mnjuser/savedjobs">VIEW MORE</a></p>
                  </div>
                </div>
                {/* forth box of left side page start here*/}

                {/* fifth box of left side page start here*/}
                <div>
                <p className={Styles.secHead}>Recruiters</p>
                    <div className={Styles.firstBox}>
                        <p className={Styles.secSubHead}>New Recruiter Messages</p>
                        {/* <div className={Styles.divider}></div> */}
                        <Divider/>
                        <div className={Styles.newJobdiv}>
                            <p className={Styles.recrud}>You do not have any unread message. Messages received from different recruiters will appear in this section.</p>
                            <br />
                        </div>
                    </div>
                </div>
                {/* fifth box of left side page ending here*/}

                  {/* six and the final box of left side page start here*/}
                  <div>
                <p className={Styles.secHead}></p>
                    <div className={Styles.firstBox}>
                        <p className={Styles.secSubHead}>Recruiter Connections</p>
                        {/* <div className={Styles.divider}></div> */}
                        <Divider style={{ marginBottom:"30px" }}/>
                        <div className={Styles.forthflexbox}>
                            <div>
                                <div className={Styles.finalFlex}>
                                  <p className={Styles.zeros}>00</p>
                                  <p className={Styles.jobd}>Credits Purchased</p>
                                </div>

                                <div className={Styles.finalFlex}>
                                  <p className={Styles.zeros}>00</p>
                                  <p className={Styles.jobd}>Credits Remaining</p>
                                </div>

                            </div>

                            <div className={Styles.subDivLast}>

                                <div>
                                  <p className={Styles.jobd}>Buy recruiter connections credits to contact more recruiters hiring in your domain.</p>
                                </div>
                                <div>
                                  <button className={Styles.btn}>BUY CREDITS</button>
                                </div>
                            </div>
                        </div>
                        <div>
                        <p  className={Styles.forthBoxlast}>VIEW MORE</p>
                        </div>
                    </div>
                </div>
                {/* six and the final box of left side page ending here*/}
    </div>
  )
}

export default LeftPart