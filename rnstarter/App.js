import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import ComponentScreen from './src/screens/ComponentScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        <Stack.Screen name="Component Screen" component={ComponentScreen}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React from 'react';
// import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

// import {Colors} from 'react-native/Libraries/NewAppScreen';
// import HomeScreen from './src/screens/HomeScreen';

// const App = () => {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         color={isDarkMode ? 'light-content' : 'dark-content'}
//       />
//       <HomeScreen />
//     </SafeAreaView>
//   );
// };

// export default App;
