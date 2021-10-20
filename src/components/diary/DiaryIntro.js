import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import colors from "../../config/colors";

const Intro = ({ onFinish }) => {
  const [name, setName] = useState("");
  const handleOnChangeText = (text) => setName(text);

  const handleSubmit = async () => {
    const user = { name: name };
    await AsyncStorage.setItem("user", JSON.stringify(user));
    if (onFinish) onFinish();
  };

  return (
    <>
      <StatusBar hidden />
      <View style={styles.container}>
        <Text style={styles.inputTitle}>Enter Your Name Time Traveller!</Text>
        <TextInput
          value={name}
          onChangeText={handleOnChangeText}
          placeholder="Enter Name"
          style={styles.textInput}
        />
        {name.trim().length >= 3 ? (
          <TouchableOpacity onPress={handleSubmit}>
            <Image
              style={styles.btnArrow}
              source={require("../../../assets/icons/arrow.png")}
              resizeMode="contain"
            />
          </TouchableOpacity>
        ) : null}
      </View>
    </>
  );
};

const width = Dimensions.get("window").width - 50;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    borderWidth: 2,
    fontFamily: "EnglishFont",
    borderColor: colors.primaryYellow,
    color: colors.primaryYellow,
    width,
    height: 50,
    borderRadius: 30,
    paddingLeft: 15,
    fontSize: 25,
    marginBottom: 15,
  },
  inputTitle: {
    fontFamily: "Babbit",
    fontSize: 25,
    alignSelf: "flex-start",
    paddingLeft: 25,
    marginBottom: 5,
    opacity: 0.5,
  },

  btnArrow: {
    width: 80,
    height: 80,
    tintColor: "yellow",
  },
});

export default Intro;
