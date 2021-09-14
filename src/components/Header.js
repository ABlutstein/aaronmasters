import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { vars, colors } from "../utils";

function Header() {
  return (
    <View style={styles.frame}>
      <Image
        style={styles.logo}
        source={require("../../assets/icons/Babbitlogofinala.png")}
      />
      <StatusBar backgroundColor="transparent" />

      <TouchableOpacity
        style={{ marginRight: 15 }}
        onPress={() => alert("BUTTON NOT USED YET!")}
      >
        <Image
          source={require("../../assets/icons/menu.png")}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
}

const { gap } = vars;

const styles = StyleSheet.create({
  frame: {
    margin: -40,
    paddingVertical: gap.s - gap.xs * 2,
    paddingTop: gap.m,
    paddingBottom: gap.xs,
    paddingHorizontal: gap.s,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    color: colors.primary,
    fontSize: 40,
    fontFamily: "CrimsonBold",
  },

  icon: {
    width: 40,
    height: 30,
    marginRight: 40,
  },

  logo: {
    width: 300,
    resizeMode: "contain",
    bottom: 10,
    margin: 5,
    marginLeft: 75,
  },
});

export default Header;
