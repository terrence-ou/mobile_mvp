import React from "react";
import { Stack } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="welcome" />
      <Stack.Screen name="dictionary" />
      <Stack.Screen name="profile" />
    </Stack>
  );
}
