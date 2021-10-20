import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";
import colors from "../../config/colors";

const Start = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.body}>
        <View style={styles.views}>
          <Text style={styles.views}>Welcome to Babbit's memory game</Text>
        </View>
        <Image
          style={styles.timeMachine}
          resizeMode="contain"
          source={require("../../../assets/images/babbitTimeMachine.png")}
        ></Image>
        <View style={[styles.views, { display: "flex", flexDirection: "row" }]}>
          <Text style={styles.startText}>Press </Text>
          <Text style={styles.startTextCentre}>START GAME</Text>
          <Text style={styles.startText}> to begin</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Babbit's memory game")}
        >
          <Text style={styles.appButtonText}> Start Game </Text>
        </TouchableOpacity>
        <View style={styles.views}>
          <Text style={styles.rules}>The rules</Text>
          <Text style={styles.para}>
            Can you help Babbit and his friends remember all the people they
            have seen during their adventures across time?
          </Text>
          <Text style={styles.para}>
            Your task is to click on the cards and try to match up all the
            famous historical characters.{" "}
          </Text>
          <Text style={styles.para}>
            You can click on two cars at a time. If they match you will be able
            to see the historical character you matched facing up. If not the
            cards will return to facing down until another two cards are chosen.
            You will need your wits about you to try and remember where you saw
            the different characters.
          </Text>
          <Text style={styles.para}>
            You will win the game if you match up all the pairs of cards so they
            are front facing.
          </Text>
          <Text style={styles.para}>
            If you find the easy option too easy, well why not try medium or if
            you’re really up to it the hard option!!!
          </Text>
          <Text style={styles.endPara}>Good luck time travellers!</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Babbit's memory game")}
        >
          <Text style={styles.appButtonText}> Start Game </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  timeMachine: {
    height: 300,
    width: 300,
  },

  body: {
    textAlign: "center",
    fontFamily: "Babbit",
    display: "flex",
    alignItems: "center",
    alignContent: "space-between",
    backgroundColor: colors.background,
    height: "100%",
    width: "100%",
    paddingBottom: 20,
  },

  views: {
    margin: 10,
    padding: 10,
    fontFamily: "Babbit",
    fontSize: 40,
    alignContent: "center",
    color: "green",
    textAlign: "center",
  },

  para: {
    margin: 10,
    padding: 10,
    fontFamily: "EnglishFont",
    fontSize: 25,
    alignContent: "center",
    color: "green",
    textAlign: "center",
  },

  rules: {
    margin: 10,
    justifyContent: "center",
    padding: 10,
    fontFamily: "Babbit",
    fontSize: 30,
    color: "green",
    textAlign: "center",
  },

  endPara: {
    margin: 10,
    justifyContent: "center",
    padding: 10,
    fontFamily: "Babbit",
    fontSize: 40,
    color: "green",
    textAlign: "center",
  },

  button: {
    alignItems: "center",
    backgroundColor: "orange",
    padding: 20,
    borderRadius: 40,
  },
  appButtonText: {
    fontSize: 30,
    color: "green",
    alignSelf: "center",
    fontFamily: "Babbit",
  },

  startTextCentre: {
    fontSize: 15,
    fontFamily: "Babbit",
    color: "green",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  startText: {
    fontSize: 15,
    fontFamily: "Babbit",
    color: "green",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  image: {
    borderColor: "silver",
    borderWidth: 1,
    backgroundColor: "#0000",
    borderRadius: 10,
    width: 100,
    height: 100,
  },
});

export default Start;
