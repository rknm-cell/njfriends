import { View, Text, Image } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'

const Body = ({post}) => {
  return (
    <View>
      <Text style={styles.description}>{post.description}</Text>
      {post.image && (
        <Image
          source={{ uri: post.image }}
          style={styles.image}
          resizeMode="cover"
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
	
	// Body
  description: {
    lineHeight: 20,
    padding: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
	
});

export default Body