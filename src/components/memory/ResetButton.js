import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const ResetButton = ({ playAgain }) => {
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={playAgain}>
        <Text style={styles.appButtonText}> Start Again </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "orange",
    color: "white",
    padding: 20,
    borderRadius: 30,
    marginTop: 30,
    marginBottom: 50,
  },
  appButtonText: {
    fontSize: 25,
    color: "green",
    fontWeight: "bold",
    fontFamily: "Babbit",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});

export default ResetButton;
