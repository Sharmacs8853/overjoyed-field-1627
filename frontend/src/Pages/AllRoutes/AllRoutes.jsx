import React from 'react'
import { Routes, Route } from "react-router-dom";

import AdminDashboard from '../AdminDashboard/AdminDashboard';
import Mainpage from '../MainPage/MainPage';


import AdminLogin from '../AdminLogin/AdminLogin';

import HomePage from '../Home/HomePage';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';








const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/adminlogin' element={<AdminLogin />}></Route>
    </Routes>
  )
}

export default AllRoutes