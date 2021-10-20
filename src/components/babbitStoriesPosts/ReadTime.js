import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { vars } from "../../utils";
import colors from "../../config/colors";

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
    padding: 5,
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
    fontSize: 15,
    fontFamily: "EnglishFont",
  },
});

export default ReadTime;
