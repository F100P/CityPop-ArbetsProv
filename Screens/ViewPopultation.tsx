import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../App';

 

type Props = NativeStackScreenProps<RootStackParams, 'ViewPopultation'>
const ViewPopultation = ({route}:Props) => {

    return (
        <View style={styles.container}>
            <Text style={styles.city}>{route.params.name}</Text>
            <View style={styles.display}>
            <Text style={styles.text}>Population {"\n"}</Text>
            <Text style={styles.population}>{route.params.population}</Text>
            </View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: '#61dafb',
        alignItems: "center",
        paddingBottom: 200,
        alignContent:"center",
      },
    city:{
        fontSize:30,
        flex:0.6,
        fontWeight:"bold",
        color:"#ffffff",
        textAlignVertical:"center",

    }  ,
    display:{
        flex:0.25,
        width:400,
        textAlignVertical:"center",
        alignContent:"center",
        alignItems: "center",
        justifyContent: "center",
        borderColor:"#ffffff",
        borderWidth:10,
        borderRadius:10,
        
    },
    population:{
        fontFamily:"monospace",
        fontSize:35,
        textAlign:"center",
        fontWeight:"bold",
        color:"#ffffff",
        
    },
    text:{
        marginTop:-30,
        fontWeight:"bold",
        color:"#ffffff",
        fontSize:20,
    }
   
    
});

export default ViewPopultation;