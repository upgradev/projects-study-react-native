import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SearchScreen from './src/screens/SearchScreen';
import {ScrollView, SafeAreaView} from 'react-native';
import HeaderScrollView from 'react-native-header-scroll-view';
import ResultsShowScreen from './src/screens/ResultsShowScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Search"
        screenOptions={{
          title: 'Business Search',
          headerTitleAlign: 'center',
        }}>
          <Stack.Screen name="Search" component={SearchScreen} />
          <Stack.Screen name="ResultsShowScreen" component={ResultsShowScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
