import { Box, Flex, Img, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.modules.css'

const Footer = () => {
    return (
        <Box className='footer-div'>
            <Box className='footer-inner-div'>
                <Flex className='each-box'>
                    <Flex gap={'50px'}>
                            <Box>
                                <Box>
                                    <Img src='https://static.naukimg.com/s/4/100/i/naukri_Logo.png' />
                                    <Box mt={'30px'}>
                                        <Text color={'gray.500'}>Contact with us</Text>
                                        <Flex gap={'10px'} color={'gray.500'}>
                                            <Box><i className="fa-brands fa-square-facebook"></i></Box>
                                            <Box><i className="fa-brands fa-square-instagram"></i></Box>
                                            <Box><i className="fa-brands fa-twitter"></i></Box>
                                            <Box><i className="fa-brands fa-linkedin"></i></Box>
                                        </Flex>
                                    </Box>
                                </Box>
                            </Box>
                            <Box>
                                <Box>
                                    <Link to="/"><Text className='link-text' color={'blackAlpha.700'}>About us</Text></Link>
                                    <Link to="/"><Text className='link-text' color={'blackAlpha.700'}>Careers</Text></Link>
                                    <Link to="/"><Text className='link-text' color={'blackAlpha.700'}>Employer home</Text></Link>
                                    <Link to="/"><Text className='link-text' color={'blackAlpha.700'}>Sitemap</Text></Link>
                                </Box>
                            </Box>
                    </Flex>
                     <Flex gap={'40px'}>
                        <Box>
                            <Box>
                                <Link to="/"><Text className='link-text' color={'blackAlpha.700'}>Help center</Text></Link>
                                <Link to="/"><Text className='link-text' color={'blackAlpha.700'}>Summons/Notices</Text></Link>
                                <Link to="/"><Text className='link-text' color={'blackAlpha.700'}>Grievances</Text></Link>
                                <Link to="/"><Text className='link-text' color={'blackAlpha.700'}>Report issue</Text></Link>
                            </Box>
                        </Box>
                        <Box>
                            <Box>
                                <Link to="/"><Text className='link-text' color={'blackAlpha.700'}>Privacy policy</Text></Link>
                                <Link to="/"><Text className='link-text' color={'blackAlpha.700'}>Terms & conditions</Text></Link>
                                <Link to="/"><Text className='link-text' color={'blackAlpha.700'}>Fraud alert</Text></Link>
                                <Link to="/"><Text className='link-text' color={'blackAlpha.700'}>Trust & safety</Text></Link>
                            </Box>
                        </Box>
                     </Flex>
                    <Spacer />
                    <Box>
                        <Box border={'1px solid '} borderColor={'gray.200'} padding={'20px'} borderRadius={'10px'}>
                            <Text color={'blackAlpha.900'} fontWeight={600} fontSize={'lg'}>Apply on the go</Text>
                            <Text color={'blackAlpha.700'} fontWeight={500} fontSize={'md'}>Get real-time job updates on our App</Text>
                            <Box>
                                <Flex margin={'5px'} gap={'10px'}>
                                    <Box>
                                        <Img src='https://static.naukimg.com/s/0/0/i/new-homepage/android-app.png' />
                                    </Box>
                                    <Box>
                                        <Img src='https://static.naukimg.com/s/0/0/i/new-homepage/ios-app.png' />
                                    </Box>
                                </Flex>
                            </Box>
                        </Box>
                    </Box>
                </Flex>
            </Box>
            <Box className='sub-footer-div'>
                <Box py={'15px'}>
                    <Flex className='each-box'>
                                <Box>
                                    <Box>
                                        <Img src='https://static.naukimg.com/s/0/0/i/new-homepage/infoedge-logo.svg' />
                                    </Box>
                                </Box>
                                <Box>
                                    <Box color={'gray.500'} px={'20px'}>
                                        <Text fontSize={'sm'}>All trademarks are the property of their respective owners</Text>
                                        <Text fontSize={'sm'}>All rights reserved © 2022 Info Edge (India) Ltd.</Text>
                                    </Box>
                                </Box>
                        <Spacer/>
                       
                        <Box>
                            <Box py={'15px'}>
                                <Text color={'gray.600'}>Our&nbsp;businesses</Text>
                            </Box>
                        </Box>
                        <Box>
                            <Box py={'15px'}>
                                <Box>
                                    <Flex>
                                        <Box><Img src='https://static.naukimg.com/s/0/0/i/new-homepage/footer-logos/jeevansathi.png' /></Box>
                                        <Box><Img src='https://static.naukimg.com/s/0/0/i/new-homepage/footer-logos/iimjobs.png' /></Box>
                                        <Box><Img src='https://static.naukimg.com/s/0/0/i/new-homepage/footer-logos/firstNaukri.png' /></Box>
                                        <Box><Img src='https://static.naukimg.com/s/0/0/i/new-homepage/footer-logos/nnacres.png' /></Box>
                                    </Flex>
                                </Box>
                            </Box>
                        </Box>
                    </Flex>
                </Box>
            </Box>

        </Box>
    )
}

export default Footer