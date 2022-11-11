import React from 'react'
import { Routes, Route } from "react-router-dom";
import Mainpage from '../MainPage/mainpage';

const AllRoutes = () => {
  return (
    <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Mainpage />}></Route>
=======
        {/* <Route path="/" element={<Mainpage />}></Route> */}
        <Route path="/user/login" element={<Login />}></Route>
        <Route path="/user/signup" element={<Signup/>}></Route>
>>>>>>> 4a38572e451acdec22deed38c700214bdfd3b502
    </Routes>
  )
}

export default AllRoutes