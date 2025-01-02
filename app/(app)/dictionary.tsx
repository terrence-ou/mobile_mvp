import { StatusBar } from "react-native";
import ViewWrapper from "@/components/ViewWrapper";
import DictionaryHeader from "@/components/DictionaryHeader";
import SignOutButton from "@/components/SignOutButton";

export default function Dictionary() {
  return (
    <ViewWrapper>
      {/* The time, wifi, battery bar */}
      <StatusBar barStyle="dark-content" />
      <DictionaryHeader />
      <SignOutButton />
    </ViewWrapper>
  );
}
