import { Box, Button, Flex, Heading, Input, Spacer, Text,Img } from '@chakra-ui/react'
import React from 'react'
import {Link} from "react-router-dom"
import { BsFilter, BsStarFill, BsFileEarmarkText} from 'react-icons/bs'
import { IoLocationOutline } from "react-icons/io5";
import './Dreamjob.css'
import { useEffect,useState } from 'react'
import axios from "axios"

const Dreamjob = () => {
    const [job ,setJobs] =useState([]);
    const {REACT_APP_MONGO_URL}=process.env;
    const [filterData,setFilterData]=useState([])
    const [show,setShow]=useState(false)
    const [val,setValue]=useState("")
  

  useEffect(()=>{
  axios.get(`${REACT_APP_MONGO_URL}/job`).then((res)=>{
    setJobs(res.data)
  }).catch((err)=>{
    console.log(err)
  })
  },[])
 
 const handleFilter=(e)=>{
    setValue(e.target.value)
    const filterResult=job && job.filter(item=>item.job_title.toLowerCase().includes(e.target.value.toLowerCase()))
    setFilterData(filterResult)
   
 }
 useEffect(()=>{
    if(val===""){
        setShow(false)
     }
     if(val!==""){
        setShow(true)
     }
 },[val])
 

 
console.log(job)



    return (
        <Box className='job-div'>
            <Box className='inner-job-div'>
                <Heading>Find your dream job now</Heading>
                <Text color={'gray.500'}>5 lakh+ jobs for you to explore</Text>
                <Box className='search-div' height={"63px"}>
                    <Box alignItems={'center'}>
                        <Flex gap={"15px"}>
                            <Box width="40px" justifyContent={"center"}  padding-left="15px" size={"45px"} display={"flex"} alignItems={"center"} color={'gray.500'}>
                                <i  className="fa-solid fa-magnifying-glass"></i>
                            </Box>
                            <Box display={"flex"} align-items={"center"} borderLeft={'1px solid'} borderColor={'gray.300'}>
                                <Input variant='unstyled' width={'300px'} px={'10px'} placeholder='Enter skills/ designations / Companies' type='text' onChange={handleFilter}/>
                            </Box>
                            <Box display={"flex"} align-items={"center"} borderLeft={'1px solid'} borderColor={'gray.300'}>
                                <Input variant='unstyled' px={'10px'} placeholder='Select experience' type='text' />
                            </Box>
                            <Box display={"flex"} align-items={"center"} borderLeft={'1px solid'} borderColor={'gray.300'}>
                                <Input variant='unstyled' px={'10px'} placeholder='Enter location' type='text' />
                            </Box>
                            <Spacer/>
                            <Box>
                                <Button fontWeight={"bold"} color={"white"} backgroundColor={"rgb(69,126,255)"} borderRadius={'25px'}padding={"24px 38px"}><Text fontSize={'lg'}>Search</Text></Button>
                            </Box>
                        </Flex>
                    </Box>
                </Box>
            </Box>

            {/* from here I have  */}

{show && <Box className="filter-by-search">

 {filterData && filterData.map((item)=>
     
        <Box className="filter-indv-div">
            <Link to={`/jd/${item._id}`} className="filter-link">
                <div className="filter-left-div">
                <h1 className="head-of-job">{item.job_title}</h1>
                 <h5 className="dis-of-comp">{item.company_description}</h5>  
                </div>
                <img src={item.url} className="filter-img"></img>
            </Link>
        </Box>   
 )}
</Box>}
</Box>
        
    )
}

export default Dreamjob