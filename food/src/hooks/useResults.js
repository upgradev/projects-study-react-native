import React, {Component, useEffect, useState} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async searchTerm => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'são paulo',
        },
      });
      setErrorMessage('');
      setResults(response.data.businesses);
    } catch (err) {
      setResults([]);
      setErrorMessage('Something went wrong');
    }
  };

  //call searchApi when component is first render
  // searchApi("pasta"); bad code

  useEffect(() => {
    searchApi('pasta');
  }, []);

  return [searchApi, results, errorMessage];
};
