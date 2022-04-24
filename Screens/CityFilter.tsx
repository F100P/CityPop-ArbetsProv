import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import CityButton from '../Components/CityButton';
import { Button } from 'react-native-paper';





const CityFilter= ({navigate,route}) => {
    console.log(route.params.allData.geonames.length);
    const numberOfHits = route.params.allData.geonames.length;
    const [load, setLoad] = useState(true);
    const [geonames, setGeonames] = useState([]);
    const [name, setName] = useState([]);

    
    useEffect(() => {
       setGeonames(route.params.allData.geonames);
      }, []);

    

    return (
        <View>
            
            {geonames.map((data)=>{ return (<CityButton allData={data}></CityButton>)})}
            
            
        </View>
    );
};

const styles = StyleSheet.create({

});

export default CityFilter;