import { View, Text, Image } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import {Entypo} from "@expo/vector-icons";

const Header = ({ post }) => {
  console.log(post.User)
  return (
    <View style={styles.header}>
      <Image source={{ uri: post.User?.image }} style={styles.profileImage} />
      <View>
        <Text style={styles.name}>{post.User?.name}</Text>
        <Text style={styles.subtitle}> {post.createdAt}</Text>
      </View>
      <Entypo
        name="dots-three-horizontal"
        size={18}
        color="gray"
        style={styles.icon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  post: {
    backgroundColor: "#fff",
    marginVertical: 5,
  },
  header: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontWeight: "500",
  },
  subtitle: {
    color: "gray",
  },
  icon: {
    marginLeft: "auto",
  },
});

export default Header;
