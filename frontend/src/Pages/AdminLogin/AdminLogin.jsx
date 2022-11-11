import React, { useState } from 'react'
import {
    FormControl, Image,
    FormLabel,
    Button,
    Input, Box, Text, Flex
} from '@chakra-ui/react'

import axios from "axios"
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {

    const [formData, setFormData] = useState({})
    const nav = useNavigate()
    const handleChange = (e) => {
        const { value, name } = e.target

        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleLogin = async () => {
        try {
            const { data } = await axios.post("http://localhost:8001/admin/login", formData)
            console.log(data[0])
            nav("/Admin")
        }
        catch (err) {
            if (err.response.status === 401) {
                alert("Invalid Credential")
            }
            // console.log("error")
            // console.log(err)
        }
    }

    return (
        <div width="100%"  >
            <Box ml="5%">
                <Flex gap="15%">
                    <Box width="40%" height="auto" textAlign="center">
                        <Text fontWeight="bold" color="#0078db">NAUKRI HIRING SUITE FOR EMPLOYERS</Text>
                        <Text fontWeight="bold" color="#414b5d" fontSize="28px">From Campus to Senior Level Hiring</Text>
                        <Text color="#8892a3" fontSize="22px">Bouquet of solutions to meet all your hiring needs</Text>
                        <Flex justifyContent="space-between">
                            <Text color="#8892a3" fontSize="16px">naukri</Text>
                            <Text color="#8892a3" fontSize="16px">iimjobs</Text>
                            <Text color="#8892a3" fontSize="16px"> hirist</Text>
                            <Text color="#8892a3" fontSize="16px">Firstnaukri</Text>
                            <Text color="#8892a3" fontSize="16px">zwayam</Text>
                            <Text color="#8892a3" fontSize="16px">doselect</Text>
                            <Text color="#8892a3" fontSize="16px">eHire</Text>
                        </Flex>
                        <Button mt="2%" colorScheme='blue' variant='outline'>
                            Know more
                        </Button>

                        <Image width="50%" src="https://static.naukimg.com/s/5/114/i/loginFormImage.png" alt="icon" />
                    </Box>

                    <div width="30%" height="auto">

                        <Box >
                            <FormControl >
                                <FormLabel textAlign="center">Login/Register</FormLabel>
                                <Input type='email' name="email" onChange={handleChange} placeholder='Registered Email ID' />
                                {/* <FormHelperText>Registered Email ID cannot be blank.</FormHelperText> */}
                                <Input type='password' name="password" onChange={handleChange} placeholder='Password' />
                                {/* <FormHelperText>Password cannot be blank.</FormHelperText> */}
                            </FormControl>
                            <Button mt="5%" width="100%" colorScheme={"blue"} onClick={handleLogin}>Login</Button>

                        </Box>

                        <Box  >
                            <Text color='blue' textAlign="center">Forget Password?</Text>
                            <Text fontSize="xs" mt="5%">Keep your account safe. Learn How</Text>
                            <Flex justifyContent="space-between" mt="5%">
                                <Text fontSize="xs">Have a Query? Contact Us</Text>
                                <Text fontSize="xs" color='blue'>Fraud Alert!</Text>
                            </Flex>
                            <Box mt="5%"  >
                                <Text fontSize="xs" ml="35%">Are you a new client ?</Text>
                                <Button mt="2%" width="100%" colorScheme='blue' variant='outline'>
                                    Register Now
                                </Button>
                            </Box>
                        </Box>
                    </div>
                </Flex>

                <Box textAlign="center">
                    <Text fontWeight="bold" color="#0078db">PRODUCTS & SERVICES</Text>
                    <Text fontWeight="bold" color="#414b5d" fontSize="28px">Naukri is India’s No.1 Job Posting & Recruitment Platform</Text>
                </Box>
                <Flex gap="5%">
                    <Box width="40%" mt="5%">
                        <Text fontWeight="bold" color="#414b5d" fontSize="22px">Naukri Job Posting Services - Get Quality Applies</Text>
                        <Text fontSize="xs">Reach out to millions of jobseekers and hire quickly with our fast and easy job posting services.</Text>
                        <Flex mt="5%" justifyContent="space-evenly">
                            <div>
                                <Flex mt="5%" gap="5%">
                                    <Image width="15%" src='https://static.naukimg.com/s/5/114/i/icon_2_min_to_post.png' alt='icon' />
                                    <Box>2 Minutes to Post</Box></Flex>
                                <Flex mt="5%" gap="5%"> <Image width="15%" src='https://static.naukimg.com/s/5/114/i/icon_attaract_audience.png' alt='icon' />
                                    <Box>Attract Audience</Box></Flex>
                            </div>
                            <div>
                                <Flex mt="5%" gap="5%">
                                    <Image width="15%" src='https://static.naukimg.com/s/5/114/i/icon_Unlimited_Applies.png' alt='icon' />
                                    <Box>Unlimited Applies</Box></Flex>
                                <Flex mt="5%" gap="5%"> <Image width="15%" src='https://static.naukimg.com/s/5/114/i/icon_30_day_visibility.png' alt='icon' />
                                    <Box>30 Day Visibility</Box></Flex>
                            </div>

                        </Flex>

                    </Box>


                    <div>
                        <Image width="60%" src='https://static.naukimg.com/s/5/114/i/homePageJP.png' alt='icon' />
                    </div>
                </Flex>



                <Flex gap="5%">

                    <div>
                        <Image width="60%" src='https://static.naukimg.com/s/5/114/i/homePageResdex.png' alt='icon' />
                    </div>

                    <Box width="40%" mt="5%">
                        <Text fontWeight="bold" color="#414b5d" fontSize="22px">Naukri Job Posting Services - Get Quality Applies</Text>
                        <Text fontSize="xs">Reach out to millions of jobseekers and hire quickly with our fast and easy job posting services.</Text>
                        <Flex mt="5%" justifyContent="space-evenly">
                            <div>
                                <Flex mt="5%" gap="5%">
                                    <Image width="15%" src='https://static.naukimg.com/s/5/114/i/icon_crore_candidates.png' alt='icon' />
                                    <Box>Over 8.66 crore Jobseekers</Box></Flex>
                                <Flex mt="5%" gap="5%"> <Image width="15%" src='https://static.naukimg.com/s/5/114/i/icon_contact_directly.png' alt='icon' />
                                    <Box>Contact Directly</Box></Flex>
                            </div>
                            <div>
                                <Flex mt="5%" gap="5%">
                                    <Image width="15%" src='https://static.naukimg.com/s/5/114/i/icon_Smart_talent_search.png' alt='icon' />
                                    <Box>USmart Talent Search</Box></Flex>
                                <Flex mt="5%" gap="5%"> <Image width="15%" src='https://static.naukimg.com/s/5/114/i/icon_verified_candidates.png' alt='icon' />
                                    <Box>Verified Candidates</Box></Flex>
                            </div>

                        </Flex>
                        <Button mt="2%" colorScheme='blue' variant='outline'>
                            Buy Now
                        </Button>
                    </Box>
                </Flex>

                <Flex width="80%" height="auto" >
                    <Box >
                        <Flex gap='2%'><Text fontSize="18px" fontWeight="bold" color="#0078db">INTRODUCING THE PRODUCTIVITY ENHANCEMENT</Text><Image src='https://static.naukimg.com/s/7/0/assets/images/src/widgets/mnr-promo-banner-wdgt/v1/components/AppPromoBanner/assets/Frame.a95303d0.svg' alt='icon' /></Flex>
                        <Text fontWeight="bold" color="#414b5d" fontSize="28px">Naukri Recruiter App</Text>
                        <Box lineHeight="40px">
                            <Flex >
                                <Image src='https://static.naukimg.com/s/7/0/assets/images/src/widgets/mnr-promo-banner-wdgt/v1/components/AppPromoBanner/assets/tickIcon.9289ea86.svg' alt='icon' />
                                <Text color="#091e42" fontSize="14px">
                                    Increase your productivity by calling candidates directly from the app</Text>
                            </Flex>
                            <Flex>
                                <Image src='https://static.naukimg.com/s/7/0/assets/images/src/widgets/mnr-promo-banner-wdgt/v1/components/AppPromoBanner/assets/tickIcon.9289ea86.svg' alt='icon' />
                                <Text color="#091e42" fontSize="14px">Reduce follow ups and increase jobseeker connect rate by specifying the calling intent</Text>
                            </Flex>
                            <Flex>
                                <Image src='https://static.naukimg.com/s/7/0/assets/images/src/widgets/mnr-promo-banner-wdgt/v1/components/AppPromoBanner/assets/tickIcon.9289ea86.svg' alt='icon' />
                                <Text color="#091e42" fontSize="14px">Search candidates on the go through Resdex in App</Text>
                            </Flex>
                            <Flex>
                                <Image src='https://static.naukimg.com/s/7/0/assets/images/src/widgets/mnr-promo-banner-wdgt/v1/components/AppPromoBanner/assets/tickIcon.9289ea86.svg' alt='icon' />
                                <Text color="#091e42" fontSize="14px">Scan phone numbers from anywhere and call directly from the App</Text>
                            </Flex>
                            <Flex>
                                <Image src='https://static.naukimg.com/s/7/0/assets/images/src/widgets/mnr-promo-banner-wdgt/v1/components/AppPromoBanner/assets/tickIcon.9289ea86.svg' alt='icon' />
                                <Text color="#091e42" fontSize="14px">Get instant notifications on job applies</Text>
                            </Flex>

                        </Box>

                    </Box>

                    <Image ml="10%" width='35%' src="https://static.naukimg.com/s/7/0/assets/images/src/widgets/mnr-promo-banner-wdgt/v1/components/AppPromoBanner/assets/promo-banner.a5c8b370.png" alt="icon" />
                </Flex>
                <Flex width="80%" gap='10%' textAlign='center' mt="5%">
                    <Box>
                        <Image src='https://static.naukimg.com/s/5/114/i/blog_1.jpg' alt='ico' />
                        <Text fontWeight="bold" fontSize="18px">Get more responses from Jobseekers</Text>
                        <Text mt="2%">Quickly connect with jobseekers through chat and get more responses.</Text>
                    </Box>
                    <Box><Image src='https://static.naukimg.com/s/5/114/i/blog_2.jpg' alt='icon' />
                        <Text fontWeight="bold" fontSize="18px">Smart Comments, Tracker, Task & Reminders in Resdex</Text>
                        <Text mt="2%">Improve efficiency by using smart comments, tasks and reminders.</Text></Box>
                    <Box><Image src='https://static.naukimg.com/s/5/114/i/blog_3_dataInsinght.jpg' alt='icon' />
                        <Text fontWeight="bold" fontSize="18px">Naukri Trends</Text>
                        <Text mt="2%">Hiring Trends for IT, BFSI, BPO/ITes, & Pharma during Jul’19 – Sep’19</Text></Box>
                </Flex>

                <Flex justifyContent='space-evenly' mt="10%">
                    <Image src='https://static.naukimg.com/s/5/114/i/client_fortis.png' alt="icon" />
                    <Image src='https://static.naukimg.com/s/5/114/i/client_tesco.png' alt="icon" />
                    <Image src='https://static.naukimg.com/s/5/114/i/client_wipro.png' alt="icon" />
                    <Image src='https://static.naukimg.com/s/5/114/i/client_amazon.png' alt="icon" />
                    <Image src='https://static.naukimg.com/s/5/114/i/client_itc.png' alt="icon" />
                    <Image src='https://static.naukimg.com/s/5/114/i/client_reliance.png' alt="icon" />
                    <Image src='https://static.naukimg.com/s/5/114/i/client_infosys.png' alt="icon" />
                    <Image src='https://static.naukimg.com/s/5/114/i/client_tata.png' alt="icon" />
                </Flex>

            </Box>
        </div>
    )
}

export default AdminLogin