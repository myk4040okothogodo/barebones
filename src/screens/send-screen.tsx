import React from 'react'
import { Box, Text, VStack, useColorModeValue, Center } from 'native-base'
import AnimatedColorBox from '../components/animated-color-box'
import NavBar from '../components/navbar'


const SendScreen = () => {
  return (
    <AnimatedColorBox
      flex={1}
      bg={useColorModeValue('warmGray.50', 'primary.900')}
      w = "full"
      >
      <NavBar />
      <Center
      px = {4}
      flex={1}
     >
    <VStack>
    <Box>
      <Text>Send Screen</Text>
    </Box>
    </VStack>
    </Center>
   </AnimatedColorBox>

  )
}



export default SendScreen

