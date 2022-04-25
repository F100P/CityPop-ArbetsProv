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
import ListAccordionGroup from "react-native-paper/lib/typescript/components/List/ListAccordionGroup";

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
        <Text style={styles.text}>SEARCH BY{"\n"}CITY</Text>
        
      ) : (
        <Text style={styles.text}>SEARCH BY{"\n"}COUNTRY</Text>
      )}

      {loading ? (
        <Text style={styles.loading}>loading</Text>
      ) : (
        <>
          <Searchbar style={styles.searchbar}
            placeholder='Enter a city'
            value={searchQuary}
            onChangeText={onChangeSearch}
          />
          <TouchableOpacity  style={styles.searchButton} onPress={SearchPressed}>
            <Entypo name='magnifying-glass' size={60} color='black' />
          </TouchableOpacity>
        </>
      )}

      {quaryOk ? <Text style={styles.loading}>Din Sökning gav inget resultat försök igen</Text> : null}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
      flex: 2,
      justifyContent:"center",
      backgroundColor: '#61dafb',
      alignItems: "center",
      //paddingBottom: 200,
    },
  button: {
      flex:0.2,
      width:250,
      alignItems:"center",
      backgroundColor: "#ffffff",
      borderRadius:10,
      justifyContent:"center",
      
      marginBottom:20,
      
      
  },
  title: {
      fontSize:70,
      flex:1,
      justifyContent:"center",
      alignItems:"center",
      

  },
  text:{
      //marginTop:50,
      flex:0.4,
      fontSize: 40,
      fontWeight: 'bold',
      textAlign:"center",
      color:"#ffffff",
      
      
      
  },
  searchbar:{
    flex:0.10,
    paddingVertical:10,
    marginHorizontal:10,
    
    //margin: 100,
  },
  searchButton:{
    
    marginTop:20,
    backgroundColor:"#ffffff",
    borderRadius:180,
    padding:10,
  },
  loading:{
    marginTop:20,
    fontSize:40,
    color:"#ffffff",

  }
});

export default SearchByCityScreen;
