import { View, StyleSheet } from "react-native";
import ViewWrapper from "@/components/ViewWrapper";
import DictionaryHeader from "@/components/DictionaryHeader";
// import SignOutButton from "@/components/SignOutButton";
import WordCard from "@/components/WordCard";
import { mockWord } from "@/constants/mockData";
import { Word } from "@/models/word";

export default function Dictionary() {
  const word = new Word(mockWord);
  return (
    <ViewWrapper>
      <DictionaryHeader />
      <View style={styles.container}>
        {/* The time, wifi, battery bar */}
        <WordCard word={word} />
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
