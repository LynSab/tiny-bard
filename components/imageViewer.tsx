import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  imageSource: string,
  imageText: string
}

export default function ImageViewer({ imageSource, imageText }: Props){
  return (
    <View style={styles.imageContainer}>
      <Image source={imageSource} style={styles.image} />
      <Text>{imageText}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    padding: 10,
    margin: 10,
    flex: 1,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 18,
  },
})