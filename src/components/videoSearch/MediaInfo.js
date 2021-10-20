import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
  LayoutAnimation,
} from "react-native";
import { WebView } from "react-native-webview";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faChevronCircleUp,
  faChevronCircleDown,
} from "@fortawesome/free-solid-svg-icons";

const MediaInfo = ({
  scroll,
  selectedIndex,
  selectedId,
  selectedVideoTitle,
  selectedVideoDesc,
}) => {
  const [showPreview, setShowPreview] = useState(false);
  let videoSrc = `https://www.youtube.com/embed/${selectedId}`;

  useEffect(() => {}, [showPreview]);

  const showVideoPreview = () => {
    if (!showPreview) {
      scroll(selectedIndex);
    }
    LayoutAnimation.easeInEaseOut();
    setShowPreview(!showPreview);
  };

  return (
    <View style={showPreview ? styles.displayvideo : styles.hidevideo}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  displayvideo: {
    height: 330,
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
