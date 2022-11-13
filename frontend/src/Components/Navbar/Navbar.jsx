import { Box, Button, Flex, Img, Spacer,Text} from '@chakra-ui/react'
import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import './Navbar.css';
import { NavLink } from "../../Style/signup.style"
import { useSelector,useDispatch } from 'react-redux';
import {logout} from "../../Redux/AuthReducer/action"
const Navbar = () => {
  const User=JSON.parse(localStorage.getItem("profile")) || ""
  const token=User.token
  const adminToken=JSON.parse(localStorage.getItem("adminToken")) || ""
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const {isLoading}=useSelector((state)=>{return{isLoading:state.AuthReducer.isLoading}})
  
  const handleLogout=()=>{
    dispatch(logout())
    const profile=""
      localStorage.setItem("profile",JSON.stringify(profile))
      navigate("/")
    }
  
    const handleAdminLogout=async()=>{
        try{
            const adminToken="";
            await localStorage.setItem("adminToken",JSON.stringify(adminToken))
            alert("Logout Successful")
            navigate("/adminlogin")
        }
        catch(err){
         console.log(err)
        }
    }

  

  return (
    <Box backgroundColor={'white'} className="nav-box">
      <nav className="navbar navbar-expand-lg ">
        <Box className="container-fluid">
          <Box className='logo'>
            <Link className="navbar-brand" to="/"><Img src='https://static.naukimg.com/s/4/100/i/naukri_Logo.png' /></Link>
          </Box>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Box className="collapse navbar-collapse" id="navbarNavDropdown">
            <Flex width={'100%'}>
              <Box>
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <Link className="nav-link" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <Text className='hover-border' fontSize={'md'} fontWeight={'600'} color={'blackAlpha.800'}>Job</Text>
                      
                    </Link>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" to="/user/jobs">It Job</Link></li>
                      <li><Link className="dropdown-item" to="/">Another action</Link></li>
                      <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <Link className="nav-link" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      
                      <Text className='hover-border' fontSize={'md'} fontWeight={'600'} color={'blackAlpha.800'}>Companies</Text>
                    </Link>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" to="/">Action</Link></li>
                      <li><Link className="dropdown-item" to="/">Another action</Link></li>
                      <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <Link className="nav-link" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <Text className='hover-border' fontSize={'md'} fontWeight={'600'} color={'blackAlpha.800'}>Services</Text>
                    </Link>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" to="/">Action</Link></li>
                      <li><Link className="dropdown-item" to="/">Another action</Link></li>
                      <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                    </ul>
                  </li>
                </ul>
              </Box>
              <Spacer />
              <Box>
                <Flex gap={'10px'}>
                  <Box>
                    <Button colorScheme='linkedin' borderRadius={'20px'} px={"25px"} variant='outline' >{token?User.name:<Link to="/user/login">Login</Link>}</Button>
                  </Box>
                  <Box>
                    <Button colorScheme='red' borderRadius={'20px'} px={"25px"}>{token?<h5 onClick={handleLogout}>Logout</h5>:<Link to="/user/signup">Register</Link>}</Button>
                  </Box>
                  <Box>
                    <ul className='navbar-nav'>
                      <li className="nav-item dropdown">
                        <Link className="nav-link" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <Text fontSize={'md'} className='hover-border' fontWeight={'600'} color={'blackAlpha.800'}>For employers</Text>
                        </Link>
                        <ul className="dropdown-menu">
                          <li>{adminToken?<Button bg="none" onClick={handleAdminLogout}>Logout</Button> : <Link className="dropdown-item" to="/adminlogin">Admin Login</Link>}</li>
                          <li><Link className="dropdown-item" to="/admindashboard">Admin dashboard</Link></li>
                        
                        </ul>
                      </li>
                    </ul>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Box>
      </nav>
    </Box>
  )
}

export default Navbar