import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

const TextScreen = () => {
  return (
    <View>
      <TextInput style={styles.input} />
    </View>
  );
};

export default TextScreen;

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
  },
});
