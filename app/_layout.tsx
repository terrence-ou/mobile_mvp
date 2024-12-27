import React from "react";
import { Text } from "react-native";
import { Stack } from "expo-router";
import Header from "@/components/Header";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerLeft: () => <></>,
        headerRight: () => <FontAwesome name="bars" size={16} />,
        headerTitle: "",
        headerTransparent: true,
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ title: "none" }} />
    </Stack>
  );
}
