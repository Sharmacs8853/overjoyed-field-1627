import React from 'react'
import { Routes, Route } from "react-router-dom";
import Mainpage from '../MainPage/mainpage';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Mainpage />}></Route>
    </Routes>
  )
}

export default AllRoutes