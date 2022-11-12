import { Box } from '@chakra-ui/react'
import React from 'react'
import Dreamjob from '../../Components/DreamJob/Dreamjob'
import Featuredcompanies from '../../Components/Featuredcompanies/Featuredcompanies'
import Footer from '../../Components/Footer/Footer'
import JobType from '../../Components/Jobtype/JobType'
import Navbar from '../../Components/Navbar/Navbar'
import PrepareInterview from '../../Components/PrepareInterview/PrepareInterview'
import TopCompany from '../../Components/TopCompany/TopCompany'
import VideoFrofile from '../../Components/VideoProfile/VideoFrofile'

const MainPage = () => {
  return (
    <Box>
      <Dreamjob/>
      <JobType/>
      <TopCompany/>
      <Featuredcompanies/>
      <PrepareInterview/>
      <VideoFrofile/>
      <Footer/>
    </Box>
  )
}

export default MainPage