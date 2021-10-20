import React from "react";
import { ScrollView, View, Image, Text, StyleSheet } from "react-native";
import { Author, ReadTime } from "./AuthorIndex";
import { vars } from "../../utils";
import colors from "../../config/colors";

function Article({
  route: {
    params: { props },
  },
}) {
  // props: title, content, image, author

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.imageFrame}>
        <Image source={props.image} style={styles.image} />
      </View>
      <View style={styles.contentFrame}>
        <Text style={styles.title}>{props.title}</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: gap.s,
            marginBottom: gap.s * 2,
          }}
        >
          <Author {...props.author} style={{ marginRight: gap.s }} />
          <ReadTime time={props.readTime} />
        </View>
        <Text style={styles.content}>{props.content}</Text>
      </View>
    </ScrollView>
  );
}

const { gap } = vars;

const styles = StyleSheet.create({
  container: {
    zIndex: 10,
  },

  imageFrame: {
    padding: gap.s,
    backgroundColor: colors.background,
  },

  image: {
    width: "100%",
    resizeMode: "contain",
    height: 250,
    marginTop: 20,
  },

  title: {
    fontFamily: "Babbit",
    fontSize: 40,
  },

  contentFrame: {
    marginBottom: gap.m,
    paddingHorizontal: gap.m,
    backgroundColor: colors.background,
  },

  content: {
    fontFamily: "EnglishFont",
    fontSize: 25,
    color: colors.primaryLight,
  },
});

export default Article;
