import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Image, StyleSheet } from "react-native";
import { vars } from "../utils";

function Header() {
  return (
    <View style={styles.frame}>
      <Image
        style={styles.logo}
        source={require("../../assets/icons/Babbitlogofinala.png")}
      />
      <StatusBar backgroundColor="transparent" />
    </View>
  );
}

const { gap } = vars;

const styles = StyleSheet.create({
  frame: {
    margin: -40,
    paddingVertical: gap.s - gap.xs * 2,
    paddingTop: gap.xs,
    paddingBottom: gap.xs,
    paddingHorizontal: gap.s,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logo: {
    width: 300,
    resizeMode: "contain",
    bottom: -15,
    margin: 5,
    marginLeft: 75,
  },
});

export default Header;
