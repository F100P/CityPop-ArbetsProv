import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ListOFCityButton = (Hits) => {
  
    const navigation = useNavigation();
  return (
        <TouchableOpacity
        onPress={() => {
            //Varför fungerar inte det här?
            navigation.navigate('ViewPopulation',{
                name: city,
      population: population,
            }
        }}>

             <Text>country</Text></TouchableOpacity>
     
  
  );
};

export default ListOFCityButton;