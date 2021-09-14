import React from "react";
import { View, Text, Image } from "react-native";
import { useFonts } from "@use-expo/font";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  FirstScreenNavigator,
  SecondScreenNavigator,
  ThirdScreenNavigator,
} from "./src/components/navigation/CustomNavigation";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "green",
  },
};
const Tab = createBottomTabNavigator();

function App() {
  const [loaded] = useFonts({
    Babbit: require("./assets/fonts/Babbit-font1.ttf"),
    EnglishFont: require("./assets/fonts/IMFellEnglish.ttf"),
    Risque: require("./assets/fonts/Risque-Regular.ttf"),
    CrimsonBold: require("./assets/fonts/CrimsonText-Bold.ttf"),
    CrimsonSemi: require("./assets/fonts/CrimsonText-SemiBold.ttf"),
  });

  return !loaded ? null : (
    <NavigationContainer {...{ theme }}>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          style: {
            backgroundColor: "yellow",
            height: 120,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={FirstScreenNavigator}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  top: 10,
                }}
              >
                <Image
                  source={require("./assets/icons/home1.png")}
                  resizeMode="contain"
                  style={{
                    width: 60,
                    height: 60,
                    tintColor: focused ? "orange" : "green",
                  }}
                />
                <Text
                  style={{
                    fontFamily: "Babbit",
                    color: focused ? "orange" : "green",
                    fontSize: 20,
                    width: 45,
                  }}
                >
                  Home
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Games"
          component={SecondScreenNavigator}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  top: 10,
                }}
              >
                <Image
                  source={require("./assets/icons/card.png")}
                  resizeMode="contain"
                  style={{
                    width: 60,
                    height: 60,
                    tintColor: focused ? "orange" : "green",
                  }}
                />
                <Text
                  style={{
                    fontFamily: "Babbit",
                    color: focused ? "orange" : "green",
                    fontSize: 20,
                    width: 50,
                  }}
                >
                  Games
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Videos"
          component={ThirdScreenNavigator}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  top: 10,
                }}
              >
                <Image
                  source={require("./assets/icons/video2.png")}
                  resizeMode="contain"
                  style={{
                    width: 60,
                    height: 60,
                    tintColor: focused ? "orange" : "green",
                  }}
                />
                <Text
                  style={{
                    fontFamily: "Babbit",
                    color: focused ? "orange" : "green",
                    fontSize: 20,
                    width: 47,
                  }}
                >
                  Videos
                </Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
