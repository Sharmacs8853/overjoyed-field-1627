import { Box, Flex, Heading, Img, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import './TopCompany.css'

const TopCompany = () => {
    return (
        <Box className='cmp-div'>
            <Box className='cmp-div-inner'>
                <Box>
                    <Heading size={'lg'} my={'10px'} color={'gray.700'} textAlign={'center'}>Top companies hiring now</Heading>
                </Box>
                <Box mt={'10px'}>
                    <Flex overflowX={'scroll'} >
                        <Link to='/user/job' >
                            <Box minWidth={'250px'}>
                                <Box className='job-cart' m={'10px'} p={'10px'}>
                                    <Flex gap={'5px'}>
                                        <Text color={'gray.800'} >MNCs </Text>
                                        <Text color={'gray.500'}><i className="fa-solid fa-chevron-right"></i></Text>
                                    </Flex>
                                    <Text color={'gray.500'}>1.3K+ are actively hiring</Text>
                                    <Box>
                                        <Flex margin={'10px'} gap={'5px'}>
                                            <Box className='img-icon'><Img h={'50px'} w={'50px'} src='https://img.naukimg.com/logo_images/groups/v1/5240540.gif' /></Box>
                                            <Box className='img-icon'><Img h={'50px'} w={'50px'} src='https://img.naukimg.com/logo_images/groups/v1/7126.gif' /></Box>
                                            <Box className='img-icon'><Img h={'50px'} w={'50px'} src='https://img.naukimg.com/logo_images/groups/v1/4577769.gif' /></Box>
                                            <Box className='img-icon'><Img h={'50px'} w={'50px'} src='https://img.naukimg.com/logo_images/groups/v1/943008.gif' /></Box>
                                        </Flex>
                                    </Box>
                                </Box>
                            </Box>
                        </Link>
                        <Link to='/user/job' >
                            <Box minWidth={'250px'}>
                                <Box className='job-cart' m={'10px'} p={'10px'}>
                                    <Flex gap={'5px'}>
                                        <Text color={'gray.800'} >MNCs </Text>
                                        <Text color={'gray.500'}><i className="fa-solid fa-chevron-right"></i></Text>
                                    </Flex>
                                    <Text color={'gray.500'}>1.3K+ are actively hiring</Text>
                                    <Box>
                                        <Flex margin={'10px'} gap={'5px'}>
                                            <Box className='img-icon'><Img h={'50px'} w={'50px'} src='https://img.naukimg.com/logo_images/groups/v1/5240540.gif' /></Box>
                                            <Box className='img-icon'><Img h={'50px'} w={'50px'} src='https://img.naukimg.com/logo_images/groups/v1/7126.gif' /></Box>
                                            <Box className='img-icon'><Img h={'50px'} w={'50px'} src='https://img.naukimg.com/logo_images/groups/v1/4577769.gif' /></Box>
                                            <Box className='img-icon'><Img h={'50px'} w={'50px'} src='https://img.naukimg.com/logo_images/groups/v1/943008.gif' /></Box>
                                        </Flex>
                                    </Box>
                                </Box>
                            </Box>

                        </Link>
                        <Link to='/user/jobs' >
                            <Box minWidth={'250px'}>
                                <Box className='job-cart' m={'10px'} p={'10px'}>
                                    <Flex gap={'5px'}>
                                        <Text color={'gray.800'} >Product </Text>

                                        <Text color={'gray.500'}><i className="fa-solid fa-chevron-right"></i></Text>

                                      


                                    </Flex>
                                    <Text color={'gray.500'}>756 are actively hiring</Text>
                                    <Box>
                                        <Flex margin={'10px'} gap={'5px'}>
                                            <Box className='img-icon'><Img h={'50px'} w={'50px'} src='https://img.naukimg.com/logo_images/groups/v1/4576817.gif' /></Box>
                                            <Box className='img-icon'><Img h={'50px'} w={'50px'} src='https://img.naukimg.com/logo_images/groups/v1/4586889.gif' /></Box>
                                            <Box className='img-icon'><Img h={'50px'} w={'50px'} src='https://img.naukimg.com/logo_images/groups/v1/4577769.gif' /></Box>
                                            <Box className='img-icon'><Img h={'50px'} w={'50px'} src='https://img.naukimg.com/logo_images/groups/v1/4641675.gif' /></Box>
                                        </Flex>
                                    </Box>
                                </Box>
                            </Box>

                        </Link>
                        <Link to='/user/jobs' >
                            <Box minWidth={'250px'}>
                                <Box className='job-cart' m={'10px'} p={'10px'}>
                                    <Flex gap={'5px'}>
                                        <Text color={'gray.800'} >Banking  </Text>

                                        <Text color={'gray.500'}><i className="fa-solid fa-chevron-right"></i></Text>


                                    </Flex>
                                    <Text color={'gray.500'}>700 are actively hiring</Text>
                                    <Box>
                                        <Flex margin={'10px'} gap={'5px'}>
                                            <Box className='img-icon'><Img h={'50px'} w={'50px'} src='https://img.naukimg.com/logo_images/groups/v1/390292.gif' /></Box>
                                            <Box className='img-icon'><Img h={'50px'} w={'50px'} src='https://img.naukimg.com/logo_images/groups/v1/903038.gif' /></Box>
                                            <Box className='img-icon'><Img h={'50px'} w={'50px'} src='https://img.naukimg.com/logo_images/groups/v1/4577769.gif' /></Box>
                                            <Box className='img-icon'><Img h={'50px'} w={'50px'} src='https://img.naukimg.com/logo_images/groups/v1/676564.gif' /></Box>
                                        </Flex>
                                    </Box>
                                </Box>
                            </Box>

                        </Link>
                        <Link to='/user/jobs' >
                            <Box minWidth={'250px'}>
                                <Box className='job-cart' m={'10px'} p={'10px'}>
                                    <Flex gap={'5px'}>
                                        <Text color={'gray.800'} >Hospitality </Text>

                                        <Text color={'gray.500'}><i className="fa-solid fa-chevron-right"></i></Text>



                                    </Flex>
                                    <Text color={'gray.500'}>35 are actively hiring</Text>
                                    <Box>
                                        <Flex margin={'10px'} gap={'5px'}>
                                            <Box className='img-icon'><Img h={'50px'} w={'50px'} src='https://img.naukimg.com/logo_images/groups/v1/943918.gif' /></Box>
                                            <Box className='img-icon'><Img h={'50px'} w={'50px'} src='https://img.naukimg.com/logo_images/groups/v1/519740.gif' /></Box>
                                            <Box className='img-icon'><Img h={'50px'} w={'50px'} src='https://img.naukimg.com/logo_images/groups/v1/1027760.gif' /></Box>
                                            <Box className='img-icon'><Img h={'50px'} w={'50px'} src='https://img.naukimg.com/logo_images/groups/v1/492152.gif' /></Box>
                                        </Flex>
                                    </Box>
                                </Box>
                            </Box>

                        </Link>
                        <Link to='/user/jobs' >
                            <Box minWidth={'250px'}>
                                <Box className='job-cart' m={'10px'} p={'10px'}>
                                    <Flex gap={'5px'}>
                                        <Text color={'gray.800'} >Fintech </Text>

                               <Text color={'gray.500'}><i className="fa-solid fa-chevron-right"></i></Text>



                                    </Flex>
                                    <Text color={'gray.500'}>78+ are actively hiring</Text>
                                    <Box>
                                        <Flex margin={'10px'} gap={'5px'}>
                                            <Box className='img-icon'><Img h={'50px'} w={'50px'} src='https://img.naukimg.com/logo_images/groups/v1/4685055.gif' /></Box>
                                            <Box className='img-icon'><Img h={'50px'} w={'50px'} src='https://img.naukimg.com/logo_images/groups/v1/4677077.gif' /></Box>
                                            <Box className='img-icon'><Img h={'50px'} w={'50px'} src='https://img.naukimg.com/logo_images/groups/v1/4577769.gif' /></Box>
                                            <Box className='img-icon'><Img h={'50px'} w={'50px'} src='https://img.naukimg.com/logo_images/groups/v1/2872246.gif' /></Box>
                                        </Flex>
                                    </Box>
                                </Box>
                            </Box>
                        </Link>
                    </Flex>
                </Box>
            </Box>
        </Box>
    )
}

export default TopCompany