import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { vars } from "../../utils";
import colors from "../../config/colors";

function Author({ name, image, style }) {
  return (
    <View style={[styles.frame, style]}>
      <Image source={image} style={styles.image} />
      <Text style={styles.text}>{name}</Text>
    </View>
  );
}

const { gap } = vars;

const styles = StyleSheet.create({
  frame: {
    flexDirection: "row",
    alignItems: "center",
  },

  image: {
    width: 40,
    height: 40,
    borderRadius: 100,
    marginRight: gap.xs + 3,
  },

  text: {
    color: colors.primaryLight,
    fontSize: gap.s,
    fontFamily: "EnglishFont",
    fontSize: 18,
  },
});

export default Author;
