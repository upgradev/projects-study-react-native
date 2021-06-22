import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
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

  if (!result) {
    return null;
  }

  return (
    <View>
      <Text> {result.name} </Text>
      <FlatList
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({item}) => {
          console.log(item);
          return <Image style={styles.image} source={{uri:item}} />;
        }}
      />
    </View>
  );
};

export default ResultsShowScreen;

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
  },
});
