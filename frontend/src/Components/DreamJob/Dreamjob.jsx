import { Box, Button, Flex, Heading, Input, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import './Dreamjob.css'

const Dreamjob = () => {
    return (
        <Box className='job-div'>
            <Box className='inner-job-div'>
                <Heading>Find your dream job now</Heading>
                <Text color={'gray.500'}>5 lakh+ jobs for you to explore</Text>
                <Box className='search-div'>
                    <Box alignItems={'center'}>
                        <Flex gap={'10px'}>
                            <Box p={'3px'} color={'gray.500'}>
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </Box>
                            <Box p={'3px'} borderLeft={'1px solid'} borderColor={'gray.300'}>
                                <Input variant='unstyled' width={'300px'} px={'10px'} placeholder='Enter skills/ designations / Companies' type='text' />
                            </Box>
                            <Box borderLeft={'1px solid'} borderColor={'gray.300'}>
                                <Input variant='unstyled' px={'10px'} placeholder='Select experience' type='text' />
                            </Box>
                            <Box borderLeft={'1px solid'} borderColor={'gray.300'}>
                                <Input variant='unstyled' px={'10px'} placeholder='Enter location' type='text' />
                            </Box>
                            <Spacer/>
                            <Box>
                                <Button colorScheme='linkedin' borderRadius={'20px'} px={"25px"}><Text fontSize={'lg'}>Search</Text></Button>
                            </Box>
                        </Flex>
                    </Box>
                </Box>
            </Box>

        </Box>
    )
}

export default Dreamjob