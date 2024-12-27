import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "transparent", borderTopWidth: 0 },
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="search" color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="scene"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="building" color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="wordbook"
        options={{
          tabBarIcon: ({ color }) => <FontAwesome name="book" color={color} size={24} />,
        }}
      />
    </Tabs>
  );
}
