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

type Props = NativeStackScreenProps<RootStackParams, "SearchByCityScreen">;
const SearchByCityScreen = ({ navigation, route }: Props) => {
  const [quaryOk, setQuaryOk] = useState(false);
  const [searchQuary, setSearchQuery] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigateToNext = (country:string, population:string) =>
    navigation.navigate(`ViewPopultation`, {
      name: country,
      population: population,
    });
  const onChangeSearch = (query: React.SetStateAction<never[]>) => setSearchQuery(query); //uppdaterar variabeln som ska skickas till Searchcountry

  const navigateToCountry = (data:object) => {
    navigation.navigate(`CityFilter`, {
      allData: data,
    });
  };

  const SearchPressed = () => {
    setLoading(true);
    //if City Search
    if (route.params.mode) {
      searchCity(searchQuary).then((data) => {
        if (data.geonames.totalResultsCount != 0 && searchQuary.length != 0 ) {
          navigateToNext(data.geonames[0].name, data.geonames[0].population);
        } else {
          setQuaryOk(true);
          setLoading(false);
        }
      });
    } else {
      searchCity(searchQuary).then((data) => {
        if (data.geonames.totalResultsCount != 0 && searchQuary.length != 0) {
          navigateToCountry(data);
        } else {
          setQuaryOk(true);
          setLoading(false);
        }
      });
    }
    //if Country search
  }; //Ge felmeddelande om navigeringen inte är okej
  return (
    <View style={styles.container}>
      {route.params.mode ? (
        <Text>SEARCH BY CITY</Text>
      ) : (
        <Text>SEARCH BY COUNTRY</Text>
      )}

      {loading ? (
        <Text>loading</Text>
      ) : (
        <>
          <Searchbar
            placeholder='Enter a city'
            value={searchQuary}
            onChangeText={onChangeSearch}
          />
          <TouchableOpacity onPress={SearchPressed}>
            <Entypo name='magnifying-glass' size={240} color='black' />
          </TouchableOpacity>
        </>
      )}

      {quaryOk ? <Text>Din Sökning gav inget resultat försök igen</Text> : null}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#61dafb",
  },
});

export default SearchByCityScreen;
