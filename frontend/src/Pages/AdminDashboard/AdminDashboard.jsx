import { Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import "./AdminDashboard.css"

const AdminDashboard = () => {
      const [job ,setJobs] =useState([]);

    const handleJobs=()=>{
        
        return fetch("http://localhost:8001/job",{
                   method:"GET",
                   headers:{
                    "Content-Type": "application/json",
                    "Authorization":"Bearer"
                   }

        }).then((res)=>res.json())
        .then(res=>{console.log(res)
        setJobs(res)}
        )


    }
    console.log(job)



  return (
    <div
    className='admindashboard'
    >
    <div className='adminsidebar'>
    <div>
    <Button onClick={handleJobs} colorScheme={"blue"}>Jobs</Button>
    <Button colorScheme={"blue"}>users</Button>
    </div>
    </div>
    <div className='admindata'>
         {
            job?job.map((item)=>(
                 
                <div className='P_jobcard'>
                <div className='jobcard'>
                
                      <b>
                      <h2 style={{
                        color:"black",
                        paddingLeft:"5px"
                      }}>{item.job_title}</h2>
                      </b>
                      <p style={{
                        color:"#404040"
                      }}>{item.company_name}</p>
                      <div className='expsc'>
                      <div></div>
                      <div></div>
                      <div>{item.city[0]}</div>
                      </div>
                      <div className='job_des' >
                     
                      <span title={item.job_description}>
                      {item.job_description}
                      </span>
                      </div>
                      <div>{item.job_title}</div>
                      <div>Post date: {(item.post_date)}</div>
                      </div>
                      <div className='R_jobcard'>
                      <img src={item.url} alt="" />
                      </div>
                      <div className='del_up'>
                      <div><Button colorScheme={"red"}>Delete</Button></div>
                      <div><Button colorScheme={"green"}>Update</Button></div>
                      </div>
                </div>
            )) :""

         }     
    
    </div>
    
    </div>
  )
}

export default AdminDashboard