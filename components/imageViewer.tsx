import { Image } from "expo-image";
import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  imageSource: string;
  imageText: string;
}

export default function ImageViewer({ imageSource, imageText }: Props){
  return (
    <View style={styles.imageContainer}>
      <Pressable onPress={() => router.push(`/mediaPlayer?soundscape=${imageText}`)}>
        <Image source={imageSource} style={styles.image} />
      </ Pressable>
      <Text>{imageText}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    padding: 5,
    margin: 5,
  },
  image: {
    width: 100,
    height: 100,
  },
})