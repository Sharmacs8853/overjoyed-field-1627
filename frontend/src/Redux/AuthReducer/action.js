import * as types from "./actionTypes";
import axios from "axios";

const URL=process.env.REACT_APP_MONGO_URL;


console.log(URL)

const signup=(payload)=>(dispatch)=>{
         console.log(payload)
    dispatch({type:types.SIGNUP_REQUEST});
    return  axios.post(`${URL}/user/signup`,payload).then((res)=>{
      console.log(res.data)
      dispatch({type:types.SIGNUP_SUCCESS,payload:res.data})


    }).catch((err)=>{
        dispatch({type:types.SIGNUP_FAILURE,payload:err})
    })
}


const login=(payload)=>(dispatch)=>{
    dispatch({type:types.LOGIN_REQUEST});

       return  dispatch({type:types.LOGIN_SUCCESS,payload:res.data})
    }).catch((err)=>{
        dispatch({type:types.LOGIN_FAILURE})
    })
}

const logout=(payload)=>(dispatch)=>{
    
    dispatch({type:types.LOGOUT_REQUEST});
    dispatch({type:types.LOGOUT_SUCCESS});
    dispatch({type:types.LOGOUT_FAILURE})
}

export {signup,login,logout}