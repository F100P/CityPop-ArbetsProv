import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchByCityScreen from './screens/SearchByCity';
import MainMenu from './Components/MainMenu';
import SearchByCountry from './screens/SearchByCountry';
import ViewPopultation from './screens/ViewPopultation';
import CityFilter from './screens/CityFilter';
import StartScreen from './screens/StartScreen';
const RootStack = createNativeStackNavigator();

//Work for tomorrow, keep watching video. nesled screens, Investigate API
export type RootStackParams = {
  SearchByCityScreen:{
    mode: boolean;
  };
  
  StartScreen: any;
  CityFilter:{
    allData: object,
  };
  ViewPopultation:{
    name: string;
    population: string; //tills vidare
  };
}

export default function App() {
  return (
    <NavigationContainer>
     <RootStack.Navigator>
       <RootStack.Screen name='StartScreen' component={StartScreen}/>
       <RootStack.Screen name='SearchByCityScreen' component={SearchByCityScreen}/>
       
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
