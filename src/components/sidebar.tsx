import React, { useCallback } from 'react'
import {
    HStack,
    VStack,
    Center,
    Avatar,
    Heading,
    IconButton,
    useColorModeValue,
    usePropsResolution
} from 'native-base'
import { DrawerContentComponentProps } from '@react-navigation/drawer'
import AnimatedColorBox from './animated-color-box'
import ThemeToggle from './theme-toggle'
import {Feather} from '@expo/vector-icons'
import MenuButton from './menu-button'
import { State } from 'react-native-gesture-handler'

const Sidebar = (props: DrawerContentComponentProps) => {
    const {state, navigation } = props
    const currentRoute = state.routeNames[state.index]

    const handlePressBackButton = useCallback(() => {
        navigation.closeDrawer()
    }, [navigation])

    const handlePressMenuMain = useCallback(() => {
        navigation.navigate('Main')
    }, [navigation])

    const handlePressMenuAbout = useCallback(() => {
        navigation.navigate('About')
    }, [navigation])
    const handlePressHistory  = useCallback(() => {
    navigation.navigate('Transanctions')
    },[navigation])
    const handlePressQR  = useCallback(() => {
    navigation.navigate('QRCode')
    },[navigation])
    const handlePressSend  = useCallback(() => {
    navigation.navigate('Send')
    },[navigation])



    return (
        <AnimatedColorBox
          safeArea
          flex={1}
          bg = {useColorModeValue('blue.50', 'darkBlue.800')}
          p={7}
          >
            <VStack flex={1} space={2}>
                <HStack justifyContent='flex-end'>
                    <IconButton
                      onPress={handlePressBackButton}
                      borderRadius={80}
                      variant='outline'
                      borderColor={useColorModeValue('blue.300', 'darkBlue.700')}
                      _icon = {{
                        as: Feather,
                        name: 'chevron-left',
                        size: 6,
                        color: useColorModeValue('blue.800', 'darkBlue.700')
                      }}
                    />
                    </HStack>
                    <Avatar
                      //source={require('../assets/profile-image.jpg')}
                      size = 'xl'
                      borderRadius={100}
                      mb={6}
                      borderColor="secondary.500"
                      borderWidth={3}
                      />
                      <Heading mb={4} size="lg">
                        John Doe
                      </Heading>
                      <MenuButton
                        active = {currentRoute === 'Main'}
                        onPress={handlePressMenuMain}
                        icon="home"
                        >
                            Home
                      </MenuButton>
		      <MenuButton
                        active={currentRoute === 'Send'}
                        onPress={handlePressSend}
                        icon = "send"
                        >
                        Send
                      </MenuButton>
		      <MenuButton
                        active={currentRoute === 'QRCode'}
                        onPress={handlePressQR}
                        icon = "qrcode"
                        >
                        ScanQR
                      </MenuButton>
		       <MenuButton
                        active={currentRoute === 'Transanctions'}
                        onPress={handlePressHistory}
                        icon = "history"
                        >
                        History
                      </MenuButton>
		       <MenuButton
                        active={currentRoute === 'About'}
                        onPress={handlePressMenuAbout}
                        icon = "info-circle"
                      >
                        About
                      </MenuButton>

            </VStack>
            <Center>
                <ThemeToggle />
            </Center>
          </AnimatedColorBox>
    )
}

export default Sidebar

