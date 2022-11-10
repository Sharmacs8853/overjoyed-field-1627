import { Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import "./AdminDashboard.css"
const AdminDashboard = () => {
      const [job ,setJobs] =useState([]);

    // const handleJobs=()=>{
        
    //     return fetch("http://localhost:8001/job",{
    //                method:"GET",
    //                headers:{
    //                 "Content-Type": "application/json",
    //                 "Authorization":"Bearer"
    //                }

    //     }).then((res)=>res.json())
    //     .then(res=>console.log(res)
    //     )


    // }



  return (
    <div
    className='admindashboard'
    >
    <div className='adminsidebar'>
    <div>
    <Button  colorScheme={"blue"}>Jobs</Button>
    <Button colorScheme={"blue"}>users</Button>
    </div>
    </div>
    <div className='admindata'>
    
    
    </div>
    
    </div>
  )
}

export default AdminDashboard