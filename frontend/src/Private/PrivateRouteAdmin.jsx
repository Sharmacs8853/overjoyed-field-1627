import React from 'react'
import {Navigate,useLocation} from "react-router-dom"
import { useSelector } from 'react-redux'

const PrivateRouteAdmin = ({children}) => {
    const location=useLocation()
    const token=JSON.parse(localStorage.getItem("adminToken")) || ""
  
    if(!token){
       return <Navigate to="/adminlogin" replace state={{data:location.pathname}} />
    }
    return children
}

export default PrivateRouteAdmin
