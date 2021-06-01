import React from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        onPress={() => navigation.navigate('Component Screen')}
        title="Go to component"
      />

      <Button
        title="Go to list demo"
        onPress={() => navigation.navigate('List Screen')}
      />

      <Button
        title="Go to Image"
        onPress={() => navigation.navigate('Image Screen')}
      />

      <Button
        title="Go to Counter Screen"
        onPress={() => navigation.navigate('Counter Screen')}
      />

      <Button
        title="Go to Color Screen"
        onPress={() => navigation.navigate('Color')}
      />

      <Button
        title="Go to Square Screen"
        onPress={() => navigation.navigate('Square')}
      />
      <Button
        title="Go to Text Screen"
        onPress={() => navigation.navigate('Text')}
      />

      {/* <TouchableOpacity onPress={() => navigation.navigate('List Screen')}>
        <Text>Go to list Demo</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
