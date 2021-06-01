import React, {useState, useReducer} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {...state, count: state.count + action.payload};
    case 'decrement':
      return {...state, count: state.count - action.payload};
    default:
      return state;
  }
};

const CounterScreen = () => {
  // const [counter, setCounter] = useState(0);

  const [state, dispatch] = useReducer(reducer, {count: 0});

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          // setCounter(counter + 1);
          dispatch({type: "increment", payload: 1})
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          // setCounter(counter - 1);
          dispatch({type: "decrement", payload: 1})
        }}
      />
      <Text>
        Current count:
        {/* {counter} */}
        {state.count}
      </Text>
    </View>
  );
};

export default CounterScreen;

const styles = StyleSheet.create({});
