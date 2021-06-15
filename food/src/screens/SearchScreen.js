import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    //price == $ || $$ || $$$
    return results.filter(result => {
      return result.price === price
    })
  }

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
      <ResultsList results={filterResultsByPrice("$")} title="Coast Effective" />
      <ResultsList results={filterResultsByPrice("$$")} title="Bit Oricier" />
      <ResultsList results={filterResultsByPrice("$$$")} title="big Spender" />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
