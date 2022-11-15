import { Box, Button, Flex, Heading, Input, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import './Dreamjob.css'

const Dreamjob = () => {
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
                                <Input variant='unstyled' width={'300px'} px={'10px'} placeholder='Enter skills/ designations / Companies' type='text' />
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

        </Box>
    )
}

export default Dreamjob