import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
  <Tabs
    screenOptions={{
      tabBarActiveTintColor: "#2a2d33",
      tabBarInactiveTintColor: "#a0a2a8",
      headerStyle: {
        backgroundColor: "#fff5dbff",
      },
      headerTintColor: "#2a2d33",
      tabBarStyle: {
        backgroundColor: "#fff5dbff",
      },
    }}
  >
    <Tabs.Screen 
      name="index" 
      options={{
        title: "Home",
        headerTitle: "Tiny Bard",
        tabBarIcon: ({ color }) => (
          <Ionicons 
            name="home" 
            size={30} 
            color={color}
          />
        ),
      }} 
    />
    <Tabs.Screen 
      name="library" 
      options={{
        headerTitle: "Soundscape Library",
        tabBarIcon: ({ color }) => (
          <Ionicons 
            name="library" 
            size={30} 
            color={color}
          />
        ),
      }} 
    />
  </Tabs>
  );
}
