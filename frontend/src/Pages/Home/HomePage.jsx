import React from 'react'
import Styles from './HomePage.module.css'
import LeftPart from './PartOfPages/Left/LeftPart'
import RightPart from './PartOfPages/Right/RightPart'

const HomePage = () => {
  return (
    <div className={Styles.mainPage}>
        {/* Toppest part of my home page */}
        <div className={Styles.TopPart}>
               <div>
                    <h2 className={Styles.search}>Search Jobs</h2>
                    <div className={Styles.searchBarspace}>
                        <input type="text" placeholder='    Skills, Designation, Companies' className={Styles.input}/>
                        <button className={Styles.searchBtn}>SEARCH</button>
                    </div>
               </div>
        </div>

        {/* Second and the main part of the page */}
        <div className={Styles.BottomPart}>


            {/* left part of the page */}
            <div className={Styles.pagePart1}>
                <LeftPart/>
            </div>


            {/* right part of the page */}
            <div className={Styles.pagePart2}>
                <RightPart/>
            </div>
        </div>
    </div>
  )
}

export default HomePage