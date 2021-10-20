import React from "react";
import { StyleSheet } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { enableScreens } from "react-native-screens";
import VideoList from "../components/videoSearch/VideoList";
import colors from "../config/colors";

enableScreens(); // this helps screens load faster in background
const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <VideoList />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryYellow,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
