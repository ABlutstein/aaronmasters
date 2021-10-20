import React, { useState } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import PostCard from "../components/babbitStoriesPosts/PostCard";
import { vars } from "../utils";
import colors from "../config/colors";
import stories from "../stories";

function BabbitStories(props) {
  const [refreshing, setRefreshing] = useState(false);

  return (
    <View style={styles.container}>
      <FlatList
        onRefresh={(arg) => {
          console.log(arg);
          setRefreshing(true);
          setTimeout(() => setRefreshing(false), 2000);
        }}
        {...{ refreshing }}
        data={stories}
        renderItem={({ item }) => (
          <PostCard {...item} navigation={props.navigation} />
        )}
        keyExtractor={(story) => story.id}
        showsVerticalScrollIndicator={false}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: colors.secondaryTwo,
  },

  list: {
    flex: 1,
    padding: vars.gap.s,
    marginBottom: vars.gap.s,
  },
});

export default BabbitStories;
