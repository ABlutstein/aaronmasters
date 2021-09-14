import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { vars, colors } from "../../utils";

function Author({ name, image, style }) {
  return (
    <View style={[styles.frame, style]}>
      <Image source={image} style={styles.image} />
      <Text style={styles.text}>{name}</Text>
    </View>
  );
}

const { gap } = vars;
const imgsz = gap.s + gap.xs * 2;

const styles = StyleSheet.create({
  frame: {
    flexDirection: "row",
    alignItems: "center",
  },

  image: {
    width: 50,
    height: 50,
    borderRadius: 100,
    marginRight: gap.xs + 3,
  },

  text: {
    color: colors.primary,
    fontSize: gap.s,
    fontFamily: "EnglishFont",
    fontSize: 22,
  },
});

export default Author;
