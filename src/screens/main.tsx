import * as React from 'react';
import { Text, Box, Center, VStack, themeTools, useTheme, useColorMode, useColorModeValue } from 'native-base';
import ThemeToggle from '../components/theme-toggle';
import Masthead from '../components/masthead';
import NavBar from '../components/navbar';
import Actions from '../components/actions';
import {AntDesign} from '@expo/vector-icons';
import AnimatedColorBox from '../components/animated-color-box';

export default function MainScreen() {
  
  return (
    <AnimatedColorBox
      flex={1}
      bg={useColorModeValue('warmGray.50', 'primary.900')}
      w = "full"
      >
        <Masthead
          title=""
          image ={require('../assets/green4.jpg')}
        >
            <NavBar />
          </Masthead>
      <VStack
        flex={1}
        space={1}
        bg = {useColorModeValue('warmGray.50', 'primary.900')}
        mt="-30px"
        borderTopLeftRadius="40px"
        borderTopRightRadius="40px"
        pt="60px"
        >
	</VStack>	
      <Actions />
    </AnimatedColorBox>
  )
}

