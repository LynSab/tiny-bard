type SoundscapeItem = {
  genre: string; 
  soundscapes: {
    name: string;
    image: string;
    sounds: {
      name: string;
      sound: string;
    }[];
  }[];
}

const libraryData: SoundscapeItem[] = [
  {
    genre: "Fantasy", 
    soundscapes: [
      {
        name: "Cave", 
        image: require("../assets/images/cave-resized.jpg"),
        sounds: [
          {
            name: "Cave Music",
            sound: require("../assets/sounds/cave-music.mp3")
          },
          {
            name: "Footsteps",
            sound: require("../assets/sounds/cave-footsteps.mp3"),
          },
          {
            name: "Dripping Water",
            sound: require("../assets/sounds/cave-water-dripping.mp3")
          }
        ]
      }, 
      {
        name: "Forest", 
        image: require("../assets/images/forest-resized.jpg"),
        sounds: [
          {
            name: "Cave Music",
            sound: require("../assets/sounds/cave-music.mp3")
          },
          {
            name: "Footsteps",
            sound: require("../assets/sounds/cave-footsteps.mp3"),
          },
          {
            name: "Dripping Water",
            sound: require("../assets/sounds/cave-water-dripping.mp3")
          }
        ]
      },
      {
        name: "Mountain", 
        image: require("../assets/images/mountains-resized.jpg"),
        sounds: [
          {
            name: "Cave Music",
            sound: require("../assets/sounds/cave-music.mp3")
          },
          {
            name: "Footsteps",
            sound: require("../assets/sounds/cave-footsteps.mp3"),
          },
          {
            name: "Dripping Water",
            sound: require("../assets/sounds/cave-water-dripping.mp3")
          }
        ]
      },
      {
        name: "Medows", 
        image: require("../assets/images/meadows-resized.jpg"),
        sounds: [
          {
            name: "Cave Music",
            sound: require("../assets/sounds/cave-music.mp3")
          },
          {
            name: "Footsteps",
            sound: require("../assets/sounds/cave-footsteps.mp3"),
          },
          {
            name: "Dripping Water",
            sound: require("../assets/sounds/cave-water-dripping.mp3")
          }
        ]
      },
      {
        name: "Battle", 
        image: require("../assets/images/battle-resized.jpg"),
        sounds: [
          {
            name: "Cave Music",
            sound: require("../assets/sounds/cave-music.mp3")
          },
          {
            name: "Footsteps",
            sound: require("../assets/sounds/cave-footsteps.mp3"),
          },
          {
            name: "Dripping Water",
            sound: require("../assets/sounds/cave-water-dripping.mp3")
          }
        ]
      },
      {
        name: "Village", 
        image: require("../assets/images/village-resized.jpg"),
        sounds: [
          {
            name: "Cave Music",
            sound: require("../assets/sounds/cave-music.mp3")
          },
          {
            name: "Footsteps",
            sound: require("../assets/sounds/cave-footsteps.mp3"),
          },
          {
            name: "Dripping Water",
            sound: require("../assets/sounds/cave-water-dripping.mp3")
          }
        ]
      }
    ]
  }, 
  {
    genre: "Sci-Fi",
    soundscapes: [
      {
        name: "Space Travel",
        image: require("../assets/images/space-travel-resized.jpg"),
        sounds: [
          {
            name: "Cave Music",
            sound: require("../assets/sounds/cave-music.mp3")
          },
          {
            name: "Footsteps",
            sound: require("../assets/sounds/cave-footsteps.mp3"),
          },
          {
            name: "Dripping Water",
            sound: require("../assets/sounds/cave-water-dripping.mp3")
          }
        ]
      },
      {
        name: "Spaceship",
        image: require("../assets/images/spaceship-interior-resized.jpg"),
        sounds: [
          {
            name: "Cave Music",
            sound: require("../assets/sounds/cave-music.mp3")
          },
          {
            name: "Footsteps",
            sound: require("../assets/sounds/cave-footsteps.mp3"),
          },
          {
            name: "Dripping Water",
            sound: require("../assets/sounds/cave-water-dripping.mp3")
          }
        ]
      },
      {
        name: "Alien",
        image: require("../assets/images/alien-resized.jpg"),
        sounds: [
          {
            name: "Cave Music",
            sound: require("../assets/sounds/cave-music.mp3")
          },
          {
            name: "Footsteps",
            sound: require("../assets/sounds/cave-footsteps.mp3"),
          },
          {
            name: "Dripping Water",
            sound: require("../assets/sounds/cave-water-dripping.mp3")
          }
        ]
      }
    ]
  },
  {
    genre: "Western",
    soundscapes: [
      {
        name: "Western Town",
        image: require("../assets/images/western-town-resized.jpg"),
        sounds: [
          {
            name: "Cave Music",
            sound: require("../assets/sounds/cave-music.mp3")
          },
          {
            name: "Footsteps",
            sound: require("../assets/sounds/cave-footsteps.mp3"),
          },
          {
            name: "Dripping Water",
            sound: require("../assets/sounds/cave-water-dripping.mp3")
          }
        ]
      }
    ]
  },
  {
    genre: "Nautical",
    soundscapes: [
      {
        name: "Pirate Ship",
        image: require("../assets/images/pirate-ship-resized.jpg"),
        sounds: [
          {
            name: "Cave Music",
            sound: require("../assets/sounds/cave-music.mp3")
          },
          {
            name: "Footsteps",
            sound: require("../assets/sounds/cave-footsteps.mp3"),
          },
          {
            name: "Dripping Water",
            sound: require("../assets/sounds/cave-water-dripping.mp3")
          }
        ]
      }
    ]
  }
]

export { libraryData, SoundscapeItem };

