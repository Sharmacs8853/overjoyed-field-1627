import React from 'react'
import { Box, Button, Flex, Grid, GridItem, Heading, Img, Text } from '@chakra-ui/react'
import "./PrepareInterview.css"

const PrepareInterview = () => {
  return (
    <Box className='inertview-div'>
      <Box className='inertview-div-inner'>
        <Flex gap={'10px'}>
          <Box width={'25%'}>
            <Flex gap={5} flexDirection={'column'}>
              <Box>
                <Box w={'150px'}><Text px={'15px'} py={'5px'} border={'1px solid'} borderRadius={'5px'} borderColor={'blue.300'} color={'blue.400'}>by AmbitionBox</Text></Box>
              </Box>
              <Box>
                <Heading size={'lg'}>Prepare for Your Next inertview</Heading>
              </Box>
              <Box width={'250px'} height={'250px'}>
                <Img sizes='100%' src='https://static.naukimg.com/s/0/0/i/ab-interview.png' />
              </Box>
            </Flex>
          </Box>

          <Box width={'45%'}>
            <Flex flexDirection={'column'} gap={'15px'} className='rroundborder' alignItems={'center'} pt={'10px'}>
              <Box><Heading size={'md'} py={'15px'} color={'gray.700'}>Interview Questions by company</Heading></Box>
              <Box>
                <Grid templateColumns='repeat(2, 1fr)' gap={6}>

                  <GridItem className='grid-box' px={'15px'} py={'5px'}>
                    <Flex gap={'5px'}>
                      <Box><Img h={'40px'} w={'40px'} src='https://static.naukimg.com/s/0/0/i/ambitionbox-comp/cognizant.png' /></Box>
                      <Box>
                        <Flex flexDirection={'column'}>
                          <Text>
                            <Flex>
                              <Text fontSize={'md'} color={'gray.700'} fontWeight={'semibold'}>Cognizant</Text>
                              <Text><i class="fa-solid fa-chevron-right"></i> </Text>
                            </Flex>
                          </Text>
                          <Text>1.6K+ interviews</Text>
                        </Flex>
                      </Box>
                    </Flex>
                  </GridItem>

                  <GridItem className='grid-box' px={'15px'} py={'5px'}>
                    <Flex gap={'5px'}>
                      <Box><Img h={'40px'} w={'40px'} src='https://static.naukimg.com/s/0/0/i/ambitionbox-comp/cognizant.png' /></Box>
                      <Box>
                        <Flex flexDirection={'column'}>
                          <Text>
                            <Flex>
                              <Text fontSize={'md'} color={'gray.700'} fontWeight={'semibold'}>Cognizant</Text>
                              <Text><i class="fa-solid fa-chevron-right"></i> </Text>
                            </Flex>
                          </Text>
                          <Text>1.6K+ interviews</Text>
                        </Flex>
                      </Box>
                    </Flex>
                  </GridItem>

                  <GridItem className='grid-box' px={'15px'} py={'5px'}>
                    <Flex gap={'5px'}>
                      <Box><Img h={'40px'} w={'40px'} src='https://static.naukimg.com/s/0/0/i/ambitionbox-comp/cognizant.png' /></Box>
                      <Box>
                        <Flex flexDirection={'column'}>
                          <Text>
                            <Flex>
                              <Text fontSize={'md'} color={'gray.700'} fontWeight={'semibold'}>Cognizant</Text>
                              <Text><i class="fa-solid fa-chevron-right"></i> </Text>
                            </Flex>
                          </Text>
                          <Text>1.6K+ interviews</Text>
                        </Flex>
                      </Box>
                    </Flex>
                  </GridItem>

                  <GridItem className='grid-box' px={'15px'} py={'5px'}>
                    <Flex gap={'5px'}>
                      <Box><Img h={'40px'} w={'40px'} src='https://static.naukimg.com/s/0/0/i/ambitionbox-comp/cognizant.png' /></Box>
                      <Box>
                        <Flex flexDirection={'column'}>
                          <Text>
                            <Flex>
                              <Text fontSize={'md'} color={'gray.700'} fontWeight={'semibold'}>Cognizant</Text>
                              <Text><i class="fa-solid fa-chevron-right"></i> </Text>
                            </Flex>
                          </Text>
                          <Text>1.6K+ interviews</Text>
                        </Flex>
                      </Box>
                    </Flex>
                  </GridItem>

                  <GridItem className='grid-box' px={'15px'} py={'5px'}>
                    <Flex gap={'5px'}>
                      <Box><Img h={'40px'} w={'40px'} src='https://static.naukimg.com/s/0/0/i/ambitionbox-comp/cognizant.png' /></Box>
                      <Box>
                        <Flex flexDirection={'column'}>
                          <Text>
                            <Flex>
                              <Text fontSize={'md'} color={'gray.700'} fontWeight={'semibold'}>Cognizant</Text>
                              <Text><i class="fa-solid fa-chevron-right"></i> </Text>
                            </Flex>
                          </Text>
                          <Text>1.6K+ interviews</Text>
                        </Flex>
                      </Box>
                    </Flex>
                  </GridItem>

                  <GridItem className='grid-box' px={'15px'} py={'5px'}>
                    <Flex gap={'5px'}>
                      <Box><Img h={'40px'} w={'40px'} src='https://static.naukimg.com/s/0/0/i/ambitionbox-comp/cognizant.png' /></Box>
                      <Box>
                        <Flex flexDirection={'column'}>
                          <Text>
                            <Flex>
                              <Text fontSize={'md'} color={'gray.700'} fontWeight={'semibold'}>Cognizant</Text>
                              <Text><i class="fa-solid fa-chevron-right"></i> </Text>
                            </Flex>
                          </Text>
                          <Text>1.6K+ interviews</Text>
                        </Flex>
                      </Box>
                    </Flex>
                  </GridItem>


                </Grid>
              </Box>
              <Box>
                <Box textAlign={'center'} my={'30px'}>
                  <Button variant='outline' size={'lg'} colorScheme='linkedin' borderRadius={'20px'}>View All Companies</Button>
                </Box></Box>
            </Flex>
          </Box>

          <Box py={5} className='rroundborder' px={'20px'}>
            <Flex flexDirection={'column'} gap={'13px'}>
              <Box>
                <Heading size={'md'} mb={'10px'}>inertview Questions by role</Heading>
              </Box>
              <Box borderBottom={'1px solid'} borderColor={'gray.300'} pb={'5px'}>
                <Text fontSize={'sm'} color={'gray.500'}>Software Engineer (7.2K+ questions)</Text>
              </Box>
              
              <Box borderBottom={'1px solid'} borderColor={'gray.300'} pb={'5px'}>
                <Text fontSize={'sm'} color={'gray.500'}>Software Engineer (7.2K+ questions)</Text>
              </Box>

              <Box borderBottom={'1px solid'} borderColor={'gray.300'} pb={'5px'}>
                <Text fontSize={'sm'} color={'gray.500'}>Software Engineer (7.2K+ questions)</Text>
              </Box>

              <Box borderBottom={'1px solid'} borderColor={'gray.300'} pb={'5px'}>
                <Text fontSize={'sm'} color={'gray.500'}>Software Engineer (7.2K+ questions)</Text>
              </Box>

              <Box borderBottom={'1px solid'} borderColor={'gray.300'} pb={'5px'}>
                <Text fontSize={'sm'} color={'gray.500'}>Software Engineer (7.2K+ questions)</Text>
              </Box>

              <Box borderBottom={'1px solid'} borderColor={'gray.300'} pb={'5px'}>
                <Text fontSize={'sm'} color={'gray.500'}>Software Engineer (7.2K+ questions)</Text>
              </Box>
              <Box>
                <Box textAlign={'center'} my={'30px'}>
                  <Button variant='outline' size={'md'} colorScheme='linkedin' borderRadius={'20px'}>View All Roles</Button>
                </Box>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}

export default PrepareInterview