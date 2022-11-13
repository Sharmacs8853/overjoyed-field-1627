import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminDashboard from "../AdminDashboard/AdminDashboard";
import AdminLogin from "../AdminLogin/AdminLogin";
import HomePage from "../Home/HomePage";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import MainPage from "../MainPage/MainPage";
import PrivateRoute from "../../Private/PrivateRoute";
import JobsPage from "../JobsPage/JobsPage";
import PrivateRouteAdmin from "../../Private/PrivateRouteAdmin";
import JDpage from "../JobsPage/JD-page/JDpage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route
        path="/home"
        element={
          <PrivateRoute>
            <HomePage />
          </PrivateRoute>
        }
      ></Route>
      <Route path="/user/login" element={<Login />}></Route>
      <Route path="/adminlogin" element={<AdminLogin />}></Route>
      <Route path="/user/signup" element={<Signup />}></Route>
      <Route path="/user/jobs" element={<JobsPage />}></Route>
      <Route path="/jd/:id" element={<JDpage />} />
      <Route
        path="/admindashboard"
        element={
          <PrivateRouteAdmin>
            <AdminDashboard />
          </PrivateRouteAdmin>
        }
      ></Route>
    </Routes>
  );
};

export default AllRoutes;
