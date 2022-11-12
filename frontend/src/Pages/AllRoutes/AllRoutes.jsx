import React from 'react'
import { Routes, Route } from "react-router-dom";
import AdminLogin from '../AdminLogin/AdminLogin';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/adminlogin' element={<AdminLogin />}></Route>
    </Routes>
  )
}

export default AllRoutes