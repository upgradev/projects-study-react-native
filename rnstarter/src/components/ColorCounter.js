import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const ColorCounter = ({color}) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button title={`Increase ${color}`} />
      <Button title={`Decrease ${color}`} />
    </View>
  );
};

export default ColorCounter;

const styles = StyleSheet.create({});
