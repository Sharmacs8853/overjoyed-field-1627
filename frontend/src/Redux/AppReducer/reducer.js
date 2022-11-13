import * as types from './actionType'

const initial={
    isLoading: false,
    isError:false,
    jobdes:[],
}


const reducer=(state=initial,action)=>{
    const {type,payload} = action;
   
    switch(type){
       case types.GET_SINGLE_JOD_DES_REQUEST:
           return{
               ...state,
               isLoading1: true,
               isError1:false
           }
   
       case types.GET_SINGLE_JOD_DES_SUCCESS:
           return{
               ...state,
               jobdes:payload,
               isLoading1: false,
               isError1:false,
           }  
           
       case types.GET_SINGLE_JOD_DES_FAILURE:
           return{
               ...state,
               isError1:true,
               isLoading1: false,
           }
        default:{
            return state;
        }
     }
    }
    
    export{ reducer}