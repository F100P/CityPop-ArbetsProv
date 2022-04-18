import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const MainMenu = () => {
    const navigation = useNavigation();
  return (
    <View>
        <TouchableOpacity
        onPress={() => {
            //Varför fungerar inte det här?
            navigation.navigate('SearchByCity');
        }}>

             <Text>SEARCH BY CITY</Text></TouchableOpacity>
     
        <TouchableOpacity
        onPress={() => {
            //Varför fungerar inte det här?
            navigation.navigate('SearchByCountry');
        }}
        > 
        <Text>SEARCH BY COUNTRY</Text></TouchableOpacity>
    </View>
  );
};

export default MainMenu;