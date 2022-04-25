import { useNavigation } from "@react-navigation/native";

import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

//Ger tillbacka en knapp med hjälp av geoname data
const CityButton = (cityData: {
  allData: {
    name: React.SetStateAction<undefined>;
    population: React.SetStateAction<undefined>;
  };
}) => {
  const [city, setCity] = useState();
  const [population, setPopulation] = useState();

  useEffect(() => {
    setCity(cityData.allData.name);
    setPopulation(cityData.allData.population);
  }, []);

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        //Varför fungerar inte det här?
        navigation.navigate("ViewPopultation", {
          name: city,
          population: population,
        });
      }}
    >
      <Text style={styles.text}>{city}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#61dafb",
    alignItems: "center",
    paddingBottom: 200,
  },
  button: {
    width: 400,
    margin: 5,
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    borderColor: "#ffffff",
    borderWidth: 10,
  },
  title: {
    fontSize: 70,
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 200,
    fontWeight: "bold",
  },
  text: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#ffffff",
  },
});

export default CityButton;
