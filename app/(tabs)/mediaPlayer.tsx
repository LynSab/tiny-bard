import Player from '@/components/player';
import { HeaderTitle } from "@react-navigation/elements";
import { useLocalSearchParams } from "expo-router";
import { useState } from 'react';
import { StyleSheet, View } from "react-native";

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

      <Player mediaText="Master Audio" status={mediaStatus} statusFunction={changeMediaStatus} />

      <Player mediaText="Music Audio" status={mediaStatus} statusFunction={changeMediaStatus} />

      <Player mediaText="Backround Noise 1 Audio" status={mediaStatus} statusFunction={changeMediaStatus} />

      <Player mediaText="Backround Noise 2 Audio" status={mediaStatus} statusFunction={changeMediaStatus} />

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