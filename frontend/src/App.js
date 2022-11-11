import { Box } from '@chakra-ui/react';
import Dreamjob from './Components/DreamJob/Dreamjob.jsx';
import Featuredcompanies from './Components/Featuredcompanies/Featuredcompanies.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Growcareer from './Components/GrowCareer/Growcareer.jsx';
import JobType from './Components/Jobtype/JobType.jsx';
import Navbar from './Components/Navbar/Navbar.jsx'
import PrepareInterview from './Components/PrepareInterview/PrepareInterview.jsx';
import TopCompany from './Components/TopCompany/TopCompany.jsx';
import VideoFrofile from './Components/VideoProfile/VideoFrofile.jsx';
import HomePage from './Pages/Home/HomePage';
// import AllRoutes from "./Pages/AllRoutes/AllRoutes"
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";

function App() {
  return (
    <div>
      <Navbar />
      <Dreamjob />
      <JobType/>
      <TopCompany/>
      <Featuredcompanies />
      <VideoFrofile/>
      <PrepareInterview />
      <Growcareer />
       <HomePage /> 
      <Signup />
      <Login /> 
      <Footer />
    </div>
  );
}

export default App;
