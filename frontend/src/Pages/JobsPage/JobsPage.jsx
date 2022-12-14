import React, { useEffect, useState } from 'react'
import { BsFilter, BsStarFill, BsFileEarmarkText} from 'react-icons/bs'
import { IoLocationOutline } from "react-icons/io5";
import { Box, Flex, Heading, Img, Spacer, Text } from '@chakra-ui/react'
import styles from './JobsPage.module.css';
import { Link, useNavigate } from 'react-router-dom';

const JobsPage = () => {
    const [job ,setJobs] =useState([]);


    const [category,setCategory] = useState(false);
    const [city,setCity]=useState(false);
    const [state,setState]=useState(false);
    const navigation = useNavigate()

    const {REACT_APP_MONGO_URL}=process.env;
    const [isLoading,setIsLoading]=useState(false)

    const [filter,setFilter]=useState([])



      const handleFilter=(e)=>{
     
        const newFilter=[...filter];
        if(newFilter.includes(e.target.value)){
           newFilter.splice(newFilter.indexOf(e.target.value),1)
        }else{
          newFilter.push(e.target.value)
        }
        setFilter(newFilter)
      }

     console.log(filter)

    const handleJobs = () => {

        let payload;
       
        if(filter.length===0){
             payload="/"
        }else if(filter.length===1){

             payload = `category=${filter}`;
        }
        setIsLoading(true)
        return fetch(`${REACT_APP_MONGO_URL}/job?${payload}`, {

            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer"
            }
        }).then((res) => res.json())
            .then(res => {
                setJobs(res)
                setIsLoading(false)
            }
        ).catch((err)=>{
            setIsLoading(false)
        })
    }
    useEffect(() => {
        handleJobs();
    },[filter]);





    return (
        <Box className={styles.job_box}>
            <Flex gap={5}>
                <Box width={'300px'} className={styles.border} p={'15px'}>
                    <Box border={'1px solid gray'} p={1} >
                        <Flex gap={5}>
                            <Box><Text><BsFilter /></Text></Box>
                            <Box><Heading size={'sm'}>All Filters</Heading></Box>
                            <Spacer />
                            <Box>Applied</Box>
                        </Flex>
                    </Box>

                    {/* filter cat flexx=  start */}
                    <Flex flexDirection={'column'} className={styles.border} p={4} mt={1}>
                        <Box>
                            <Heading size={"sm"} py={3}>Department</Heading>
                        </Box>
                        <Box>
                            <Flex gap={2}>
                                <Box><input  checked={filter.includes("Management")} type='checkbox' value='Management' onChange={handleFilter} /></Box>
                                <Box color={'gray.700'}><label >Management</label></Box>
                            </Flex>
                        </Box>
                         <Box>
                            <Flex gap={2}>
                                <Box><input type='checkbox'  checked={filter.includes("Healthcare")}
                                value='Healthcare' 
                                onChange={handleFilter}
                                /></Box>
                                <Box color={'gray.700'}><label >Healthcare</label></Box>
                            </Flex>
                        </Box> 
                        <Box>
                        <Flex gap={2}>
                            <Box><input type='checkbox'  checked={filter.includes("IT")}
                            value='IT' 
                            onChange={handleFilter}
                            /></Box>
                            <Box color={'gray.700'}><label >IT</label></Box>
                        </Flex>
                    </Box> 
                        <Box>
                            <Flex gap={2}>
                                <Box><input checked={filter.includes("Sales")} type='checkbox' value='Sales' onChange={handleFilter} /></Box>
                                <Box color={'gray.700'}><label >Sales</label></Box>
                            </Flex>
                        </Box>
                    </Flex>

                    <Flex flexDirection={'column'} className={styles.border} p={4} mt={1}>
                        <Box>
                            <Heading size={"sm"} py={3}>Work mode</Heading>
                        </Box>
                        <Box>
                            <Flex gap={2}>
                                <Box><input type='checkbox' /></Box>
                                <Box color={'gray.700'}><label >Work from office</label></Box>
                            </Flex>
                        </Box>
                        <Box>
                            <Flex gap={2}>
                                <Box><input type='checkbox' /></Box>
                                <Box color={'gray.700'}><label >Remote</label></Box>
                            </Flex>
                        </Box>
                        <Box>
                            <Flex gap={2}>
                                <Box><input type='checkbox' /></Box>
                                <Box color={'gray.700'}><label >Hybrid</label></Box>
                            </Flex>
                        </Box>
                    </Flex>
                    <Flex flexDirection={'column'} className={styles.border} p={4} mt={1}>
                        <Box>
                            <Heading size={"sm"} py={3}>Location</Heading>
                        </Box>
                        <Box>
                            <Flex gap={2}>
                                <Box><input type='checkbox' /></Box>
                                <Box color={'gray.700'}><label >Pune</label></Box>
                            </Flex>
                        </Box>
                        <Box>
                            <Flex gap={2}>
                                <Box><input type='checkbox' /></Box>
                                <Box color={'gray.700'}><label >Delhi</label></Box>
                            </Flex>
                        </Box>
                        <Box>
                            <Flex gap={2}>
                                <Box><input type='checkbox' /></Box>
                                <Box color={'gray.700'}><label >Bengaluru</label></Box>
                            </Flex>
                        </Box>
                    </Flex>


                    {/* filter cat flexx=  emd*/}
                </Box>


                {/* middle area */}
                {isLoading? <img src="https://createwebsite.net/wp-content/uploads/2015/09/GD.gif" style={{height:"150px",display:"flex",alignItems:"center",justifyContent:"center",margin:"auto",marginTop:"200px"}}></img>  :  <Box width={'70%'}>

{
    job?job.map((item)=>(
        
       <Link to={`/jd/${item._id}`}>
         <Box key={item._id} border={'1px solid gray'} m={2} p={4}>
    <Flex flexDir={'column'} gap={1}>
        <Box>
        <Flex>
            <Box> <Heading size={'sm'} mt={5}> {item.job_title}</Heading></Box>
            <Spacer/>
            <Box border={'1px solid gray'} p={2}><Img h={'50px'} w={'50px'} src={item.url} alt='' /></Box>
        </Flex>
        </Box>
        <Box>
            <Flex color={'gray.500'} gap={1}>
                <Box><Text>{item.company_name} &nbsp; 3.9 </Text></Box>
                <Box><Text><BsStarFill /></Text></Box>

            </Flex>
        </Box>
        <Box>
            <Flex color={'gray.700'} gap={2}>
                <Box><Text><IoLocationOutline /></Text></Box>
                <Box><Text>{item.city[0]},{item.state[0]}</Text></Box>
            </Flex>
        </Box>
        <Box>
            <Flex color={'gray.700'} gap={2}>
                <Box><Text><BsFileEarmarkText /></Text></Box>
                <Box><Text>Knowledge of </Text></Box>
                <Box h={'20px'} w={'300px'} overflow={'hidden'} textOverflow={'ellipsis'}><Text>{item.job_description}</Text></Box>
            </Flex>
        </Box>

        <Box>
            <Flex>
                <Box m={1} px={3} backgroundColor={'blackAlpha.100'}><Text fontSize={'xs'}><button>{item.post_date}. {item.category}</button></Text></Box>
                <Spacer />
                <Box m={1} px={3} backgroundColor={'blackAlpha.100'}><button><Text>Save</Text></button></Box>
            </Flex>
        </Box>
    </Flex>
</Box>
</Link>
    )):""
}



<Box border={'1px solid gray'} m={2} p={4}>
    <Flex flexDir={'column'} gap={1}>
        <Box>
        <Flex>
            <Box> <Heading size={'sm'} mt={5}> Microsoft Dynamics CRM Architect</Heading></Box>
            <Spacer/>
            <Box border={'1px solid gray'} p={2}><Img h={'50px'} w={'50px'} src='https://img.naukimg.com/logo_images/groups/v1/4587425.gif' alt='' /></Box>
        </Flex>
        </Box>
        <Box>
            <Flex color={'gray.500'} gap={1}>
                <Box><Text>Capgemini &nbsp; 3.9 </Text></Box>
                <Box><Text><BsStarFill /></Text></Box>

            </Flex>
        </Box>
        <Box>
            <Flex color={'gray.700'} gap={2}>
                <Box><Text><IoLocationOutline /></Text></Box>
                <Box><Text>Hybrid - Kolkata, Hyderabad</Text></Box>
            </Flex>
        </Box>
        <Box>
            <Flex color={'gray.700'} gap={2}>
                <Box><Text><BsFileEarmarkText /></Text></Box>
                <Box><Text>Knowledge of </Text></Box>
                <Box><Text> ASP.net developer must- plugin, WCF, SSRS</Text></Box>
            </Flex>
        </Box>

        <Box>
            <Flex>
                <Box m={1} px={3} backgroundColor={'blackAlpha.100'}><Text fontSize={'xs'}><button>JUST NOW</button></Text></Box>
                <Spacer />
                <Box m={1} px={3} backgroundColor={'blackAlpha.100'}><button><Text>Save</Text></button></Box>
            </Flex>
        </Box>
    </Flex>
</Box>
</Box>}
               

            </Flex>
        </Box>
    )
}

export default JobsPage