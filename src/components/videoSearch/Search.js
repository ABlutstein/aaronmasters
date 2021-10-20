import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import colors from "../../config/colors";

const SearchVideo = ({ onSearchVideo, containerStyle, onChangeText }) => {
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

  const deleteButton = () => {
    setInputText("");
  };

  return (
    <View style={styles.header}>
      <View style={[styles.container, { ...containerStyle }]}>
        <Text style={styles.appTitle}>History video search</Text>
        <TextInput
          onChangeText={onChangeText}
          style={styles.searchBar}
          value={inputText}
          onSubmitEditing={searchVideoList}
          onChangeText={(text) => resetVideoList(text)}
          placeholder="Search for history videos here..."
        />
        {inputText ? (
          <TouchableOpacity style={styles.clearIcon} onPress={deleteButton}>
            <Image
              style={styles.closeButton}
              source={require("../../../assets/icons/childCross.png")}
              style={styles.Icon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    backgroundColor: colors.primaryYellow,
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
  appTitle: {
    fontSize: 30,
    textAlign: "center",
    paddingBottom: 10,
    fontWeight: "600",
    color: colors.primaryGreen,
    fontFamily: "Babbit",
  },

  searchBar: {
    borderWidth: 0.9,
    borderColor: colors.primaryGreen,
    backgroundColor: colors.background,
    height: 40,
    borderRadius: 40,
    paddingLeft: 15,
    fontSize: 20,
    fontFamily: "EnglishFont",
    fontWeight: "bold",
    color: colors.primaryGreen,
  },
  container: {
    justifyContent: "center",
  },
  clearIcon: {
    position: "absolute",
    right: 10,
    bottom: 10,
  },
  Icon: {
    width: 20,
    height: 20,
    tintColor: colors.primaryGreen,
  },
});

export default SearchVideo;
