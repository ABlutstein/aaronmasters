import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
  Image,
} from "react-native";
import colors from "../../config/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDiary } from "../../contexts/DiaryProvider";
import DiaryInputModal from "./DiaryInputModal";

const formatDate = (ms) => {
  const date = new Date(ms);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hrs = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();

  return `${day}/${month}/${year} - ${hrs}:${min}:${sec}`;
};

const DiaryDetail = (props) => {
  const [diaries, setDiaries] = useState(props.route.params.diaries);
  const { setDiary } = useDiary();
  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const deleteDiaries = async () => {
    const result = await AsyncStorage.getItem("diary");
    let diary = [];
    if (result !== null) diary = JSON.parse(result);

    const newDiary = diary.filter((n) => n.id !== diaries.id);
    setDiary(newDiary);
    await AsyncStorage.setItem("diary", JSON.stringify(newDiary));
    props.navigation.goBack();
  };
  const displayDeleteAlert = () => {
    Alert.alert(
      "Oh noooo - are You Sure!",
      "This action will delete your note permanently!",
      [
        {
          text: "Delete",
          onPress: deleteDiaries,
        },
        {
          text: "No Thanks",
          onPress: () => console.log("no thanks"),
        },
      ],
      {
        cancelable: true,
      }
    );
  };

  const handleUpdate = async (title, desc, time) => {
    const result = await AsyncStorage.getItem("diary");
    let diary = [];
    if (result !== null) diary = JSON.parse(result);

    const newDiary = diary.filter((n) => {
      if (n.id === diaries.id) {
        n.title = title;
        n.desc = desc;
        n.isUpdated = true;
        n.time = time;

        setDiaries(n);
      }
      return n;
    });

    setDiary(newDiary);
    await AsyncStorage.setItem("diary", JSON.stringify(newDiary));
  };
  const handleOnClose = () => setShowModal(false);

  const openEditModal = () => {
    setIsEdit(true);
    setShowModal(true);
  };

  return (
    <>
      <View style={styles.pageContainer}>
        <Text style={styles.time}>
          {diaries.isUpdated
            ? `Updated At ${formatDate(diaries.time)}`
            : `Created At ${formatDate(diaries.time)}`}
        </Text>

        <Text style={styles.title}>{diaries.title}</Text>
        <ScrollView contentContainerStyle={[styles.container]}>
          <Text style={styles.desc}>{diaries.desc}</Text>
        </ScrollView>
        <View style={styles.btnContainer}>
          <TouchableOpacity onPress={displayDeleteAlert}>
            <Image
              style={styles.btnDelete}
              source={require("../../../assets/icons/waste.png")}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={openEditModal}>
            <Image
              style={styles.btnEdit}
              source={require("../../../assets/icons/featherEdit.png")}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        <DiaryInputModal
          isEdit={isEdit}
          diaries={diaries}
          onClose={handleOnClose}
          onSubmit={handleUpdate}
          visible={showModal}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    backgroundColor: colors.background,
    height: "100%",
  },
  container: {
    // flex: 1,
    paddingHorizontal: 30,
    bottom: 50,
  },
  title: {
    fontSize: 25,
    color: colors.primaryGreen,
    fontWeight: "bold",
    marginLeft: 15,
    padding: 15,
    top: 5,
    fontFamily: "Babbit",
  },
  desc: {
    fontSize: 20,
    paddingTop: 50,
    color: colors.primaryGreen,
    fontFamily: "EnglishFont",
  },
  time: {
    textAlign: "right",
    fontSize: 20,
    opacity: 0.5,
    margin: 40,
    fontFamily: "EnglishFont",
    color: "green",
  },
  btnContainer: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    margin: 10,
    height: 150,
    bottom: 50,
    right: 15,
  },

  btnDelete: {
    marginLeft: 80,
    bottom: 670,
    width: 60,
    left: 10,
    tintColor: "orange",
  },

  btnEdit: {
    marginLeft: 20,
    bottom: 262,
    width: 110,
    left: 10,
    marginLeft: 70,
    tintColor: "green",
  },
});

export default DiaryDetail;
