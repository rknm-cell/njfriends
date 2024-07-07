import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import Footer from "./Footer";
import Body from "./Body";
import Header from "./Header";

const Post = ({ post }) => {
  return (
    <View style={styles.container}>
      <View style={styles.post}>
        <Header post={post} />
        <Body post={post} />
        <Footer post={post} />
        <View style={styles.footer}></View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  post: {
    backgroundColor: "#fff",
    marginVertical: 5,
  },
});

export default Post;
