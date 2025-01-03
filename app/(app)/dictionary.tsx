import { StyleSheet } from "react-native";
import ViewWrapper from "@/components/ViewWrapper";
import DictionaryHeader from "@/components/DictionaryHeader";
import { mockWordList } from "@/constants/mockData";
import { Word } from "@/models/word";
import WordSlider from "@/components/WordSlider";

export default function Dictionary() {
  return (
    <ViewWrapper>
      <DictionaryHeader />
      <WordSlider words={mockWordList.words.map((word) => new Word(word))} />
    </ViewWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
