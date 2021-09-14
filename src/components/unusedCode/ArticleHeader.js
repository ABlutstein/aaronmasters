//NOT USING THIS CODE YET//

import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { vars, colors } from "../../utils";

function ArticleHeader({ navigation, route }) {
  const { props } = route.params;

  return (
    <View style={styles.frame}>
      <StatusBar backgroundColor="transparent" />
      <View style={[styles.headerbg, { backgroundColor: props.accent }]} />
      <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
        <Image
          source={require("../../../assets/icons/back.png")}
          style={styles.backIcon}
        />
        <Text style={styles.backText}>{props.category}</Text>
      </TouchableOpacity>

      <View style={styles.headerRight}>
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={require("../../../assets/icons/headphone.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        <Image
          source={require("../../../assets/icons/heart.png")}
          style={styles.icon}
        />
        <Image
          source={require("../../../assets/icons/share.png")}
          style={[styles.icon, { marginRight: 0 }]}
        />
      </View>
    </View>
  );
}

const { gap } = vars;

const styles = StyleSheet.create({
  frame: {
    padding: gap.s,
    paddingTop: gap.m + gap.s,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
  },

  headerbg: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "63%",
    height: 108,
  },

  back: {
    flexDirection: "row",
    alignItems: "center",
  },

  backIcon: {
    height: 30,
    width: 30,
  },

  backText: {
    fontSize: 27,
    fontFamily: "Babbit",
    color: colors.primary,
  },

  headerRight: {
    flexDirection: "row",
  },

  icon: {
    width: 25,
    height: 25,
    marginHorizontal: gap.s - gap.xs,
  },
});

export default ArticleHeader;
