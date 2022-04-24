import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const CityButton = (cityData) => {
  const [city, setCity] = useState();
  const [population, setPopulation] = useState();

  useEffect(() => {
    setCity(cityData.allData.name);
    setPopulation(cityData.allData.population);
   }, []);
  
  const navigation = useNavigation();
    
  return (
        <TouchableOpacity
        onPress={() => {
            //Varför fungerar inte det här?
            navigation.navigate('ViewPopultation',{
                name: city,
      population: population,
            })
        }}>

             <Text>{city}</Text></TouchableOpacity>
     
  
  );
};

export default CityButton;