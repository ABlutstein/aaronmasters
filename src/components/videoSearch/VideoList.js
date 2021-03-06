import React, { useState, useEffect } from "react";
import {
  FlatList,
  RefreshControl,
  StyleSheet,
  Image,
  Text,
  View,
  Alert,
  Keyboard,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
  Linking,
} from "react-native";
import MediaInfo from "./MediaInfo";
import SearchVideo from "./Search";
import * as GlobalConstants from "../../config/Settings";
import colors from "../../config/colors";

const SCREEN_HEIGHT = Dimensions.get("window").height;
let pageURL = "";
let searchString = "";

const Item = ({ item, onPress, style, styleT }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={[styles.title, styleT]}>{item.title}</Text>
  </TouchableOpacity>
);
let flatListRef = null;

const VideoList = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadedData, setLoadedData] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const [selectedVideoTitle, setSelectedVideoTitle] = useState("");
  const [selectedVideoDesc, setSelectedVideoDesc] = useState("");
  const [selectedVideoChannel, setSelectedVideoChannel] = useState("");

  useEffect(() => {
    if (loadedData.length > 0) {
      let idx = loadedData.findIndex(({ id }) => id === selectedId);
      setSelectedVideoTitle(loadedData[idx].title);
      setSelectedVideoDesc(loadedData[idx].desc);
      setSelectedVideoChannel(loadedData[idx].channel);
    }
  }, [loading, selectedId]);

  const errorAlert = () =>
    Alert.alert(
      "Search Error",
      "No records found for this search",
      [
        {
          text: "Retry",
          onPress: () => loadVideoList(searchString),
        },
        {
          text: "OK",
          onPress: () => console.log("Error: OK Pressed"),
          style: "default",
        },
      ],
      { cancelable: false }
    );

  const scroll = (idx) => {
    if (idx) {
      flatListRef.scrollToIndex({ animated: true, index: idx });
    }
  };

  const loadVideoList = async (inputText) => {
    if (inputText !== "" && inputText !== undefined) {
      searchString = inputText;
      setLoading(true);
      pageURL = GlobalConstants.YTURL + inputText;
      await fetch(pageURL, {
        method: "GET",
        headers: { "Content-Type": "application/json;charset=utf-8" },
      })
        .then((response) => response.json())
        .then((res) => {
          setNextPage(res.nextPageToken);
          if (res.items.length > 0) {
            Keyboard.dismiss();
            let newList = [];
            res.items.forEach((resItem) => {
              newList.push({
                id: resItem.id.videoId,
                title: resItem.snippet.title,
                desc: resItem.snippet.description,
                channel: resItem.snippet.channelTitle,
              });
            });
            setLoadedData(newList);
            console.log("Initial LIST", newList);
            setSelectedVideoTitle(newList[0].title);
            setSelectedVideoDesc(newList[0].desc);
            setSelectedVideoChannel(newList[0].channel);
            setSelectedId(newList[0].id);
          } else {
            setLoadedData([]);
            setSelectedVideoTitle("");
            setSelectedVideoDesc("");
            setSelectedVideoChannel("");
            errorAlert();
            setSelectedId(null);
            setSelectedIndex(0);
          }
        });
      setLoading(false);
    } else {
      setLoadedData([]);
      setSelectedVideoTitle("");
      setSelectedVideoDesc("");
      setSelectedVideoChannel("");
      setSelectedId(null);
      setSelectedIndex(0);
    }
  };

  const loadMore = async () => {
    await fetch(pageURL + GlobalConstants.YTPAGE.YTMAXRECORDS + nextPage, {
      method: "GET",
      headers: { "Content-Type": "application/json;charset=utf-8" },
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.items.length > 0) {
          setNextPage(res.nextPageToken);
          let newList = loadedData;
          res.items.forEach((resItem) => {
            newList.push({
              id: resItem.id.videoId,
              title: resItem.snippet.title,
              desc: resItem.snippet.description,
              channel: resItem.snippet.channelTitle,
            });
          });
          setLoadedData(newList);
          console.log("Next page LIST", newList);
        } else {
          setNextPage(null);
        }
      });
  };

  const onEndReached = () => {
    if (nextPage) {
      loadMore();
    }
  };

  const onRefresh = () => {
    setLoading(true);
    loadVideoList(searchString);
    setLoading(false);
  };

  const renderItem = ({ item, index }) => {
    const backgroundColor = item.id === selectedId ? "orange" : "green";
    const color = item.id === selectedId ? "green" : "yellow";
    const borderColor = "rgb(240, 240, 240)";
    const borderBottomColor = "rgb(210, 210, 210)";

    return (
      <View style={{ flexDirection: "row", marginTop: 5, marginBottom: 0 }}>
        <Image
          source={{ uri: `https://i.ytimg.com/vi/${item.id}/hqdefault.jpg` }}
          style={{
            width: "20%",
            height: 80,
            borderRadius: 5,
          }}
        />
        <Item
          item={item}
          index={index}
          onPress={() => {
            setSelectedId(item.id);
            setSelectedIndex(index);
          }}
          style={{
            borderColor,
            backgroundColor,
            borderBottomColor,
            width: "79%",
            height: 80,
          }}
          styleT={{ color }}
        />
      </View>
    );
  };

  return (
    <View style={styles.videolist}>
      <View style={styles.videoarea}>
        <SearchVideo onSearchVideo={loadVideoList} />
        {loading ? (
          <View style={styles.loader}>
            <ActivityIndicator size="large" color="rgb(228, 29, 62)" />
          </View>
        ) : (
          <View style={styles.playvideo}>
            <View style={styles.main}>
              <Text style={styles.main}>Featured video</Text>
            </View>
            <FlatList
              style={styles.searchlist}
              ListHeaderComponent={
                <TouchableOpacity
                  style={styles.main}
                  onPress={() => {
                    Linking.openURL(
                      "https://www.youtube.com/watch?v=tqY-_wAH4Wg"
                    );
                  }}
                >
                  <Image
                    style={styles.image}
                    resizeMode="contain"
                    source={require("../../../assets/images/stories/Egypt.jpg")}
                  />
                  <Image
                    style={styles.videoIcon}
                    source={require("../../../assets/icons/video2.png")}
                  />
                </TouchableOpacity>
              }
              data={loadedData}
              renderItem={renderItem}
              ref={(ref) => (flatListRef = ref)}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              extraData={selectedId}
              onEndReachedThreshold={1}
              onEndReached={onEndReached}
              refreshControl={
                <RefreshControl refreshing={loading} onRefresh={onRefresh} />
              }
            />
            <MediaInfo
              scroll={scroll}
              selectedIndex={selectedIndex}
              selectedId={selectedId}
              selectedVideoTitle={selectedVideoTitle}
              selectedVideoDesc={selectedVideoDesc}
              selectedVideoChannel={selectedVideoChannel}
            />
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    alignItems: "center",
    fontFamily: "EnglishFont",
    fontSize: 26,
    color: "green",
    paddingTop: 5,
    backgroundColor: colors.background,
  },
  image: {
    width: "100%",
    resizeMode: "contain",
    height: 250,
  },

  videoIcon: {
    width: 60,
    height: 60,
    bottom: 150,
    tintColor: colors.primaryGreen,
  },

  videolist: {
    flex: 1,
    backgroundColor: "rgb(240, 240, 240)",
    width: "100%",
  },
  videoarea: {
    flex: 1,
    backgroundColor: "rgb(240, 240, 240)",
    alignItems: "center",
  },
  loader: {
    justifyContent: "center",
    paddingTop: "80%",
  },
  item: {
    padding: 10,
    marginVertical: 0,
    marginHorizontal: 5,
    borderRadius: 5,
    borderWidth: 1,
  },
  title: {
    fontSize: 20,
    textAlign: "left",
    fontFamily: "EnglishFont",
  },
  searchlist: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 10,
    zIndex: 200,
    width: "100%",
    height: SCREEN_HEIGHT / 2.5,
  },

  playvideo: {
    flex: 1,
    backgroundColor: "rgb(240, 240, 240)",
    width: "100%",
    height: "40%",
    overflow: "hidden",
  },
});

export default VideoList;
