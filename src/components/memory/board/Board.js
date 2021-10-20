import React from "react";
import { View, StyleSheet } from "react-native";
import Card from "./CardIndex";

export default function Board({
  solved,
  disabled,
  cards,
  flipped,
  handleClick,
  // navigation,
}) {
  return (
    <View>
      <View style={styles.body}>
        {cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            type={card.type}
            flipped={flipped.includes(card.id)}
            handleClick={handleClick}
            solved={solved.includes(card.id)}
            disabled={disabled || solved.includes(card.id)}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    margin: 10,
    padding: 10,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "space-between",
    width: 400,
  },
});
