import React, {useState} from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Image, View } from "react-native";


import Post from "./Post";


export default function FeedPost({post}) {
    const [isLiked, setIsLiked] = useState(false);


  return (
    <View style={styles.container}>
      <Post post={post}/>
      <StatusBar style="auto" />
    </View>
  );
}







const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  }
});
