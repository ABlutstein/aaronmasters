import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from "react-native";
import ResetButton from "./ResetButton";
import Board from "./board/Board";
import initializeDeck from "./deck";

export default function CardApp() {
  const [flipped, setFlipped] = useState([]);
  const [cards, setCards] = useState([]);
  const [solved, setSolved] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [level, setLevel] = useState("easy");

  useEffect(() => {
    setSolved([]);
    setCards(initializeDeck(level));
  }, [level]);

  const handleClick = (id) => {
    setDisabled(true);
    if (flipped.length === 0) {
      setFlipped([id]);
      setDisabled(false);
    } else {
      if (sameCardClicked(id)) {
        setDisabled(false);
        return;
      }
      setFlipped([flipped[0], id]);
      if (isMatch(id)) {
        setSolved([...solved, flipped[0], id]);
        resetCards();
      } else {
        setTimeout(resetCards, 300);
      }
    }
  };

  const resetCards = () => {
    setFlipped([]);
    setDisabled(false);
  };

  const sameCardClicked = (id) => flipped.includes(id);

  const isMatch = (id) => {
    const flippedCard = cards.find((card) => flipped[0] === card.id);
    const clickedCard = cards.find((card) => card.id === id);
    return flippedCard.type === clickedCard.type;
  };

  const playAgain = () => {
    setFlipped([]);
    setSolved([]);
    setCards(initializeDeck(level));
  };

  if (solved.length === cards.length && solved.length > 0) {
    alert("👏👏🏻👏🏼 YOU SOLVED BABBIT'S MEMORY GAME!! 👏🏽👏🏾👏🏿");
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View
        style={{
          width: "100%",
          height: "100%",
          alignItems: "center",
          backgroundColor: "honeydew",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            margin: 10,
          }}
        >
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "mediumseagreen" }]}
            onPress={() => setLevel("easy")}
          >
            <Image
              source={require("../../../assets/images/ladybird1.png")}
              style={styles.buttonLogo}
            />
            <Text style={styles.appButtonText}> Easy</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "darkorange" }]}
            onPress={() => setLevel("medium")}
          >
            <Image
              source={require("../../../assets/images/bee1.png")}
              style={styles.buttonLogo}
            />
            <Text style={styles.appButtonText}> Medium </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "crimson" }]}
            onPress={() => setLevel("hard")}
          >
            <Image
              source={require("../../../assets/images/Owl4.png")}
              style={styles.buttonLogo}
            />
            <Text style={styles.appButtonText}> Hard </Text>
          </TouchableOpacity>
        </View>
        <Board
          cards={cards}
          flipped={flipped}
          handleClick={handleClick}
          disabled={disabled}
          solved={solved}
          level={level}
        />
        <ResetButton playAgain={playAgain} />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    padding: 10,
    margin: 10,
    borderRadius: 30,
    width: 110,
  },
  appButtonText: {
    fontSize: 22,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
    fontFamily: "Babbit",
  },
  buttonLogo: {
    height: 70,
    width: 80,
    resizeMode: "contain",
  },
});
