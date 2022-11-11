// import { Box } from '@chakra-ui/react';
// import Dreamjob from './Components/DreamJob/Dreamjob.jsx';
// import Featuredcompanies from './Components/Featuredcompanies/Featuredcompanies.jsx';
// import Footer from './Components/Footer/Footer.jsx';
// import Growcareer from './Components/GrowCareer/Growcareer.jsx';
// import JobType from './Components/Jobtype/JobType.jsx';
// import Navbar from './Components/Navbar/Navbar.jsx'
// import PrepareInterview from './Components/PrepareInterview/PrepareInterview.jsx';
// import TopCompany from './Components/TopCompany/TopCompany.jsx';
// import VideoFrofile from './Components/VideoProfile/VideoFrofile.jsx';

import {useState,useEffect} from "react"
import { Box } from '@chakra-ui/react';
import Dreamjob from './Components/DreamJob/Dreamjob.jsx';
import Featuredcompanies from './Components/Featuredcompanies/Featuredcompanies.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Growcareer from './Components/GrowCareer/Growcareer.jsx';
import JobType from './Components/Jobtype/JobType.jsx';
import Navbar from './Components/Navbar/Navbar.jsx'
import AllRoutes from './Pages/AllRoutes/AllRoutes.jsx';
import PrepareInterview from './Components/PrepareInterview/PrepareInterview.jsx';
import TopCompany from './Components/TopCompany/TopCompany.jsx';
import VideoFrofile from './Components/VideoProfile/VideoFrofile.jsx';
import HomePage from './Pages/Home/HomePage';
import Signup from './Pages/Signup/Signup.jsx';
import Login from './Pages/Login/Login.jsx';


function App() {


  return (
    <div>

     <Navbar />

      <AllRoutes/>
      <Dreamjob />
      <JobType/>
      <TopCompany/>
      <Featuredcompanies />
      <VideoFrofile/>
      <PrepareInterview />
      <Growcareer />
      
      <Footer />
      {/* <HomePage /> */}
      {/* <Signup />
      <Login /> */}
    </div>
  );
}

export default App;
