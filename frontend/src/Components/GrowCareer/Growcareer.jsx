import { Box, Flex, Heading, Img,Text} from '@chakra-ui/react'
import React from 'react'
import './Growcareer.css'

const Growcareer = () => {
  return (
    <Box className='growcareer-div'>
      <Box className='growcareer-div-inner'>
        <Flex gap={5}>
        {/* ========== */}
          <Box width={'25%'}>
            <Flex gap={5} flexDirection={'column'}>
              <Box>
                <Box w={'200px'}><Text px={'15px'} py={'5px'} border={'1px solid'} borderRadius={'5px'} borderColor={'blue.300'} color={'blue.400'}>by Naukri learning</Text></Box>
              </Box>
              <Box>
                <Heading size={'lg'}>Grow your career through learning</Heading>
              </Box>
              <Box width={'250px'} height={'250px'}>
                <Img sizes='100%' src='https://static.naukimg.com/s/0/0/i/learn-icon.svg' />
              </Box>
            </Flex>
          </Box>

          {/* ========== */}
          <Box width={'75%'}>
            <Flex overflowX={'scroll'} gap={5}>
              <Box p={5} minWidth={'300px'} className='rroundborder' my={5}>
                <Flex gap={3} flexDirection={'column'}>
                  <Box><Text fontSize={'md'} fontWeight={'600'} color={'gray.600'}>Data science</Text></Box>
                  <Box><Heading size={'md'}>Artificial intelligence</Heading></Box>
                  <Box><Text color={'gray.600'}>Learn in demand AI skill like Deep learning, NLP, Computer vision and more for career growth across different roles</Text></Box>
                  <Box>
                    <Flex mt={10} gap={5}>
                      <Box border={'1px solid'} borderColor={'gray.300'} borderRadius={'5px'} px={2} py={1}><Text color={'gray.600'}>600 courses</Text></Box>
                      <Box border={'1px solid'} borderColor={'gray.300'} borderRadius={'5px'} px={2} py={1}><Text color={'gray.600'}>28 Providers</Text></Box>
                    </Flex>
                  </Box>
                </Flex>
              </Box>
             
              <Box p={5} minWidth={'300px'} className='rroundborder' my={5}>
                <Flex gap={3} flexDirection={'column'}>
                  <Box><Text fontSize={'md'} fontWeight={'600'} color={'gray.600'}>Data science</Text></Box>
                  <Box><Heading size={'md'}>Artificial intelligence</Heading></Box>
                  <Box><Text color={'gray.600'}>Learn in demand AI skill like Deep learning, NLP, Computer vision and more for career growth across different roles</Text></Box>
                  <Box>
                    <Flex mt={10} gap={5}>
                      <Box border={'1px solid'} borderColor={'gray.300'} borderRadius={'5px'} px={2} py={1}><Text color={'gray.600'}>600 courses</Text></Box>
                      <Box border={'1px solid'} borderColor={'gray.300'} borderRadius={'5px'} px={2} py={1}><Text color={'gray.600'}>28 Providers</Text></Box>
                    </Flex>
                  </Box>
                </Flex>
              </Box>

              <Box p={5} minWidth={'300px'} className='rroundborder' my={5}>
                <Flex gap={3} flexDirection={'column'}>
                  <Box><Text fontSize={'md'} fontWeight={'600'} color={'gray.600'}>Data science</Text></Box>
                  <Box><Heading size={'md'}>Artificial intelligence</Heading></Box>
                  <Box><Text color={'gray.600'}>Learn in demand AI skill like Deep learning, NLP, Computer vision and more for career growth across different roles</Text></Box>
                  <Box>
                    <Flex mt={10} gap={5}>
                      <Box border={'1px solid'} borderColor={'gray.300'} borderRadius={'5px'} px={2} py={1}><Text color={'gray.600'}>600 courses</Text></Box>
                      <Box border={'1px solid'} borderColor={'gray.300'} borderRadius={'5px'} px={2} py={1}><Text color={'gray.600'}>28 Providers</Text></Box>
                    </Flex>
                  </Box>
                </Flex>
              </Box>

              <Box p={5} minWidth={'300px'} className='rroundborder' my={5}>
                <Flex gap={3} flexDirection={'column'}>
                  <Box><Text fontSize={'md'} fontWeight={'600'} color={'gray.600'}>Data science</Text></Box>
                  <Box><Heading size={'md'}>Artificial intelligence</Heading></Box>
                  <Box><Text color={'gray.600'}>Learn in demand AI skill like Deep learning, NLP, Computer vision and more for career growth across different roles</Text></Box>
                  <Box>
                    <Flex mt={10} gap={5}>
                      <Box border={'1px solid'} borderColor={'gray.300'} borderRadius={'5px'} px={2} py={1}><Text color={'gray.600'}>600 courses</Text></Box>
                      <Box border={'1px solid'} borderColor={'gray.300'} borderRadius={'5px'} px={2} py={1}><Text color={'gray.600'}>28 Providers</Text></Box>
                    </Flex>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}

export default Growcareer