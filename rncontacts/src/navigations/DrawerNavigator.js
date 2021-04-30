import React, { useContext } from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeNavigator from './HomeNavigator';
import {HOME_NAVIGATOR} from '../constants/routeNames';
import Container from '../components/common/Container';
import {Image, SafeAreaView, View} from 'react-native';
import SideMenu from './SideMenu';
import { GlobalContext } from '../context/Provider';

const getDrawerContent = (navigation,authDispatch) => {
  return <SideMenu navigation={navigation} authDispatch={authDispatch} />;
};

const DrawerNavigator = () => {
  const DrawerStack = createDrawerNavigator();
  const {authDispatch} = useContext(GlobalContext);
  return (
    <DrawerStack.Navigator
      drawerType="slide"
      drawerContent={({navigation}) =>
        getDrawerContent(navigation, authDispatch)
      }>
      <DrawerStack.Screen name={HOME_NAVIGATOR} component={HomeNavigator} />
    </DrawerStack.Navigator>
  );
};

export default DrawerNavigator;
