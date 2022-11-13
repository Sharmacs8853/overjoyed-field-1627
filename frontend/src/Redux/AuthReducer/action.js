import * as types from "./actionTypes";
import axios from "axios";

const {REACT_APP_MONGO_URL}=process.env





const signup=(payload)=>(dispatch)=>{
 console.log("payload at action",payload)
    dispatch({type:types.SIGNUP_REQUEST});
    return  axios.post(`${REACT_APP_MONGO_URL}/user/signup`,payload).then((res)=>{
   
      return dispatch({type:types.SIGNUP_SUCCESS,payload:res.data})


    }).catch((err)=>{
        dispatch({type:types.SIGNUP_FAILURE,payload:err})
    })
}


const login=(payload)=>(dispatch)=>{
    dispatch({type:types.LOGIN_REQUEST});
    return axios.post(`${REACT_APP_MONGO_URL}/user/login`,payload).then((res)=>{

       return  dispatch({type:types.LOGIN_SUCCESS,payload:res.data})
    }).catch((err)=>{
        console.log("err",err)
        
        dispatch({type:types.LOGIN_FAILURE})
    })
}

const logout=(payload)=>(dispatch)=>{
    
    dispatch({type:types.LOGOUT_REQUEST});
    dispatch({type:types.LOGOUT_SUCCESS});
    dispatch({type:types.LOGOUT_FAILURE})
}

export {signup,login,logout}