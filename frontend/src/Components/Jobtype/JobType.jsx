import { Box, Flex, Img, Text } from '@chakra-ui/react'
import React from 'react'
import './JobType.css'

const JobType = () => {
    return (
        <Box className='jobtype-div'>
            <Box className='jobtype-inner-div'>
                <Box className='jobtype-inner-div2'>
                    <Flex flexDirection={'column'} gap={'15px'}>
                        <Box>
                            <Flex justifyContent={'space-evenly'}>
                                <Box>
                                    <Flex className='job-cart' px={'20px'} py={'10px'} gap={'5px'} alignItems={'center'}>
                                        <Box><Img height={'40px'} width={'40px'} src='https://static.naukimg.com/s/0/0/i/trending-naukri/remote.svg' /></Box>
                                        <Box><Text fontWeight={600} color={'gray.700'}>Remote</Text></Box>
                                        <Box><Text color={'gray.500'}><i className="fa-solid fa-chevron-right"></i></Text></Box>
                                    </Flex>
                                </Box>
                                <Box>
                                    <Flex className='job-cart' px={'20px'} py={'10px'} gap={'5px'} alignItems={'center'}>
                                        <Box><Img height={'40px'} width={'40px'} src='https://static.naukimg.com/s/0/0/i/trending-naukri/mnc.svg' /></Box>
                                        <Box><Text fontWeight={600} color={'gray.700'}>Remote</Text></Box>
                                        <Box><Text color={'gray.500'}><i className="fa-solid fa-chevron-right"></i></Text></Box>
                                    </Flex>
                                </Box>
                                <Box>
                                    <Flex className='job-cart' px={'20px'} py={'10px'} gap={'5px'} alignItems={'center'}>
                                        <Box><Img height={'40px'} width={'40px'} src='https://static.naukimg.com/s/0/0/i/trending-naukri/data-science.svg' /></Box>
                                        <Box><Text fontWeight={600} color={'gray.700'}>Remote</Text></Box>
                                        <Box><Text color={'gray.500'}><i className="fa-solid fa-chevron-right"></i></Text></Box>
                                    </Flex>
                                </Box>
                                <Box>
                                    <Flex className='job-cart' px={'20px'} py={'10px'} gap={'5px'} alignItems={'center'}>
                                        <Box><Img height={'40px'} width={'40px'} src='https://static.naukimg.com/s/0/0/i/trending-naukri/software.svg' /></Box>
                                        <Box><Text fontWeight={600} color={'gray.700'}>Remote</Text></Box>
                                        <Box><Text color={'gray.500'}><i className="fa-solid fa-chevron-right"></i></Text></Box>
                                    </Flex>
                                </Box>
                                <Box>
                                    <Flex className='job-cart' px={'20px'} py={'10px'} gap={'5px'} alignItems={'center'}>
                                        <Box><Img height={'40px'} width={'40px'} src='https://static.naukimg.com/s/0/0/i/trending-naukri/fortune-500.svg' /></Box>
                                        <Box><Text fontWeight={600} color={'gray.700'}>Remote</Text></Box>
                                        <Box><Text color={'gray.500'}><i className="fa-solid fa-chevron-right"></i></Text></Box>
                                    </Flex>
                                </Box>
                                <Box>
                                    <Flex className='job-cart' px={'20px'} py={'10px'} gap={'5px'} alignItems={'center'}>
                                        <Box><Img height={'40px'} width={'40px'} src='https://static.naukimg.com/s/0/0/i/trending-naukri/freshers.svg' /></Box>
                                        <Box><Text fontWeight={600} color={'gray.700'}>Remote</Text></Box>
                                        <Box><Text color={'gray.500'}><i className="fa-solid fa-chevron-right"></i></Text></Box>
                                    </Flex>
                                </Box>
                            </Flex>
                        </Box>
                        <Box>
                            <Flex justifyContent={'space-evenly'}>
                                <Box>
                                    <Flex className='job-cart' px={'20px'} py={'10px'} gap={'5px'} alignItems={'center'}>
                                        <Box><Img height={'40px'} width={'40px'} src='https://static.naukimg.com/s/0/0/i/trending-naukri/analytics.svg' /></Box>
                                        <Box><Text fontWeight={600} color={'gray.700'}>Remote</Text></Box>
                                        <Box><Text color={'gray.500'}><i className="fa-solid fa-chevron-right"></i></Text></Box>
                                    </Flex>
                                </Box>
                                <Box>
                                    <Flex className='job-cart' px={'20px'} py={'10px'} gap={'5px'} alignItems={'center'}>
                                        <Box><Img height={'40px'} width={'40px'} src='https://static.naukimg.com/s/0/0/i/trending-naukri/project-management.svg' /></Box>
                                        <Box><Text fontWeight={600} color={'gray.700'}>Remote</Text></Box>
                                        <Box><Text color={'gray.500'}><i className="fa-solid fa-chevron-right"></i></Text></Box>
                                    </Flex>
                                </Box>
                                <Box>
                                    <Flex className='job-cart' px={'20px'} py={'10px'} gap={'5px'} alignItems={'center'}>
                                        <Box><Img height={'40px'} width={'40px'} src='https://static.naukimg.com/s/0/0/i/trending-naukri/supplychain.svg' /></Box>
                                        <Box><Text fontWeight={600} color={'gray.700'}>Remote</Text></Box>
                                        <Box><Text color={'gray.500'}><i className="fa-solid fa-chevron-right"></i></Text></Box>
                                    </Flex>
                                </Box>
                                <Box>
                                    <Flex className='job-cart' px={'20px'} py={'10px'} gap={'5px'} alignItems={'center'}>
                                        <Box><Img height={'40px'} width={'40px'} src='https://static.naukimg.com/s/0/0/i/trending-naukri/finance.svg' /></Box>
                                        <Box><Text fontWeight={600} color={'gray.700'}>Remote</Text></Box>
                                        <Box><Text color={'gray.500'}><i className="fa-solid fa-chevron-right"></i></Text></Box>
                                    </Flex>
                                </Box>
                                <Box>
                                    <Flex className='job-cart' px={'20px'} py={'10px'} gap={'5px'} alignItems={'center'}>
                                        <Box><Img height={'40px'} width={'40px'} src='https://static.naukimg.com/s/0/0/i/trending-naukri/startup.svg' /></Box>
                                        <Box><Text fontWeight={600} color={'gray.700'}>Remote</Text></Box>
                                        <Box><Text color={'gray.500'}><i className="fa-solid fa-chevron-right"></i></Text></Box>
                                    </Flex>
                                </Box>
                            </Flex>
                        </Box>
                    </Flex>
                </Box>
            </Box>
        </Box>
    )
}

export default JobType