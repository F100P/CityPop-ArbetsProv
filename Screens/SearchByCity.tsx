import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Entypo} from "@expo/vector-icons"
import React, {useEffect, useState} from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Searchbar, Button } from 'react-native-paper';
import test from "../connections/test";
const SearchByCity = () => {
    const navigation = useNavigation();
    const people = fetch("http://api.geonames.org/search?q=london&username=weknowit");
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [testa, setTesta] = useState([]);

    
     useEffect(() => {
          test().then((data)=>{setData(data.data);
            console.log(data.geonames[0].countryName); // maska ur ett värde! yay
           setTesta(data.geonames[0].countryName);
            setLoading(false);
        });
        
      }, []);
    
      return (
        <View style={{ flex: 1, padding: 24 }}>
          {isLoading ? <ActivityIndicator/> : (
           <><Entypo name="magnifying-glass" size={240} color="black" onPress={() => console.log()} />
           <Text>{testa}</Text>
           <Searchbar />{console.log(data)}</>
          )}
        </View>
      );

    };
const styles = StyleSheet.create({

});

export default SearchByCity;

