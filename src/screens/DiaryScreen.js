import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DiaryFrontPage from "../components/diary/DiaryFrontPage";
import DiaryDetail from "../components/diary/DiaryDetail";
import DiaryProvider from "../contexts/DiaryProvider";
import Intro from "../components/diary/DiaryIntro";
import Header from "../components/Header";
import colors from "../config/colors";

const Stack = createStackNavigator();

export default function App() {
  const [user, setUser] = useState({});
  const [isAppFirstTimeOpen, setIsAppFirstTimeOpen] = useState(false);
  const findUser = async () => {
    const result = await AsyncStorage.getItem("user");

    if (result === null) return setIsAppFirstTimeOpen(true);

    setUser(JSON.parse(result));
    setIsAppFirstTimeOpen(false);
  };

  useEffect(() => {
    findUser();
  }, []);

  const renderDiaryScreen = (props) => (
    <DiaryFrontPage {...props} user={user} />
  );

  if (isAppFirstTimeOpen) return <Intro onFinish={findUser} />;
  return (
    <DiaryProvider>
      <Stack.Navigator>
        <Stack.Screen
          name="DiaryFrontPage"
          component={renderDiaryScreen}
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
          name="Diary Entry"
          component={DiaryDetail}
        />
      </Stack.Navigator>
    </DiaryProvider>
  );
}
