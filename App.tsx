import { NavigationContainer} from "@react-navigation/native";

import React from "react";

import {
  createNativeStackNavigator,

} from "@react-navigation/native-stack";
import SearchByCityScreen from "./screens/SearchByCity";

import ViewPopultation from "./screens/ViewPopultation";
import CityFilter from "./screens/CityFilter";
import StartScreen from "./screens/StartScreen";


//initierar navigator för att kunna navigera mellan solika skärmar 
const RootStack = createNativeStackNavigator();

//Navigations parametrar
export type RootStackParams = {
  SearchByCityScreen: {
    mode: boolean;
  };

  StartScreen: any;
  CityFilter: {
    allData: object;
  };
  ViewPopultation: {
    name: string;
    population: string;
  };
};

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name='StartScreen'
          component={StartScreen}
          options={{ title: "CityPop", headerShown: false }}
        />

        <RootStack.Screen
          name='SearchByCityScreen'
          component={SearchByCityScreen}
          options={{ title: "CityPop" }}
        />

        <RootStack.Screen
          name='CityFilter'
          component={CityFilter}
          options={{ title: "CityPop" }}
        />
        <RootStack.Screen
          name='ViewPopultation'
          component={ViewPopultation}
          options={{ title: "CityPop" }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
