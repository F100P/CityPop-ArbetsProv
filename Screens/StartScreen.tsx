import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';


const StartScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style ={styles.title}>CityPop</Text>
            <TouchableOpacity style={styles.button} onPress ={()=> navigation.navigate("SearchByCityScreen",{mode: true})} ><Text style={styles.text}>SEARCH BY CITY</Text></TouchableOpacity >
            <TouchableOpacity style={styles.button}  onPress ={()=> navigation.navigate("SearchByCityScreen",{mode: false})}><Text style={styles.text}>SEARCH BY COUNTRY</Text></TouchableOpacity >
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        backgroundColor: '#61dafb',
        alignItems: "center",
        paddingBottom: 200,
      },
    button: {
        flex:1,
        width:250,
        alignItems:"center",
        borderColor:"#ffffff",
        borderWidth:10,
        borderRadius:10,
        justifyContent:"center",
        
        marginBottom:20,
        
        
    },
    title: {
        fontSize:70,
        flex:3,
        justifyContent:"center",
        alignItems:"center",
        paddingTop: 200,
        fontWeight: "bold",
        color: "#ffffff",

    },
    text:{
        
        fontSize: 17,
        fontWeight: 'bold',
        color:"#ffffff"
        
    }
});

export default StartScreen;