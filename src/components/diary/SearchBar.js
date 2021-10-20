import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import colors from "../../config/colors";

const SearchBar = ({ containerStyle, value, onClear, onChangeText }) => {
  return (
    <View style={[styles.container, { ...containerStyle }]}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.searchBar}
        placeholder="Search here.."
      />
      {value ? (
        <TouchableOpacity style={styles.clearIcon} onPress={onClear}>
          <Image
            style={styles.Icon}
            color={colors.PRIMARY}
            source={require("../../../assets/icons/childCross.png")}
            resizeMode="contain"
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    borderWidth: 0.9,
    borderColor: colors.primaryGreen,
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
  },
  Icon: {
    width: 20,
    height: 20,
    tintColor: "green",
  },
});

export default SearchBar;
