import ImageViewer from "@/components/imageViewer";
import { HeaderTitle } from "@react-navigation/elements";
import { ScrollView, StyleSheet, View } from "react-native";
import { libraryData, SoundscapeItem } from "../../data/soundScapeData";

function LibraryItem(props: { item: SoundscapeItem }) {
  return(
    <>
      <HeaderTitle style={{paddingTop:10, paddingLeft:10}} >{props.item.genre}</HeaderTitle>

      <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap"}}>
        {props.item.soundscapes.map(soundscape => {
          return <ImageViewer key={soundscape.name} imageSource={soundscape.image} imageText={soundscape.name} />
        })}
      </View>
    </>
  );
}

export default function Library() {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        {libraryData.map(item => <LibraryItem key={item.genre} item={item} />)}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  scrollView: {
    backgroundColor: "#f2e4bd"
  }
})