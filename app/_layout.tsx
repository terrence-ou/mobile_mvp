import { Slot } from "expo-router";
import { SessionProvider } from "@/context/AuthContext";

export default function Root() {
  return (
    <SessionProvider>
      <Slot />
    </SessionProvider>
  );
}
