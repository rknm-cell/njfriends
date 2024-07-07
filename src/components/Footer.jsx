import { View, Text, Image, StyleSheet, Pressable  } from 'react-native'
import React, { useState } from 'react'
import LikeImage from '../../assets/images/like.png'
import {Entypo, AntDesign, FontAwesome5, MaterialCommunityIcons} from "@expo/vector-icons";

const Footer = ({post}) => {
  const [isLiked, setIsLiked] = useState(false)
  return (
    <View style={styles.footer}>
    <View style={styles.statsRow}>
    <Image source={LikeImage} style={styles.likeIcon} />
    <Text style={styles.likedBy}>
      Elon Musk and {post.numberOfLikes} others
    </Text>
    <Text style={styles.shares}>{post.numberOfShares} shares</Text>
  </View>
    <View style={styles.buttonsRow}>
    <View style={styles.iconButton}>
      <Pressable onPress={()=> setIsLiked(!isLiked)}
        style={styles.iconButton}
      >
        <AntDesign name="like2" size={18} color={isLiked ? "royalblue":"gray"}/>
        <Text style={[styles.iconButtonText, {color: isLiked ? "royalblue" : "gray"}]}>Like
        </Text>
        </Pressable>
    </View>
    <View style={styles.iconButton}>
        <FontAwesome5 name="comment-alt" size={16} color="gray"/>
        <Text style={styles.iconButtonText}>Comment</Text>

    </View>
    <View style={styles.iconButton}>
        <MaterialCommunityIcons
        name="share-outline"
        size={25}
        color="gray"
        />
    </View>

    </View>

</View>
  )
}

export default Footer
const styles = StyleSheet.create({
	
	// Footer
  footer: {
    paddingHorizontal: 10,
  },

  // Stats Row
  statsRow: {
    flexDirection: "row",
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingVertical: 10,
    borderColor: "lightgray",
  },
  likeIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  likedBy: {
    color: "gray",
  },
  shares: {
    color: "gray",
    marginLeft: "auto",
  },
	buttonsRow:{
        marginVertical: 10,
        flexDirection: "row",
        justifyContent: "space-around",
    },
    iconButton: {
        flexDirection: "row",
        alignItems: "center",
    },
    iconButtonText:{
        color: "gray",
        marginLeft: 5,
        fontWeight: "500"
    }
});