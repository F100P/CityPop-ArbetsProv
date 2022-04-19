import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Entypo} from "@expo/vector-icons"
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Searchbar, Button } from 'react-native-paper';
const SearchByCity = () => {
    const navigation = useNavigation();
    return (
        <View>
           <Searchbar/>
           <Entypo name="magnifying-glass" size={240} color="black" onPress={() => alert("ive been pressed")} />
           
            <Text>Place Holder</Text>
            
        </View>
    );
};

const styles = StyleSheet.create({

});

export default SearchByCity;