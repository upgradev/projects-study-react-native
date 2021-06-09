import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SearchBar = () => {
  return (
    <View style={styles.background}>
        <Icon name="search" size={30} />
      <Text>Search Bar</Text>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#F0eeee',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
  },
});
