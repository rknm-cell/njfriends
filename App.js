import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Image, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import LikeImage from "./assets/images/like.png";

import Post from "./src/components/Post";
import FeedScreen from "./src/screens/FeedScreen";
import CreatePostScreen from "./src/screens/CreatePostScreen";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import Navigator from "./src/navigation";

export default function App() {
  return (
   
      <SafeAreaProvider>
          <StatusBar style="auto" />
          <Navigator/>
        
      </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
  },
});
