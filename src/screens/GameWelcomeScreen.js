import React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import Start from "../components/memory/Start";
import Game from "../components/memory/CardApp";
import Header from "../components/Header";
import colors from "../config/colors";

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
            backgroundColor: colors.primaryYellow,
          },
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTintColor: colors.primaryGreen,
          headerBackTitleVisible: false,
        }}
        name="Babbit's memory game"
        component={Game}
      />
    </Stack.Navigator>
  );
}
