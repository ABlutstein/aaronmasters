import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  Dimensions,
  TouchableOpacity,
  LayoutAnimation,
} from "react-native";
import { WebView } from "react-native-webview";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faChevronCircleUp,
  faChevronCircleDown,
} from "@fortawesome/free-solid-svg-icons";
import * as ScreenOrientation from "expo-screen-orientation";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;
const topPortrait =
  (SCREEN_HEIGHT > SCREEN_WIDTH ? SCREEN_HEIGHT : SCREEN_WIDTH) *
  (Platform.OS == "android" ? 0.7 : 0.738);
const topLandscape =
  (SCREEN_HEIGHT > SCREEN_WIDTH ? SCREEN_WIDTH : SCREEN_HEIGHT) * 0.58;
const topLandscapeWeb = SCREEN_HEIGHT * 0.81;

const MediaInfo = ({
  scroll,
  selectedIndex,
  selectedId,
  selectedVideoTitle,
  selectedVideoDesc,
  selectedVideoChannel,
}) => {
  const DEVICE_ORIENTATION = Object.freeze({
    PORTRAIT: 0,
    LANDSCAPE: 1,
  });

  const [showPreview, setShowPreview] = useState(false);
  const [orientation, setOrientation] = useState(0);
  let videoSrc = `https://www.youtube.com/embed/${selectedId}`;

  useEffect(() => {}, [showPreview]);

  const setOrientSize = async () => {
    let actualOrientation = await ScreenOrientation.getOrientationAsync();
    if (
      actualOrientation === ScreenOrientation.Orientation.LANDSCAPE_LEFT ||
      actualOrientation === ScreenOrientation.Orientation.LANDSCAPE_RIGHT
    ) {
      setOrientation(DEVICE_ORIENTATION.LANDSCAPE);
    } else {
      setOrientation(DEVICE_ORIENTATION.PORTRAIT);
    }
  };
  ScreenOrientation.addOrientationChangeListener(setOrientSize);

  const showVideoPreview = () => {
    if (!showPreview) {
      scroll(selectedIndex);
    }
    LayoutAnimation.easeInEaseOut();
    setShowPreview(!showPreview);
  };

  return (
    <View
      style={
        showPreview
          ? orientation === DEVICE_ORIENTATION.PORTRAIT
            ? styles.displayvideo
            : styles.displayvideoLandscape
          : orientation === DEVICE_ORIENTATION.PORTRAIT
          ? styles.hidevideo
          : styles.hidevideoLandscape
      }
    >
      <View style={{ flex: 1, backgroundColor: "transparent" }}>
        <View style={styles.toucharea}>
          <TouchableOpacity
            onPress={showVideoPreview}
            hitSlop={{ top: 20, left: 150, bottom: 20, right: 150 }}
          >
            <FontAwesomeIcon
              icon={showPreview ? faChevronCircleUp : faChevronCircleDown}
              size={32}
              style={styles.chevron}
            />
          </TouchableOpacity>
        </View>
        {Platform.OS !== "web" ? (
          <WebView useWebKit={true} source={{ uri: videoSrc }} />
        ) : (
          <iframe src={videoSrc} height={"100%"} style={{ borderWidth: 0 }} />
        )}
      </View>
      {orientation === DEVICE_ORIENTATION.PORTRAIT ? (
        <View style={styles.bottom}>
          <Text style={styles.bold}>
            Title:{" "}
            <Text style={styles.frame}>
              {selectedVideoTitle != ""
                ? selectedVideoTitle.length > 42
                  ? selectedVideoTitle.substring(0, 42) + "..."
                  : selectedVideoTitle
                : "No title"}
            </Text>
          </Text>
          <Text style={styles.bold}>
            Description:{" "}
            <Text style={styles.frame}>
              {selectedVideoDesc != ""
                ? selectedVideoDesc.length > 36
                  ? selectedVideoDesc.substring(0, 36) + "..."
                  : selectedVideoDesc
                : "No description"}
            </Text>
          </Text>
        </View>
      ) : (
        <View style={styles.bottom}>
          <Text style={styles.bold}>
            Title:{" "}
            <Text style={styles.frame}>
              {selectedVideoTitle != ""
                ? selectedVideoTitle.length > 80
                  ? selectedVideoTitle.substring(0, 80) + "..."
                  : selectedVideoTitle
                : "No title"}
            </Text>
          </Text>
          <Text style={styles.bold}>
            Description:{" "}
            <Text style={styles.frame}>
              {selectedVideoDesc != ""
                ? selectedVideoDesc.length > 79
                  ? selectedVideoDesc.substring(0, 79) + "..."
                  : selectedVideoDesc
                : "No description"}
            </Text>
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  displayvideo: {
    height: 330,
    width: "100%",
    zIndex: 200,
  },
  displayvideoLandscape: {
    flex: 4,
    width: "100%",
    zIndex: 200,
  },
  hidevideo: {
    flex: 1,
    width: "100%",
    zIndex: 200,
    position: "absolute",
    bottom: 0,
    backgroundColor: "transparent",
  },
  hidevideoLandscape: {
    flex: 1,
    width: "100%",
    zIndex: 200,
    position: "absolute",
    top: topLandscape,
    backgroundColor: "transparent",
  },
  bottom: {
    backgroundColor: "green",
    width: "100%",
    padding: 5,
    paddingBottom: 5,
    height: 70,
  },
  frame: {
    color: "yellow",
    width: "100%",
    height: 30,
    padding: 5,
    fontWeight: "normal",
  },
  bold: {
    width: "100%",
    height: 30,
    padding: 5,
    paddingLeft: 0,
    fontWeight: "600",
    fontFamily: "EnglishFont",
    fontSize: 17,
    color: "yellow",
  },
  toucharea: {
    width: "100%",
    backgroundColor: "yellow",
    minHeight: 30,
    opacity: 0.7,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "rgb(10, 10, 10)",
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  chevron: {
    width: "100%",
    color: "green",
  },
});

export default MediaInfo;
