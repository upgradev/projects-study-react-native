import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = price => {
    //price == $ || $$ || $$$
    return results.filter(result => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      {/* <Text>We have found {results.length} results</Text> */}
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice('$')}
          title="Coast Effective"
          
        />
        <ResultsList
          results={filterResultsByPrice('$$')}
          title="Bit Oricier"
          
        />
        <ResultsList
          results={filterResultsByPrice('$$$')}
          title="big Spender"
          
        />
      </ScrollView>
    </>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
