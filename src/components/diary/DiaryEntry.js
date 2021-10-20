import React from "react";
import { StyleSheet, Text, Dimensions, TouchableOpacity } from "react-native";
import colors from "../../config/colors";

const DiaryEntry = ({ item, onPress }) => {
  const { title, desc } = item;
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.title} numberOfLines={2}>
        {title}
      </Text>
      <Text style={styles.desc} numberOfLines={3}>
        {desc}
      </Text>
    </TouchableOpacity>
  );
};

const width = Dimensions.get("window").width - 40;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryGreen,
    width: width / 2 - 6,
    padding: 8,
    borderRadius: 15,
  },
  title: {
    fontWeight: "bold",
    fontSize: 19,
    color: colors.primaryYellow,
    fontFamily: "Babbit",
    marginBottom: 8,
  },

  desc: {
    fontFamily: "EnglishFont",
    fontSize: 16,
    color: "yellow",
  },
});

export default DiaryEntry;
