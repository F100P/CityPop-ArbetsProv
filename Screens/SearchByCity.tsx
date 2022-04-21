import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Searchbar, Button } from "react-native-paper";
import test from "../connections/test";
import searchCity from "../connections/searchCity";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../App";
const SearchByCityScreen = ({ navigation }) => {
  type Props = NativeStackScreenProps<RootStackParams, `SearchByCityScreen`>;

  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [testa, setTesta] = useState([]);
  const [searchQuary, setSearchQuery] = useState([]);

  const [Country, setCoutry] = useState([]);
  const navigateToNext = (country, population) =>
    navigation.navigate(`ViewPopultation`, {
      name: country,
      population: population,
    });
  const onChangeSearch = (query) => setSearchQuery(query); //uppdaterar variabeln som ska skickas till Searchcountry

  const SearchPressed = () =>
    searchCity(searchQuary).then((data) => {
      
      navigateToNext(data.geonames[0].name, data.geonames[0].population);
    }, setLoading(true) ); //Ge felmeddelande om navigeringen inte är okej
  return (
    <View style={{ flex: 1, padding: 24 }}>
      <Text>SEARCH BY CITY</Text>
      <Searchbar
        placeholder='Enter a city'
        value={searchQuary}
        onChangeText={onChangeSearch}
      />

      <TouchableOpacity onPress={SearchPressed}>
        <Entypo name='magnifying-glass' size={240} color='black' />
      </TouchableOpacity>
      {isLoading ? <Text>Din Sökning gav inget resultat försök igen</Text> : (null)}
    </View>
  );
};
const styles = StyleSheet.create({});

export default SearchByCityScreen;
