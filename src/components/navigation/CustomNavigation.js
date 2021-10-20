import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Header from "../Header";
import VideoSearchScreen from "../../screens/VideoSearchScreen";
import GameWelcomeScreen from "../../screens/GameWelcomeScreen";
import DiaryScreen from "../../screens/DiaryScreen";
import { Article, BabbitStories } from "../../index";
import colors from "../../config/colors";

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
            backgroundColor: colors.primaryYellow,
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

const FourthScreenNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="DiaryPage" component={DiaryScreen} />
    </Stack.Navigator>
  );
};

export { FourthScreenNavigator };
