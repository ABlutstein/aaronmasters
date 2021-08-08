import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text, Button, TouchableOpacity } from "react-native";
import { withOrientation } from "react-navigation";

function WelcomeScreen({navigation}) {
  return (
    <ImageBackground
    style={styles.background}
  >
    <View style={styles.logoContainer}>
      <Image style={styles.logo} source={require("../../assets/babbit-logo.png")} />
    </View>
   
   <View>

   <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Components')}
      >
        <Text style={styles.text}>About</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('List')}
      >
        <Text style={styles.text}>List</Text>
      </TouchableOpacity>
      

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Color')}
      >
        <Text style={styles.text}>Colours</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Welcome')}
      >
        <Text style={styles.text}>Welcome</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('View')}
      >
        <Text style={styles.text}>View</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Counter')}
      >
        <Text style={styles.text}>Counter</Text>
      </TouchableOpacity>

    </View>
       <View style={styles.loginButton}></View>
    <View style={styles.registerButton}></View>
  </ImageBackground>
);
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "yellow",
  },
  loginButton: {
    width: "100%",
    height: 70,
    marginTop: 20,
    backgroundColor: "green",
  },
  logo: {
      marginTop: -100,
    width: 400,
    height: 220,
  },
  welcomeLogo: {
    width: 49,
    height: 60,
  },
  button: {
    alignItems: "center",
    width: 200,
    marginTop: 20,
    marginBottom: 5,
    backgroundColor: "green",
    padding: 15,
    borderRadius: 50,
  },
  logoButton: {
    width: 50,
    height: 100,
  },
  text: {
      fontSize: 15,
      color: "white"
  },
 
  logoContainer: {
    position: "absolute",
    top: 120,
    alignItems: "center",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "orange",
  },
});

export default WelcomeScreen;