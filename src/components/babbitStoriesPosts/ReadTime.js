import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { vars, colors } from "../../utils";

function ReadTime({ time }) {
  return (
    <View style={styles.label}>
      <View style={styles.dot} />
      <Text style={styles.text}>{`${time} min read`}</Text>
    </View>
  );
}

const { gap } = vars;

const styles = StyleSheet.create({
  label: {
    flexDirection: "row",
    alignItems: "center",
  },

  dot: {
    width: gap.xs,
    height: gap.xs,
    borderRadius: gap.xs,
    marginRight: gap.xs + 3,
    backgroundColor: colors.primaryLight,
  },

  text: {
    color: colors.primaryLight,
    fontSize: 18,
    fontFamily: "EnglishFont",
  },
});

export default ReadTime;
