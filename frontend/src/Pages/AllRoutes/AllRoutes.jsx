import React from 'react'
import { Routes, Route } from "react-router-dom";
import AdminDashboard from '../AdminDashboard/AdminDashboard';

// import Login from '../Login/Login';
// import Mainpage from '../MainPage/Mainpage';
import Signup from "../Signup/Signup";
import Mainpage from '../MainPage/MainPage';


const AllRoutes = () => {
  return (
    <Routes>


        {/* <Route path="/" element={<Mainpage />}></Route> */}
        {/*<Route path="/user/login" element={<Login />}></Route>*/}

        <Route path="/user/signup" element={<Signup/>}></Route>
        <Route path="/admindashboard" element={<AdminDashboard/>}></Route>
    </Routes>
  )
}

export default AllRoutes