import React, { useState } from "react";
import { StyleSheet, TextInput, Text, View } from "react-native";

const SearchVideo = ({ onSearchVideo }) => {
  const [inputText, setInputText] = useState("");

  const searchVideoList = () => {
    onSearchVideo(inputText);
  };

  const resetVideoList = (txt) => {
    if (txt.trim() === "") {
      setInputText(txt);
      onSearchVideo("");
    } else {
      setInputText(txt);
    }
  };

  return (
    <View style={styles.header}>
      <Text style={styles.apptitle}>History video search</Text>
      <TextInput
        style={styles.search}
        clearButtonMode={"while-editing"}
        placeholder="Search for history videos here..."
        placeholderTextColor="silver"
        returnKeyType="search"
        value={inputText}
        onSubmitEditing={searchVideoList}
        onChangeText={(text) => resetVideoList(text)}
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    backgroundColor: "yellow",
    padding: 30,
    paddingTop: 10,
    zIndex: 200,
    shadowColor: "rgb(0, 0, 0)",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 1,
  },
  apptitle: {
    fontSize: 30,
    textAlign: "center",
    paddingBottom: 10,
    fontWeight: "600",
    color: "green",
    fontFamily: "Babbit",
  },
  search: {
    height: 40,
    backgroundColor: "rgb(240, 240, 240)",
    color: "red",
    padding: 9,
    fontSize: 20,
    fontFamily: "EnglishFont",
    borderRadius: 30,
  },
});

export default SearchVideo;
