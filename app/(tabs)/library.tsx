import ImageViewer from "@/components/imageViewer";
import { HeaderTitle } from "@react-navigation/elements";
import { StyleSheet, View } from "react-native";

const CaveImage = require("../../assets/images/cave-resized.jpg")
const ForestImage = require("../../assets/images/forest-resized.jpg")
const MountainImage = require("../../assets/images/mountains-resized.jpg")
const MeadowsImage = require("../../assets/images/meadows-resized.jpg")
const BattleImage = require("../../assets/images/battle-resized.jpg")
const VillageImage = require("../../assets/images/village-resized.jpg")
const SpaceTravelImage = require("../../assets/images/space-travel-resized.jpg")
const SpaceshipImage = require("../../assets/images/spaceship-interior-resized.jpg")
const AlienImage = require("../../assets/images/alien-resized.jpg")

export default function Library() {
  return (
    <View style={styles.container}>
      <HeaderTitle style={{paddingTop:10}} >Fantasy</HeaderTitle>

      <View style={styles.row}>
        <ImageViewer imageSource={CaveImage} imageText="Cave" />
        <ImageViewer imageSource={ForestImage} imageText="Forest" />
        <ImageViewer imageSource={MountainImage} imageText="Mountain" />
      </View>

      <View style={styles.row}>
        <ImageViewer imageSource={MeadowsImage} imageText="Meadows" />
        <ImageViewer imageSource={BattleImage} imageText="Battle" />
        <ImageViewer imageSource={VillageImage} imageText="Village" />
      </View>

      <HeaderTitle>Sci-Fi</HeaderTitle>

      <View style={styles.row}>
        <ImageViewer imageSource={SpaceTravelImage} imageText="Space Travel" />
        <ImageViewer imageSource={SpaceshipImage} imageText="Spaceship" />
        <ImageViewer imageSource={AlienImage} imageText="Alien" />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f2e4bd",
    flexDirection: "column"
  },
  row: {
    flex: 1,
    flexDirection: "row"
  },
})