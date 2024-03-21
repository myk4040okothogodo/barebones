import React, { useCallback, useState } from 'react'
import {StyleSheet, Pressable} from 'react-native'
import { MotiView, AnimatePresence, View} from 'moti'
import { useColorModeValue } from 'native-base'
import {
    Ionicons,
    FontAwesome,
    MaterialCommunityIcons,
    Feather,
    Entypo
} from '@expo/vector-icons'
import { color } from 'native-base/lib/typescript/theme/styled-system'
import { exp } from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/native'



//some actions to map over

    //Actions including the trigger button
    const Actions = (props: DrawerContentComponentProps) => {

      
      const navigation  = useNavigation()
      

      const handlePressHistory = useCallback(() => {
        navigation.navigate('Transanctions')
      }, [navigation])


      const handlePressSend = useCallback(() => {
        navigation.navigate('Send')
      }, [navigation])

      const handlePressQR = useCallback(() => {
        navigation.navigate('QRCode')
      }, [navigation])


     const handlePressAbout = useCallback(() => {
        navigation.navigate('About')
      }, [navigation])

      const actions = [

        {
          title: 'Home',
          icon: <FontAwesome name='home' size={24} color= {useColorModeValue('white' , 'black')} />,
          color: '#C2B5A8',
          onPress: () => {},
        },
        {
            title: 'Send',
            icon: <FontAwesome name='send' size={24} color={useColorModeValue('white' , 'black')}/>,
            color: '#ff9500',
            onPress: handlePressSend,
        },
        {
            title: 'Receive',
            icon: <MaterialCommunityIcons name='qrcode-scan' size={24} color= {useColorModeValue('white' , 'black')} />,
            color: '#5856d6',
            onPress: handlePressQR,
        },
        {
            title: 'History',
            icon: <Feather name='clock' size={24} color={useColorModeValue('white' , 'black')} />,
            color: '#34c759',
            onPress: handlePressHistory,
        },
    ]
      const [expanded, setExpanded] = useState(false);

      return (
         <>

          <Pressable
            onPress={() => setExpanded(!expanded)}
            style = {[styles.button, {backgroundColor: '#007bff'} ]}>
            <Entypo name= {expanded ? 'arrow-down': 'dots-three-vertical'} size={24} color= {useColorModeValue('white' , 'black')}  />
          </Pressable>
          <AnimatePresence>
            {expanded && (
                <>
                  {actions.map((action, i) => (
                    <Action key={i} action={action} index={i}   />
                  ))}
                </>
            )}
          </AnimatePresence>
        </>
      );
    }


// A pressable that animates in and out

const Action = ({ navigation, onPress, action, index}: any) => (
    <MotiView
      transition={{ delay: index * 100, damping: 17 }}
      from = {{
        opacity: 0,
        translateY: 0,
      }}
      animate = {{
        opacity: 1,
        translateY: -60 * (index + 1),
        marginTop:0,
      }}
      exit = {{
        opacity: 0,
        translateY: 0,
      }}>
       <Pressable
          onPress={action.onPress}
          style = {[
            styles.button,
            {
                backgroundColor: action.color,
                shadowColor: action.color,
            },
          ]}
          >
          {action.icon}
        </Pressable>
      </MotiView>
    );

    export default Actions


    const styles = StyleSheet.create({
        button: {
            borderRadius: 100,
            width: 70,
            height: 70,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            bottom: 45,
            right: 20,
            shadowOffset: { width: 0, height: 2},
            shadowOpacity: 0.3,
            shadowRadius: 3,
            zIndex: 1,
        },
    });

