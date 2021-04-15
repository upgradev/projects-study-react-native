import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Text} from 'react-native';
import AuthNavigator from './AuthNavigator';
import HomeNavigator from './HomeNavigator';
import DrawerNavigator from './DrawerNavigator';

const AppNavContainer = () => {
  const isLogger = true;

  return (
    <NavigationContainer>
      {isLogger ? <DrawerNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

//screens >> home Drawer
//screens >> Auth

export default AppNavContainer;
