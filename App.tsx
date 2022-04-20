import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchByCityScreen from './Screens/SearchByCity';
import MainMenu from './Components/MainMenu';
import SearchByCountry from './Screens/SearchByCountry';
import ViewPopultation from './screens/ViewPopultation';
import CityFilter from './Screens/CityFilter';
const RootStack = createNativeStackNavigator();

//Work for tomorrow, keep watching video. nesled screens, Investigate API
export type RootStackParams = {
  SearchByCityScreen;
  SearchByCountry;
  CityFilter;
  ViewPopultation:{
    name: string;
    population: string; //tills vidare
  }
}

export default function App() {
  return (
    <NavigationContainer>
     <RootStack.Navigator>
       <RootStack.Screen name='SearchByCityScreen' component={SearchByCityScreen}/>
       <RootStack.Screen name='SearchByCountry' component={SearchByCountry}/>
       <RootStack.Screen name='CityFilter' component={CityFilter}/>
       <RootStack.Screen name='ViewPopultation' component={ViewPopultation}/>
      </RootStack.Navigator>
    
    
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
