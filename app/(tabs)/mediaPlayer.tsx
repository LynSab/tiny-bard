import FontAwesome from '@expo/vector-icons/FontAwesome';
import Slider from '@react-native-community/slider';
import { HeaderTitle } from "@react-navigation/elements";
import { useLocalSearchParams } from "expo-router";
import { useState } from 'react';
import { StyleSheet, Text, View } from "react-native";

export default function MediaPlayer() {
  const router = useLocalSearchParams<{ soundscape: string }>();
  const [mediaStatus, setMediaStatus] = useState<"play" | "stop">("play");

  function changeMediaStatus() {
    if (mediaStatus === "play"){
      setMediaStatus("stop");
    } else {
      setMediaStatus("play");
    }
  }

  const headerTitleValue = `Now playing ${router.soundscape}`

  return (
    <View style={styles.container}>
      <HeaderTitle>{headerTitleValue}</HeaderTitle>

      <View style={styles.container}>
        <Text>Master Audio:</Text>
        <View style={{flex:1, flexDirection:"row"}}>
          <FontAwesome name={mediaStatus} size={30} color="black" onPress={changeMediaStatus} style={{paddingRight:10}}/>
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

      <View style={styles.container}>
        <Text>Music Audio:</Text>
        <View style={{flex:1, flexDirection:"row"}}>
          <FontAwesome name={mediaStatus} size={30} color="black" onPress={changeMediaStatus} style={{paddingRight:10}}/>
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

      <View style={styles.container}>
        <Text>Backround Noise 1 Audio:</Text>
        <View style={{flex:1, flexDirection:"row"}}>
          <FontAwesome name={mediaStatus} size={30} color="black" onPress={changeMediaStatus} style={{paddingRight:10}}/>
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

      <View style={styles.container}>
        <Text>Backround Noise 2 Audio:</Text>
        <View style={{flex:1, flexDirection:"row"}}>
          <FontAwesome name={mediaStatus} size={30} color="black" onPress={changeMediaStatus} style={{paddingRight:10}}/>
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

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 10,
    backgroundColor: "#f2e4bd"
  },

})