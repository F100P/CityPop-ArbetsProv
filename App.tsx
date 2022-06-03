import { NavigationContainer } from "@react-navigation/native";

import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchByCityScreen from "./Screens/SearchByCity";

import ViewPopultation from "./Screens/ViewPopultation";
import CityFilter from "./Screens/CityFilter";
import StartScreen from "./Screens/StartScreen";

import { TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

//initierar navigator för att kunna navigera mellan solika skärmar
const RootStack = createNativeStackNavigator();

//Navigations parametrar
export type RootStackParams = {
  SearchByCityScreen: {
    mode: boolean;
  };

  StartScreen: any;
  CityFilter: {
    route: any;
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
          options={({ navigation }) => ({
            title: "CityPop",
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("StartScreen")}
              >
                <Entypo name='arrow-left' size={40} color='black' />
              </TouchableOpacity>
            ),
          })}
        />

        <RootStack.Screen
          name='CityFilter'
          component={CityFilter}
          options={({ navigation }) => ({
            title: "CityPop",
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("StartScreen")}
              >
                <Entypo name='arrow-left' size={40} color='black' />
              </TouchableOpacity>
            ),
          })}
        />
        <RootStack.Screen
          name='ViewPopultation'
          component={ViewPopultation}
          options={({ navigation }) => ({
            title: "CityPop",
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("StartScreen")}
              >
                <Entypo name='arrow-left' size={40} color='black' />
              </TouchableOpacity>
            ),
          })}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
