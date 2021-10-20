import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Modal,
  StatusBar,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  TouchableOpacity,
} from "react-native";
import colors from "../../config/colors";

const DiaryInputModal = ({ visible, onClose, onSubmit, diaries, isEdit }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const handleModalClose = () => {
    Keyboard.dismiss();
  };

  useEffect(() => {
    if (isEdit) {
      setTitle(diaries.title);
      setDesc(diaries.desc);
    }
  }, [isEdit]);

  const handleOnChangeText = (text, valueFor) => {
    if (valueFor === "title") setTitle(text);
    if (valueFor === "desc") setDesc(text);
  };

  const handleSubmit = () => {
    if (!title.trim() && !desc.trim()) return onClose();

    if (isEdit) {
      onSubmit(title, desc, Date.now());
    } else {
      onSubmit(title, desc);
      setTitle("");
      setDesc("");
    }
    onClose();
  };

  const closeModal = () => {
    if (!isEdit) {
      setTitle("");
      setDesc("");
    }
    onClose();
  };

  return (
    <>
      <StatusBar hidden />
      <Modal visible={visible} animationType="fade">
        <View style={[styles.container]}>
          <TextInput
            value={title}
            onChangeText={(text) => handleOnChangeText(text, "title")}
            placeholder="Title"
            style={[styles.input, styles.title]}
          />
          <TextInput
            value={desc}
            multiline
            placeholder="Note"
            style={[styles.input, styles.desc]}
            onChangeText={(text) => handleOnChangeText(text, "desc")}
          />
          <View style={styles.btnContainer}>
            <TouchableOpacity onPress={handleSubmit}>
              <Image
                style={styles.btnTick}
                source={require("../../../assets/icons/childTick.png")}
                resizeMode="contain"
              />
            </TouchableOpacity>
            {title.trim() || desc.trim() ? (
              <TouchableOpacity onPress={closeModal}>
                <Image
                  style={styles.btnCross}
                  source={require("../../../assets/icons/childCross.png")}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            ) : null}
          </View>
        </View>
        <TouchableWithoutFeedback onPress={handleModalClose}>
          <View style={[styles.modalBG, StyleSheet.absoluteFillObject]} />
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 70,
    backgroundColor: colors.background,
    height: "100%",
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: colors.primaryGreen,
    fontSize: 20,
  },
  title: {
    height: 40,
    marginBottom: 15,
    fontWeight: "bold",
    fontFamily: "Babbit",
    fontSize: 25,
    color: colors.primaryGreen,
  },
  desc: {
    height: 100,
    fontFamily: "EnglishFont",
    color: colors.primaryGreen,
  },
  modalBG: {
    flex: 1,
    zIndex: -1,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 15,
  },
  btnTick: {
    top: 20,
    width: 70,
    height: 70,
    tintColor: "green",
  },
  btnCross: {
    top: 30,
    width: 60,
    height: 60,
    tintColor: "red",
    marginLeft: 40,
  },
});

export default DiaryInputModal;
