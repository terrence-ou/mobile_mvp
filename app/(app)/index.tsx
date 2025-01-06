import { StyleSheet, View } from "react-native";
import { Word } from "@/models/word";
import { mockWordList, mockWord } from "@/constants/mockData";
import ViewWrapper from "@/components/ViewWrapper";
import DictionaryHeader from "@/components/DictionaryHeader";
import WordSlider from "@/components/WordSlider";
import SignOutButton from "@/components/SignOutButton";

export default function App() {
  return (
    <ViewWrapper>
      <View style={styles.container}>
        <DictionaryHeader />
        <WordSlider
          words={[...mockWordList.words, mockWord].map((word) => new Word(word))}
        />
        <SignOutButton />
      </View>
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
