import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Entypo} from "@expo/vector-icons"
import React, {useEffect, useState} from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Searchbar, Button } from 'react-native-paper';
import test from "../connections/test";
import searchCity from '../connections/searchCity';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../App';
const SearchByCountry = ({navigation}) => {
    
  type Props = NativeStackScreenProps<RootStackParams, `SearchByCityScreen`>
   
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [testa, setTesta] = useState([]);
    const [searchQuary, setSearchQuery] = useState([]);
    const [country, setCountry] = useState([]);
    const [population, setPopulation] = useState([]);
    
    


    const [Country, setCoutry] = useState([]);
    const onChangeSearch = query => setSearchQuery(query); //uppdaterar variabeln som ska skickas till Searchcountry
    const SearchPressed = () =>  searchCity(searchQuary).then((data)=>{
      
     setPopulation(data.geonames[0].population);
      setCountry(data.geonames[0].name);

    }) //uppdaterar variabeln som ska skickas till Searchcountry

     useEffect(() => {
         

       
      }, []);
     //***********************Behöver lösa vad som händer när quaryt inte är ok eller tomt, eller laddar för längre */
      return (
        <View style={{ flex: 1, padding: 24 }}>
          {isLoading ? <ActivityIndicator/> : (
           <>
           <Text>{country}</Text>
           <Text>{population}</Text>
           <Searchbar placeholder='Search Country' value={searchQuary} onChangeText={onChangeSearch} />{}</>
          )}
          <Entypo name="magnifying-glass" size={240} color="black"  onPress={SearchPressed} />
          <Button onPress={()=>navigation.navigate(`ViewPopultation`, {name: country, population: population})} >hallå</Button>
          <Text>{searchQuary}</Text>
        </View>
      );

    };
const styles = StyleSheet.create({

});

export default SearchByCountry;

