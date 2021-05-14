import React, { useContext } from 'react';
import {Text, StatusBar, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';
import { GlobalContext } from '../context/Provider';

const AppNavContainer = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

 

  const {authState: { isLoggedIn}} = useContext(GlobalContext);
  
   console.log("state: ", isLoggedIn);

  return (
    <NavigationContainer>
      <StatusBar
        barStyle={backgroundStyle ? 'light-content' : 'dark-content'}
      />
      {isLoggedIn ? <DrawerNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavContainer;
