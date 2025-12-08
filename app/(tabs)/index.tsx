import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text>Hello! World</Text>
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