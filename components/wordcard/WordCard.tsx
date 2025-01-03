import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import { Word } from "@/models/word";
import DefinitionBlock from "./DefinitionBlock";
import TensesBlock from "./TensesBlock";
import WordsArrayBlock from "./WordsArrayBlock";

type WordCardProps = {
  word: Word;
};

const { width } = Dimensions.get("screen");

export default function WordCard({ word }: WordCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.cardBody}>
        {/* word */}
        <View style={styles.wordContainer}>
          <Text style={styles.word}>{word.word}</Text>
          <Text style={styles.pronounciation}>[{word.pronunciation}]</Text>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}
        >
          {/* definitions */}
          <DefinitionBlock word={word.word} definitions={word.definitions} />

          {/* tenses */}
          <TensesBlock word={word.word} tenses={word.tenses} />
          {/* synonyms and antonyms */}
          {word.synonyms.length > 0 && (
            <WordsArrayBlock title="Synonyms" word={word.word} terms={word.synonyms} />
          )}
          {word.antonyms.length > 0 && (
            <WordsArrayBlock title="Antonyms" word={word.word} terms={word.antonyms} />
          )}
          {/* related terms */}
          <WordsArrayBlock
            title="Related Terms"
            word={word.word}
            terms={word.relatedTerms}
          />
        </ScrollView>
      </View>
    </View>
  );
}

const paddingHorizontal = 10;

const styles = StyleSheet.create({
  container: {
    width: width,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  cardBody: {
    height: 530,
    width: 310,
    borderWidth: 1,
    borderRadius: 16,
    paddingVertical: 16,
  },
  wordContainer: {
    marginBottom: 8,
  },
  scrollContainer: {
    paddingHorizontal,
    rowGap: 8,
    paddingBottom: 16,
  },
  word: {
    fontSize: 40,
    paddingHorizontal,
    fontWeight: "bold",
  },
  pronounciation: {
    paddingHorizontal,
  },
  sectionBlock: {
    marginVertical: 16,
  },
});
