import FontAwesome from '@expo/vector-icons/FontAwesome';
import Slider from '@react-native-community/slider';
import { StyleSheet, Text, View } from "react-native";

type Props = {
  mediaText: string;
  status: "play" | "stop";
  statusFunction: () => void;
}

export default function Player({ mediaText, status, statusFunction }: Props){
  return (
    <View style={styles.container}>
      <Text>{mediaText}:</Text>
      <View style={{flex:1, flexDirection:"row"}}>
        <FontAwesome name={ status } size={30} color="black" onPress={statusFunction} style={{paddingRight:10}}/>
        <FontAwesome name="volume-down" size={30} color="black" style={{paddingLeft:10}}/>
        <Slider 
          style={{width:250, height:30}}
          minimumValue={0}
          maximumValue={10}
          step={1}
          value={5}
        />
        <FontAwesome name="volume-up" size={30} color="black" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 10,
    backgroundColor: "#f2e4bd"
  },
})