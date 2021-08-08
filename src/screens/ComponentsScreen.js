import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const name = 'by Aaron';

  return (
    <View>
      <Text style={styles.textStyle}>Incredible Histories!</Text>
      <Text style={styles.subHeaderStyle}>Babbit and friends {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45
  },
  subHeaderStyle: {
    fontSize: 20
  }
});

export default ComponentsScreen;