import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function MediaPlayer() {
  const router = useLocalSearchParams()
  
  return (
    <View
      style={styles.container}
    >
      <Text>Playing {router.soundscape}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2e4bd"
  },
  button:{
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#000000ff"  
  }
})