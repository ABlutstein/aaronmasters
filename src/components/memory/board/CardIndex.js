import React, { useEffect, useRef } from "react";

import {
  View,
  StyleSheet,
  Image,
  Animated,
  TouchableOpacity,
} from "react-native";
import babbitLogo from "../../../../assets/images/babbitLogo.png";
import Caesar from "../../../../assets/images/Caesar.png";
import Patton from "../../../../assets/images/Patton.png";
import Columbus from "../../../../assets/images/Columbus.png";
import Gandhi from "../../../../assets/images/Gandhi.png";
import Galileo from "../../../../assets/images/Galileo.png";
import Elizabeth from "../../../../assets/images/Elizabeth.png";
import Antoinette from "../../../../assets/images/Antoinette.png";
import Nightgale from "../../../../assets/images/Nightgale.png";
import Earhart from "../../../../assets/images/Earhart.png";
import Tut from "../../../../assets/images/Tut.png";
import Newton from "../../../../assets/images/Newton.png";
import Cleopatra from "../../../../assets/images/Cleopatra.png";

const front = {
  Caesar,
  Patton,
  Columbus,
  Gandhi,
  Galileo,
  Elizabeth,
  Antoinette,
  Nightgale,
  Tut,
  Newton,
  Cleopatra,
  Earhart,
};

export default function Card({
  handleClick,
  id,
  type,
  flipped,
  solved,
  disabled,
}) {
  const animate = useRef(new Animated.Value(0));
  const onClick = () => {
    handleClick(id);
  };

  useEffect(() => {
    doAFlip();
  }, [flipped, solved]);

  const doAFlip = () => {
    Animated.timing(animate.current, {
      duration: 300,
      toValue: 180,
      useNativeDriver: true,
    }).start(() => afterFlip());
  };

  const afterFlip = () => {
    if (!flipped) {
      Animated.timing(animate.current, {
        duration: 300,
        toValue: 0,
        useNativeDriver: true,
      }).start();
    }
    if (solved) {
      Animated.timing(animate.current, {
        duration: 300,
        toValue: 180,
        useNativeDriver: true,
      }).start();
    }
  };

  const interpolatedValueFront = animate.current.interpolate({
    inputRange: [0, 180],
    outputRange: ["0deg", "180deg"],
  });
  const interpolatedValueBack = animate.current.interpolate({
    inputRange: [0, 180],
    outputRange: ["180deg", "0deg"],
  });

  const rotateFront = {
    transform: [
      {
        rotateY: interpolatedValueFront,
      },
    ],
  };
  const rotateBack = {
    transform: [
      {
        rotateY: interpolatedValueBack,
      },
    ],
  };
  return (
    <View style={styles.flipContainer}>
      <TouchableOpacity onPress={() => (disabled ? null : onClick())}>
        <Animated.View style={[styles.front, rotateFront]}>
          <Image title="Back" style={styles.front} source={babbitLogo} />
        </Animated.View>
        <Animated.View style={[styles.back, rotateBack]}>
          <Image title="Front" style={styles.back} source={front[type]} />
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  flipContainer: {
    transform: [{ perspective: 750 }],
    display: "flex",
    borderColor: "silver",
    borderStyle: "solid",
    borderWidth: 1,
    backgroundColor: "#0000",
    width: 100,
    height: 160,
    borderRadius: 10,
  },

  back: {
    zIndex: 2,
    width: 70,
    height: 150,
    resizeMode: "contain",
    // transform: [{ rotateY: "0deg" }],
    backfaceVisibility: "hidden",
    position: "absolute",
    left: 6,
    top: 2,
    borderRadius: 10,
  },

  front: {
    width: 100,
    height: 160,
    // transform: [{ rotateY: "180deg" }],
    backfaceVisibility: "hidden",
    // position: "absolute",
    left: 0,
    top: 0,
    borderRadius: 10,
  },
});
