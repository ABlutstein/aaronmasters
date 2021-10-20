import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import DiaryInputModal from "./DiaryInputModal";
import NotFound from "./NotFound";
import SearchBar from "./SearchBar";
import { useDiary } from "../../contexts/DiaryProvider";
import colors from "../../config/colors";
import DiaryEntry from "./DiaryEntry";

const reverseData = (data) => {
  return data.sort((a, b) => {
    const aInt = parseInt(a.time);
    const bInt = parseInt(b.time);
    if (aInt < bInt) return 1;
    if (aInt == bInt) return 0;
    if (aInt > bInt) return -1;
  });
};

const DiaryFrontPage = ({ user, navigation }) => {
  const [greet, setGreet] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [resultNotFound, setResultNotFound] = useState(false);

  const { diary, setDiary, findDiary } = useDiary();

  const findGreet = () => {
    const hrs = new Date().getHours();
    if (hrs === 0 || hrs < 12) return setGreet("Morning");
    if (hrs === 1 || hrs < 17) return setGreet("Afternoon");
    setGreet("Evening");
  };

  useEffect(() => {
    findGreet();
  }, []);

  const reverseDiary = reverseData(diary);

  const handleOnSubmit = async (title, desc) => {
    const diaries = { id: Date.now(), title, desc, time: Date.now() };
    const updatedDiary = [...diary, diaries];
    setDiary(updatedDiary);
    await AsyncStorage.setItem("diary", JSON.stringify(updatedDiary));
  };

  const openDiaries = (diaries) => {
    navigation.navigate("Diary Entry", { diaries });
  };

  const handleOnSearchInput = async (text) => {
    setSearchQuery(text);
    if (!text.trim()) {
      setSearchQuery("");
      setResultNotFound(false);
      return await findDiary();
    }
    const filteredDiary = diary.filter((diaries) => {
      if (diaries.title.toLowerCase().includes(text.toLowerCase())) {
        return diaries;
      }
    });

    if (filteredDiary.length) {
      setDiary([...filteredDiary]);
    } else {
      setResultNotFound(true);
    }
  };

  const handleOnClear = async () => {
    setSearchQuery("");
    setResultNotFound(false);
    await findDiary();
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={colors.LIGHT} />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={[styles.container]}>
          <Text style={styles.header}>{`Good ${greet} ${user.name}`}</Text>
          {diary.length ? (
            <SearchBar
              value={searchQuery}
              onChangeText={handleOnSearchInput}
              containerStyle={{ marginVertical: 15 }}
              onClear={handleOnClear}
            />
          ) : null}

          {resultNotFound ? (
            <NotFound />
          ) : (
            <FlatList
              data={reverseDiary}
              numColumns={2}
              columnWrapperStyle={{
                justifyContent: "space-between",
                marginBottom: 15,
              }}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <DiaryEntry onPress={() => openDiaries(item)} item={item} />
              )}
            />
          )}

          {!diary.length ? (
            <View
              style={[
                StyleSheet.absoluteFillObject,
                styles.emptyHeaderContainer,
              ]}
            >
              <Text style={styles.emptyHeader}>Add thoughts</Text>
            </View>
          ) : null}
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Image
            style={styles.addBtn}
            source={require("../../../assets/icons/plus.png")}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <DiaryInputModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSubmit={handleOnSubmit}
      />
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 35,
    fontWeight: "bold",
    fontFamily: "Babbit",
    color: colors.primaryGreen,
    paddingTop: 15,
    textAlign: "center",
  },
  container: {
    paddingHorizontal: 20,
    flex: 1,
    paddingBottom: 100,
    zIndex: 1,
    backgroundColor: colors.background,
  },
  emptyHeader: {
    fontSize: 35,
    textTransform: "uppercase",
    fontWeight: "bold",
    opacity: 0.2,
    fontFamily: "Babbit",
  },
  emptyHeaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    zIndex: -1,
  },
  addBtn: {
    bottom: 30,
    width: 70,
    height: 100,
    left: 20,
    tintColor: "orange",
  },

  btnContainer: {
    position: "absolute",
    zIndex: 1,
    bottom: -30,
    right: 30,
  },
});

export default DiaryFrontPage;
