import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainScreen from './screens/main';
import AboutScreen from './screens/about-screen';
import HistoryScreen from './screens/transanction-history-screen';
import QRScreen   from './screens/qr-code-screen';
import SendScreen from './screens/send-screen';
import Sidebar from './components/sidebar';


const Drawer =  createDrawerNavigator()


const App = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Main"
      drawerContent={props => <Sidebar {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: 'back',
        overlayColor: 'blue.400',
    }}>
     <Drawer.Screen name="Main" component={MainScreen} />
     <Drawer.Screen name="About" component={AboutScreen} />
     <Drawer.Screen name="Transanctions" component={HistoryScreen} />
     <Drawer.Screen name="QRCode" component={QRScreen} />
     <Drawer.Screen name="Send" component={SendScreen} />
    </Drawer.Navigator>
  )

}


export default App
