import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';

const StartScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style ={styles.title}>CityPop</Text>
            <Button style={styles.button} color='#000000' mode='contained' onPress ={()=> navigation.navigate("SearchByCityScreen",{mode: true})} >SEARCH BY CITY</Button>
            <Button style={styles.button} color='#000000' mode='contained'onPress ={()=> navigation.navigate("SearchByCityScreen",{mode: false})}>SEARCH BY COUNTRY</Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        backgroundColor: '#61dafb',
        alignItems: "center",
      },
    button: {
        flex:3,
        width:250,
        
        margin:10,
        
        
        
    },
    title: {
        fontSize:70,
        flex:3,
        justifyContent:"center",
        alignItems:"center",
        paddingTop: 200,

    }
});

export default StartScreen;