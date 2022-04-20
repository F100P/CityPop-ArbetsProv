import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../App';

type Props = NativeStackScreenProps<RootStackParams, 'ViewPopultation'>
const ViewPopultation = ({route}:Props) => {
    return (
        <View>
            <Text>{route.params.name}</Text>
            <Text>{route.params.population}</Text>
            <Text>HAllåååå</Text>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default ViewPopultation;