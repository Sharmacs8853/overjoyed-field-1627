import React from 'react'
import { Routes, Route } from "react-router-dom";
import Login from '../Login/Login';
// import Mainpage from '../MainPage/Mainpage';
import Signup from "../Signup/Signup";

const AllRoutes = () => {
  return (
    <Routes>
        {/* <Route path="/" element={<Mainpage />}></Route> */}
        <Route path="/user/login" element={<Login />}></Route>
        <Route path="/user/Signup" element={<Signup/>}></Route>
    </Routes>
  )
}

export default AllRoutes