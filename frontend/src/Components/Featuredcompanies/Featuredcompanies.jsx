import React from 'react'
import { Box, Button, Flex, Heading, Img, Text } from '@chakra-ui/react'
import './Featuredcompanies.css'
import { Link } from 'react-router-dom'

const Featuredcompanies = () => {
    return (
        <Box className='fet-div'>
            <Box className='cmp-div-inner'>
                <Box>
                    <Heading size={'lg'} my={'10px'} color={'gray.700'} textAlign={'center'}>Featured companies actively hiring</Heading>
                </Box>
                <Box mt={'10px'}>
                    <Flex overflowX={'scroll'} >
                        <Link to='/user/jobs' >
                            <Box minWidth={'250px'}>
                                <Box className='job-cart' m={'10px'} p={'10px'}>
                                    <Flex flexDirection={'column'} gap={'10px'} alignItems={'center'} textAlign={'center'} py={'20px'}>
                                        <Box>
                                            <Img src='https://img.naukimg.com/logo_images/groups/v2/5462642.gif' />
                                        </Box>
                                        <Box p={'10px'} className='review'>
                                            <Text color={'gray.700'}>Kyndryl</Text>
                                            <Text color={'gray.500'}>4.1 | 770 reviews</Text>
                                        </Box>
                                        <Box>
                                            <Text p={'10px'} color={'gray.600'}>Trusted global solutions company</Text>
                                        </Box>
                                        <Box>
                                            <Button variant='outline' colorScheme='linkedin' borderRadius={'20px'}>View Jobs</Button>
                                        </Box>
                                    </Flex>
                                </Box>
                            </Box>
                        </Link>
                        <Link to='/user/jobs' >
                            <Box minWidth={'250px'}>
                                <Box className='job-cart' m={'10px'} p={'10px'}>
                                    <Flex flexDirection={'column'} gap={'10px'} alignItems={'center'} textAlign={'center'} py={'20px'}>
                                        <Box>
                                            <Img src='https://img.naukimg.com/logo_images/groups/v2/1186200.gif' />
                                        </Box>
                                        <Box p={'10px'} className='review'>
                                            <Text color={'gray.700'}>Virtusa</Text>
                                            <Text color={'gray.500'}>4.1 | 2.2K+ reviews</Text>
                                        </Box>
                                        <Box>
                                            <Text p={'10px'} color={'gray.600'}>IT Services solutions company</Text>
                                        </Box>
                                        <Box>
                                            <Button variant='outline' colorScheme='linkedin' borderRadius={'20px'}>View Jobs</Button>
                                        </Box>
                                    </Flex>
                                </Box>
                            </Box>
                        </Link>
                        <Link to='/user/jobs' >
                            <Box minWidth={'250px'}>
                                <Box className='job-cart' m={'10px'} p={'10px'}>
                                    <Flex flexDirection={'column'} gap={'10px'} alignItems={'center'} textAlign={'center'} py={'20px'}>
                                        <Box>
                                            <Img src='https://img.naukimg.com/logo_images/groups/v2/1744734.gif' />
                                        </Box>
                                        <Box p={'10px'} className='review'>
                                            <Text color={'gray.700'}>Luxof</Text>
                                            <Text color={'gray.500'}>4.3 | 345 reviews</Text>
                                        </Box>
                                        <Box>
                                            <Text p={'10px'} color={'gray.600'}>DXC Technology  company</Text>
                                        </Box>
                                        <Box>
                                            <Button variant='outline' colorScheme='linkedin' borderRadius={'20px'}>View Jobs</Button>
                                        </Box>
                                    </Flex>
                                </Box>
                            </Box>
                        </Link>
                        <Link to='/user/jobs' >
                            <Box minWidth={'250px'}>
                                <Box className='job-cart' m={'10px'} p={'10px'}>
                                    <Flex flexDirection={'column'} gap={'10px'} alignItems={'center'} textAlign={'center'} py={'20px'}>
                                        <Box>
                                            <Img src='https://img.naukimg.com/logo_images/groups/v2/42932.gif' />
                                        </Box>
                                        <Box p={'10px'} className='review'>
                                            <Text color={'gray.700'}>Genpact</Text>
                                            <Text color={'gray.500'}>4.0 | 11.6K+ reviews</Text>
                                        </Box>
                                        <Box>
                                            <Text p={'10px'} color={'gray.600'}> global professional services firm</Text>
                                        </Box>
                                        <Box>
                                            <Button variant='outline' colorScheme='linkedin' borderRadius={'20px'}>View Jobs</Button>
                                        </Box>
                                    </Flex>
                                </Box>
                            </Box>
                        </Link>
                        <Link to='/user/jobs' >
                            <Box minWidth={'250px'}>
                                <Box className='job-cart' m={'10px'} p={'10px'}>
                                    <Flex flexDirection={'column'} gap={'10px'} alignItems={'center'} textAlign={'center'} py={'20px'}>
                                        <Box>
                                            <Img src='https://img.naukimg.com/logo_images/groups/v2/398058.gif' />
                                        </Box>
                                        <Box p={'10px'} className='review'>
                                            <Text color={'gray.700'}>Amazon</Text>
                                            <Text color={'gray.500'}>4.3 | 18.6K+ reviews</Text>
                                        </Box>
                                        <Box>
                                            <Text p={'10px'} color={'gray.600'}>World largest internet company</Text>
                                        </Box>
                                        <Box>
                                            <Button variant='outline' colorScheme='linkedin' borderRadius={'20px'}>View Jobs</Button>
                                        </Box>
                                    </Flex>
                                </Box>
                            </Box>
                        </Link>
                        <Link to='/user/jobs' >
                            <Box minWidth={'250px'}>
                                <Box className='job-cart' m={'10px'} p={'10px'}>
                                    <Flex flexDirection={'column'} gap={'10px'} alignItems={'center'} textAlign={'center'} py={'20px'}>
                                        <Box>
                                            <Img src='https://img.naukimg.com/logo_images/groups/v2/1527726.gif' />
                                        </Box>
                                        <Box p={'10px'} className='review'>
                                            <Text color={'gray.700'}>Incedo</Text>
                                            <Text color={'gray.500'}>4.0 | 141+ reviews</Text>
                                        </Box>
                                        <Box>
                                            <Text p={'10px'} color={'gray.600'}>Trusted global solutions company</Text>
                                        </Box>
                                        <Box>
                                            <Button variant='outline' colorScheme='linkedin' borderRadius={'20px'}>View Jobs</Button>
                                        </Box>
                                    </Flex>
                                </Box>
                            </Box>
                        </Link>
                        <Link to='/user/jobs' >
                            <Box minWidth={'250px'}>
                                <Box className='job-cart' m={'10px'} p={'10px'}>
                                    <Flex flexDirection={'column'} gap={'10px'} alignItems={'center'} textAlign={'center'} py={'20px'}>
                                        <Box>
                                            <Img src='https://img.naukimg.com/logo_images/groups/v2/3835862.gif' />
                                        </Box>
                                        <Box p={'10px'} className='review'>
                                            <Text color={'gray.700'}>Persistent</Text>
                                            <Text color={'gray.500'}>4.1 | 1.6K+ reviews</Text>
                                        </Box>
                                        <Box>
                                            <Text p={'10px'} color={'gray.600'}>Trusted global solutions company</Text>
                                        </Box>
                                        <Box>
                                            <Button variant='outline' colorScheme='linkedin' borderRadius={'20px'}>View Jobs</Button>
                                        </Box>
                                    </Flex>
                                </Box>
                            </Box>
                        </Link>
                    </Flex>
                    <Box textAlign={'center'} my={'30px'}>
                        <Button variant='outline' size={'lg'} colorScheme='linkedin' borderRadius={'20px'}>View All Companies</Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Featuredcompanies