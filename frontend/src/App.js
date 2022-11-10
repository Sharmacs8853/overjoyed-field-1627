
import './App.css';
import { Box } from '@chakra-ui/react';
import Navbar from './Components/Navbar/Navbar.jsx'
import HomePage from './Pages/Home/HomePage';
// import AllRoutes from "./Pages/AllRoutes/AllRoutes"
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";

function App() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <Signup />
      <Login />
    </div>
  );
}

export default App;
