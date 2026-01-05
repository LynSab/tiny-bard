import ImageViewer from "@/components/imageViewer";
import { HeaderTitle } from "@react-navigation/elements";
import { ScrollView, StyleSheet, View } from "react-native";

const libraryData: { genre: string; soundscapes: {name: string; image: string}[] }[]= [
  {
    genre: "Fantasy", 
    soundscapes: [
      {
        name: "Cave", 
        image: require("../../assets/images/cave-resized.jpg")
      }, 
      {
        name: "Forest", 
        image: require("../../assets/images/forest-resized.jpg")
      },
      {
        name: "Mountain", 
        image: require("../../assets/images/mountains-resized.jpg")
      },
      {
        name: "Medows", 
        image: require("../../assets/images/meadows-resized.jpg")
      },
      {
        name: "Battle", 
        image: require("../../assets/images/battle-resized.jpg")
      },
      {
        name: "Village", 
        image: require("../../assets/images/village-resized.jpg")
      }
    ]
  }, 
  {
    genre: "Sci-Fi",
    soundscapes: [
      {
        name: "Space Travel",
        image: require("../../assets/images/space-travel-resized.jpg")
      },
      {
        name: "Spaceship",
        image: require("../../assets/images/spaceship-interior-resized.jpg")
      },
      {
        name: "Alien",
        image: require("../../assets/images/alien-resized.jpg")
      }
    ]
  },
  {
    genre: "Western",
    soundscapes: [
      {
        name: "Western Town",
        image: require("../../assets/images/western-town-resized.jpg")
      }
    ]
  },
  {
    genre: "Nautical",
    soundscapes: [
      {
        name: "Pirate Ship",
        image: require("../../assets/images/pirate-ship-resized.jpg")
      }
    ]
  }
]

function LibraryItem(props: { item: { genre: string; soundscapes: Record<string, string>[] } }) {
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