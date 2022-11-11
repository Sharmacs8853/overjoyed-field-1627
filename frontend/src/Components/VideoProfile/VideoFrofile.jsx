import { Box, Button, Flex, Heading, Img, Input, Text } from '@chakra-ui/react'
import React from 'react'
import './VideoFrofile.css'

const VideoFrofile = () => {
    return (
        <Box className='frofile-div'>
            <Box className='frofile-div-inner'>
                <Flex>
                    <Box>
                        <Flex flexDirection={'column'}>
                            <Box><Heading px={'10px'} color={'gray.700'} size={'lg'}>Stand out among recruiters with a video profile</Heading></Box>
                            <Box>
                                <Flex gap={'20px'}>
                                    <Box>
                                        <Flex gap={'10px'} flexDirection={'column'}>
                                            <Box><Text px={'10px'} color={'gray.500'}>Available for both Android and iOS apps</Text></Box>
                                            <Box>
                                                <Flex border={'1px solid'} borderColor={'blue.100'} borderRadius={'25px'}>
                                                    <Box><Input m={'5px'} p={'5px'} variant={'unstyled'} type='text' /></Box>
                                                    <Box><Button colorScheme='linkedin' borderRadius={'20px'} m={'5px'}>Search</Button></Box>
                                                </Flex>
                                            </Box>
                                            <Box>
                                                <Flex gap={'5px'}>
                                                    <Box><Img src='https://static.naukimg.com/s/0/0/i/download-app-link/Gplay.png' /></Box>
                                                    <Box><Img src='https://static.naukimg.com/s/0/0/i/download-app-link/Appstore.png' /></Box>
                                                </Flex>
                                            </Box>
                                        </Flex>
                                    </Box>
                                    <Box>
                                        <Img h={'100px'} w={'100px'} src='https://static.naukimg.com/s/0/0/i/download-app-link/qr-code.svg' />
                                    </Box>
                                </Flex>
                            </Box>
                        </Flex>
                    </Box>
                    <Box mx={'20px'} height={'100%'}>
                        <Img  height={'100%'} src='https://static.naukimg.com/s/0/0/i/download-app-link/MaskGroup_v4.png' />
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
}

export default VideoFrofile