import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const NotFound = () => {
  return (
    <View style={[StyleSheet.absoluteFillObject, styles.container]}>
      <Image
        style={styles.notFoundImage}
        source={require("../../../assets/icons/BabbitFriends.png")}
        resizeMode="contain"
      />

      <Text style={styles.sorryText}>
        Sorry time travellers - we can't find what you're looking for!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.5,
    zIndex: -1,
  },

  notFoundImage: {
    width: 300,
    top: 60,
    right: 30,
  },

  sorryText: {
    marginTop: 10,
    fontSize: 20,
    textAlign: "center",
    padding: 20,
  },
});

export default NotFound;
