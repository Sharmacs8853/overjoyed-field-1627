import React from 'react'
import { BsFilter, BsStarFill,BsFileEarmarkText, BsSave } from 'react-icons/bs'
import { IoLocationOutline } from "react-icons/io5";
import { Box, Flex, Heading, Input, Spacer, Text } from '@chakra-ui/react'
import styles from './JobsPage.module.css';

const JobsPage = () => {
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
                                <Box><input type='checkbox' /></Box>
                                <Box color={'gray.700'}><label >Software Engineer</label></Box>
                            </Flex>
                        </Box>
                        <Box>
                            <Flex gap={2}>
                                <Box><input type='checkbox' /></Box>
                                <Box color={'gray.700'}><label >Hardware Engineer</label></Box>
                            </Flex>
                        </Box>
                        <Box>
                            <Flex gap={2}>
                                <Box><input type='checkbox' /></Box>
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
                <Box width={'50%'}>
                    <Box border={'1px solid gray'} m={2} p={4}>
                        <Flex flexDir={'column'} gap={1}>
                            <Box>
                                <Heading size={'sm'}> Microsoft Dynamics CRM Architect</Heading>
                            </Box>
                            <Box>
                                <Flex color={'gray.500'} gap={1}>
                                    <Box><Text>Capgemini &nbsp; 3.9 </Text></Box>
                                    <Box><Text><BsStarFill /></Text></Box>

                                </Flex>
                            </Box>
                            <Box>
                                <Flex color={'gray.700'} gap={1}>
                                    <Box><Text><IoLocationOutline /></Text></Box>
                                    <Box><Text>Hybrid - Kolkata, Hyderabad</Text></Box>
                                </Flex>
                            </Box>
                            <Box>
                                <Flex color={'gray.700'} gap={1}>
                                    <Box><Text><BsFileEarmarkText /></Text></Box>
                                    <Box><Text>Knowledge of </Text></Box>
                                    <Box><Text> ASP.net developer must- plugin, WCF, SSRS</Text></Box>
                                </Flex>
                            </Box>

                            <Box>
                                <Flex>
                                    <Box m={1} px={3} backgroundColor={'blackAlpha.100'}><Text fontSize={'xs'}><button>JUST NOW</button></Text></Box>
                                    <Spacer/>
                                    <Box  m={1} px={3} backgroundColor={'blackAlpha.100'}><button><Text>Save</Text></button></Box>
                                </Flex>
                            </Box>
                        </Flex>
                    </Box>

                    <Box border={'1px solid gray'} m={2} p={4}>
                        <Flex flexDir={'column'} gap={1}>
                            <Box>
                                <Heading size={'sm'}> Microsoft Dynamics CRM Architect</Heading>
                            </Box>
                            <Box>
                                <Flex color={'gray.500'} gap={1}>
                                    <Box><Text>Capgemini &nbsp; 3.9 </Text></Box>
                                    <Box><Text><BsStarFill /></Text></Box>

                                </Flex>
                            </Box>
                            <Box>
                                <Flex color={'gray.700'} gap={1}>
                                    <Box><Text><IoLocationOutline /></Text></Box>
                                    <Box><Text>Hybrid - Kolkata, Hyderabad</Text></Box>
                                </Flex>
                            </Box>
                            <Box>
                                <Flex color={'gray.700'} gap={1}>
                                    <Box><Text><BsFileEarmarkText /></Text></Box>
                                    <Box><Text>Knowledge of </Text></Box>
                                    <Box><Text> ASP.net developer must- plugin, WCF, SSRS</Text></Box>
                                </Flex>
                            </Box>

                            <Box>
                                <Flex>
                                    <Box m={1} px={3} backgroundColor={'blackAlpha.100'}><Text fontSize={'xs'}>JUST NOW</Text></Box>
                                    <Spacer/>
                                    <Box  m={1} px={3} backgroundColor={'blackAlpha.100'}><Text>Save</Text></Box>
                                </Flex>
                            </Box>
                        </Flex>
                    </Box>

                    <Box border={'1px solid gray'} m={2} p={4}>
                        <Flex flexDir={'column'} gap={1}>
                            <Box>
                                <Heading size={'sm'}> Microsoft Dynamics CRM Architect</Heading>
                            </Box>
                            <Box>
                                <Flex color={'gray.500'} gap={1}>
                                    <Box><Text>Capgemini &nbsp; 3.9 </Text></Box>
                                    <Box><Text><BsStarFill /></Text></Box>

                                </Flex>
                            </Box>
                            <Box>
                                <Flex color={'gray.700'} gap={1}>
                                    <Box><Text><IoLocationOutline /></Text></Box>
                                    <Box><Text>Hybrid - Kolkata, Hyderabad</Text></Box>
                                </Flex>
                            </Box>
                            <Box>
                                <Flex color={'gray.700'} gap={1}>
                                    <Box><Text><BsFileEarmarkText /></Text></Box>
                                    <Box><Text>Knowledge of </Text></Box>
                                    <Box><Text> ASP.net developer must- plugin, WCF, SSRS</Text></Box>
                                </Flex>
                            </Box>

                            <Box>
                                <Flex>
                                    <Box m={1} px={3} backgroundColor={'blackAlpha.100'}><Text fontSize={'xs'}>JUST NOW</Text></Box>
                                    <Spacer/>
                                    <Box  m={1} px={3} backgroundColor={'blackAlpha.100'}><Text>Save</Text></Box>
                                </Flex>
                            </Box>
                        </Flex>
                    </Box>
                </Box>



                <Box width={'25%'} height={'100px'} border={'1px solid red'}>

                </Box>

            </Flex>
        </Box>
    )
}

export default JobsPage