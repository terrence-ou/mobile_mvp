import { useEffect, useState } from "react";
import { Stack, Redirect } from "expo-router";
import { useAtomSession } from "@/hooks/useAtomSession";
import { verifySession } from "@/apis/user";
import { useAppState } from "@/hooks/useAppState";

export default function AppLayout() {
  const { session, signOut } = useAtomSession();
  const { appStateVisible } = useAppState();
  const sessionToken = session.session_token;

  // Verify session every time app state is active
  useEffect(() => {
    const revalidate = async () => {
      if (appStateVisible === "active") {
        const verifyResult = await verifySession();
        if (!verifyResult) signOut();
      }
    };
    revalidate();
  }, [appStateVisible]);

  if (!sessionToken) return <Redirect href="/sign-in" />;

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="profile" />
    </Stack>
  );
}
