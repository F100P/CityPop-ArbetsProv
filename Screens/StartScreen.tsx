import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';

const StartScreen = ({navigation}) => {
    return (
        <View>
            <Text>CityPop</Text>
            <Button onPress ={()=> navigation.navigate("SearchByCityScreen")} >SEARCH BY CITY</Button>
            <Button onPress ={()=> navigation.navigate("SearchByCountry")}>SEARCH BY COUNTRY</Button>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default StartScreen;