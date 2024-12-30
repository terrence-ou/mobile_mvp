import React from "react";
import { Text } from "react-native";
import { Stack, Redirect } from "expo-router";
import { useSession } from "@/context/AuthContext";

export default function AppLayout() {
  const { session, isLoading } = useSession();
  if (isLoading) return <Text>Loading...</Text>;
  if (!session) return <Redirect href="/sign-in" />;
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="welcome" />
      <Stack.Screen name="dictionary" />
      <Stack.Screen name="profile" />
    </Stack>
  );
}
