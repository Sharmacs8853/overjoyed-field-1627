import React from 'react'
import Styles from './HomePage.module.css'

const HomePage = () => {
  return (
    <div className={Styles.mainPage}>
        {/* Toppest part of my home page */}
        <div className={Styles.TopPart}>
               <div>
                    <h2 className={Styles.search}>Search Jobs</h2>
                    <div className={Styles.searchBarspace}>
                        <input type="text" placeholder='Skills, Designation, Companies' className={Styles.input}/>
                        <button className={Styles.searchBtn}>SEARCH</button>
                    </div>
               </div>
        </div>

        {/* Second and the main part of the page */}
        <div className={Styles.BottomPart}>
            {/* left part of the page */}
            <div className={Styles.pagePart1}>
                    {/* First box in left side */}
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
                {/* Second box of left side page */}
                <div>
                    <p className={Styles.secHead}>Jobs</p>
                    <div className={Styles.firstBox}>
                        <p className={Styles.secSubHead}>03 New Recommended Job(s)</p>
                        {/* <div className={Styles.divider}></div> */}
                    </div>
                    <div className={Styles.secFirstBox}>
                        <h1>Full Stack MERN</h1>
                    </div>
                </div>

            </div>



            {/* right part of the page */}
            <div className={Styles.pagePart2}></div>
        </div>
    </div>
  )
}

export default HomePage