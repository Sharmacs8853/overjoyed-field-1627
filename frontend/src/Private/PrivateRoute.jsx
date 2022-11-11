import React from 'react'
import {Navigate,useLocation} from "react-router-dom"
import { useSelector } from 'react-redux'
const PrivateRoute = ({children}) => {
  const location=useLocation()
  const {isAuth} =useSelector((state)=>{return {isAuth:state.AuthReducer.isAuth}})
  const User=JSON.parse(localStorage.getItem("profile")) || ""
  const token=User.token
  if(!token && !isAuth){
     return <Navigate to="/login" replace state={{data:location.pathname}} />
  }
  return children
}

export default PrivateRoute
