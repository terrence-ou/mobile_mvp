import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "transparent", borderTopWidth: 0 },
      }}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen name="scene" />
      <Tabs.Screen name="wordbook" />
    </Tabs>
  );
}
