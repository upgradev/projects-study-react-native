import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ComponentScreen = () => {
  const greeting = 'Hi there';

  return (
    <View>
      <Text style={styles.textStyle}>This is the component screen </Text>
      <Text>{greeting}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
  },
});

export default ComponentScreen;
