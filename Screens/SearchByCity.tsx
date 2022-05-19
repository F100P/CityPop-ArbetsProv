import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import searchCity from "../connections/searchCity";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../App";
import FindCountryCode from "../connections/FindCountryCode";
import searchCountry from "../connections/searchCountry";

type Props = NativeStackScreenProps<RootStackParams, "SearchByCityScreen">;

//Sidan cityScreens och CountryScreens gjordes om till en för att undviga kodrepetition
const SearchByCityScreen = ({ navigation, route }: Props) => {
  //initerar statevariabler
  const [quaryOk, setQuaryOk] = useState(false);
  const [searchQuary, setSearchQuery] = useState([]);
  const [loading, setLoading] = useState(false);

  //navigerar till nästa ViewPopulation
  //Används då mode är inställt för city
  const navigateToCity = (country: string, population: string) =>
    navigation.navigate(`ViewPopultation`, {
      name: country,
      population: population,
    });

  //Navigerar till Cityfilter
  //Används då mode är inställt för country
  const navigateToCountry = (data: object) => {
    navigation.navigate(`CityFilter`, {
      allData: data,
    });
  };

  //uppdaterar variabeln som ska skickas till Searchcountry
  const onChangeSearch = (query: React.SetStateAction<never[]>) =>
    setSearchQuery(query);

  //Blev lite rörigt här då komplexiteten för sökningen ökade mer än jag trodde...
  //Startar laddningsskärm för att sedan göra ett Quary, skickar vidare nödvändig data till nästkommande skärm
  const SearchPressed = () => {
    setLoading(true);
    //if City Search
    if (route.params.mode) {
      searchCity(searchQuary).then((data) => {
        if (data.totalResultsCount != 0 && searchQuary.length != 0 && data) {
          navigateToCity(data.geonames[0].name, data.geonames[0].population);
        } else {
          setQuaryOk(true);
          setLoading(false);
        }
      });
    } else {
      FindCountryCode(searchQuary).then((CountryCode) => {
        searchCountry(CountryCode).then((data) => {
          if (data.totalResultsCount != 0 && searchQuary.length != 0 && data) {
            // Vid en "dålig" sökning
            navigateToCountry(data);
          } else {
            //Något gick snett visar felmeddelande
            setQuaryOk(true);
            setLoading(false);
          }
        });
      });
    }
  };

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
          <Searchbar
            style={styles.searchbar}
            placeholder='Enter a city'
            value={searchQuary}
            onChangeText={onChangeSearch}
          />
          <TouchableOpacity style={styles.searchButton} onPress={SearchPressed}>
            <Entypo name='magnifying-glass' size={60} color='black' />
          </TouchableOpacity>
        </>
      )}

      {quaryOk ? (
        <Text style={styles.error}>
          Din Sökning gav inget resultat försök igen
        </Text>
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: "center",
    backgroundColor: "#61dafb",
    alignItems: "center",
    //paddingBottom: 200,
  },
  button: {
    flex: 0.2,
    width: 250,
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    justifyContent: "center",

    marginBottom: 20,
  },
  title: {
    fontSize: 70,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    //marginTop:50,
    flex: 0.4,
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    color: "#ffffff",
  },
  searchbar: {
    flex: 0.1,
    paddingVertical: 10,
    marginHorizontal: 10,

    //margin: 100,
  },
  searchButton: {
    marginTop: 20,
    backgroundColor: "#ffffff",
    borderRadius: 180,
    padding: 10,
  },
  loading: {
    marginTop: 20,
    fontSize: 40,
    color: "#ffffff",
  },
  error: {
    marginTop: 20,
    fontSize: 20,
    color: "#ffffff",
  },
});

export default SearchByCityScreen;
