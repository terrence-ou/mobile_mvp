import { StyleSheet } from "react-native";
import { Redirect } from "expo-router";
import { useAtomSession } from "@/hooks/useAtomSession";
import { Word } from "@/models/word";
import { mockWordList, mockWord } from "@/constants/mockData";
import ViewWrapper from "@/components/ViewWrapper";
import DictionaryHeader from "@/components/DictionaryHeader";
import WordSlider from "@/components/WordSlider";

export default function App() {
  const { session } = useAtomSession();

  if (!session.session_token) {
    return <Redirect href="/sign-in" />;
  }

  return (
    <ViewWrapper>
      <DictionaryHeader />
      <WordSlider
        words={[...mockWordList.words, mockWord].map((word) => new Word(word))}
      />
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
