import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Word } from "@/models/word";

type WordCardProps = {
  word: Word;
};

export default function WordCard({ word }: WordCardProps) {
  return (
    <View style={styles.container}>
      {/* word */}
      <Text style={styles.word}>{word.word}</Text>
      <Text style={styles.pronounciation}>[{word.pronunciation}]</Text>
      <ScrollView style={styles.scrollContainer}>
        {/* definitions */}
        <View>
          <Text>Definitions</Text>
          {word.definitions.map((definition, i) => (
            <View key={`${word}-definition-${i}`}>
              <Text>{definition.partOfSpeech}</Text>
              <Text>{definition.meaning}</Text>
              <View>
                {definition.examples.map((example, j) => (
                  <Text key={`${word}-definition-${i}-example-${j}`}>{example}</Text>
                ))}
              </View>
            </View>
          ))}
        </View>
        {/* tenses */}
        <View>
          <Text>Tenses</Text>
          {Object.entries(word.tenses).map(([key, value]) => (
            <View key={`${word}-tense-${key}`}>
              <Text>{key}</Text>
              <Text>{value}</Text>
            </View>
          ))}
        </View>
        {/* synonyms and antonyms */}
        <View>
          <View>
            <Text>Synonyms</Text>
            <Text>{word.synonyms.join(", ")}</Text>
          </View>
          <View>
            <Text>Antonyms</Text>
            <Text>{word.antonyms.join(", ")}</Text>
          </View>
        </View>
        {/* related terms */}
        <View>
          <Text>Related Terms</Text>
          <Text>{word.relatedTerms.join(", ")}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const paddingHorizontal = 16;

const styles = StyleSheet.create({
  container: {
    height: 500,
    width: "95%",
    borderWidth: 1,
    borderRadius: 16,
    paddingVertical: 16,
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal,
  },
  word: {
    fontSize: 40,
    paddingHorizontal,
    fontWeight: "bold",
    marginVertical: 6,
  },
  pronounciation: {
    paddingHorizontal,
  },
  definitionBlock: {},
});
