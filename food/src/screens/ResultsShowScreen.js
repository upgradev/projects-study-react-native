import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({route, navigation}) => {
  const [result, setResult] = useState({});

  const {id} = route.params;

  const getResult = async id => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    // id route
    getResult(id);
  }, []);

  if(!result){
    return null
  }

  return (
    <View>
      <Text> {result.name} </Text>
    </View>
  );
};

export default ResultsShowScreen;

const styles = StyleSheet.create({});
