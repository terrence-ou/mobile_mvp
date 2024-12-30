import ViewWrapper from "@/components/ViewWrapper";
import DictionaryHeader from "@/components/DictionaryHeader";
import { StatusBar, Text } from "react-native";
import { useSession } from "@/context/AuthContext";

export default function Dictionary() {
  const { signOut } = useSession();
  return (
    <ViewWrapper>
      {/* The time, wifi, battery bar */}
      <StatusBar barStyle="dark-content" />
      <DictionaryHeader />
      <Text onPress={() => signOut()}>Sign out</Text>
    </ViewWrapper>
  );
}
