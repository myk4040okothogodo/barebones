import React from 'react';
import { Box,useColorModeValue, Text, VStack, Center } from 'native-base';
import AnimatedColorBox from '../components/animated-color-box'
import NavBar from '../components/navbar'



const AboutScreen = () => {
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
      <Text>About Screen</Text>
    </Box>
    </VStack>
    </Center>
   </AnimatedColorBox>

  )
}

export default AboutScreen;
