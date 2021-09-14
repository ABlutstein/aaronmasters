import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Header from "../Header";
import VideoSearchScreen from "../../screens/VideoSearchScreen";
import GameWelcomeScreen from "../../screens/GameWelcomeScreen";
import { Article, BabbitStories } from "../../index";

const Stack = createStackNavigator();

const FirstScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={BabbitStories}
        options={{
          header: () => <Header />,
        }}
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
        name="Babbit's incredible stories"
        component={Article}
      />
    </Stack.Navigator>
  );
};

export { FirstScreenNavigator };

const SecondScreenNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="GamesScreen" component={GameWelcomeScreen} />
    </Stack.Navigator>
  );
};

export { SecondScreenNavigator };

const ThirdScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="VideoScreen"
        component={VideoSearchScreen}
        options={{ header: () => <Header /> }}
      />
    </Stack.Navigator>
  );
};

export { ThirdScreenNavigator };
