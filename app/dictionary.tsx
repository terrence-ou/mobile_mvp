import ViewWrapper from "@/components/ViewWrapper";
import DictionaryHeader from "@/components/DictionaryHeader";
import { StatusBar, Text } from "react-native";

export default function Dictionary() {
  return (
    <ViewWrapper>
      {/* The time, wifi, battery bar */}
      <StatusBar barStyle="dark-content" />
      <DictionaryHeader />
    </ViewWrapper>
  );
}
