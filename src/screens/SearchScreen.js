import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";

import useResults from "../hooks/useResults";
import SearchBar from "../components/SearchBar";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = price => {
    return results.filter(result => result.price === price);
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={term => setTerm(term)}
        onTermSubmit={() => searchApi(term)}
      />
      {!!errorMessage && <Text style={{ marginLeft: 15 }}>{errorMessage}</Text>}

      <ScrollView>
        <ResultsList
          results={filterResultsByPrice("$")}
          title="Cost Effective"
        />
        <ResultsList results={filterResultsByPrice("$$")} title="Bit Pricier" />
        <ResultsList
          results={filterResultsByPrice("$$$")}
          title="Big Spender"
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
