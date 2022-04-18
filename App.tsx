import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchByCity from './Screens/SearchByCity';
import MainMenu from './Components/MainMenu';
import SearchByCountry from './Screens/SearchByCountry';

const RootStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <RootStack.Navigator>
    <RootStack.Screen name='SearchByCity' component={SearchByCity}/>
    <RootStack.Screen name='SearchByCountry' component={SearchByCountry}/>
      </RootStack.Navigator>
    <MainMenu />
    
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
