import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CityButton from "../Components/CityButton";

const CityFilter = ({ route }) => {
  

  const [geonames, setGeonames] = useState([]);
  const [searchCountry, setSearchCountry] = useState([]);
  let keyOperator = 0;
  useEffect(() => {
    setGeonames(route.params.allData.geonames);
    setSearchCountry(route.params.allData.geonames[0].countryName);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{searchCountry}</Text>
      <ScrollView style={styles.scroll}>
        {geonames.map((data) => {
          keyOperator++;
          return <CityButton key={keyOperator} allData={data}></CityButton>;
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#61dafb",
    alignItems: "center",
    alignContent: "center",
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
    flex: 1,
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    color: "#ffffff",

    textAlignVertical: "center",
  },
  scroll: {
    flex: 0.5,
  },
});

export default CityFilter;
