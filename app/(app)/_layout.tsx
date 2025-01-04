import { useEffect, useState } from "react";
import { Stack, Redirect } from "expo-router";
import { useSession } from "@/context/AuthContext";

export default function AppLayout() {
  const [loading, setLoading] = useState<boolean>(true);
  const { session } = useSession();

  // leave 500ms for loading the session token
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timeout);
  });

  if (!session && !loading) return <Redirect href="/sign-in" />;
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="welcome" />
      <Stack.Screen name="dictionary" />
      <Stack.Screen name="profile" />
    </Stack>
  );
}
