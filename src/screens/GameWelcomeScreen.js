import React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import Start from "../components/memory/Start";
import Game from "../components/memory/CardApp";
import Header from "../components/Header";

const Stack = createStackNavigator();

export default function WelcomeScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Start"
        component={Start}
        options={{ header: () => <Header /> }}
      />
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "yellow",
          },
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTintColor: "green",
          headerBackTitleVisible: false,
        }}
        name="Babbit's memory game"
        component={Game}
      />
    </Stack.Navigator>
  );
}
