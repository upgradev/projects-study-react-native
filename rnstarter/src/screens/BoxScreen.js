import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.parentStyle}>
      {/* <Text style={styles.textOneStyle}>Child 1</Text>
      <Text style={styles.textTwoStyle}>Child 2</Text>
      <Text style={styles.textThreeStyle}>Child 3</Text> */}
      <View style={styles.viewOnStyle} />
      <View style={styles.viewTwoParent}>
        <View style={styles.viewTwoStyle} />
      </View>
      <View style={styles.viewThreeStyle} />
    </View>
  );
};

export default BoxScreen;

const styles = StyleSheet.create({
  parentStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewOnStyle: {
    height: 50,
    width: 50,
    backgroundColor: 'red',
  },
  viewTwoStyle: {
    height: 50,
    width: 50,
    backgroundColor: 'green',
  },
  viewTwoParent: {
    height: 100,
    justifyContent: 'flex-end',
  },
  viewThreeStyle: {
    height: 50,
    width: 50,
    backgroundColor: 'purple',
  },
  //   viewStyle: {
  //     borderWidth: 3,
  //     borderColor: 'black',
  //     height: 200,

  //     // justifyContent: 'flex-end',
  //     // alignItems: "flex-end"
  //     // flexDirection: 'row',
  //   },
  //   textOneStyle: {
  //     borderWidth: 3,
  //     borderColor: 'red',
  //     // flex: 4
  //   },
  //   textTwoStyle: {
  //     borderWidth: 3,
  //     borderColor: 'red',
  //     fontSize: 18,
  //     ...StyleSheet.absoluteFillObject
  //   },
  //   textThreeStyle: {
  //     borderWidth: 3,
  //     borderColor: 'red',
  //   },
});
