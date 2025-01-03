import { View, Text, StyleSheet } from "react-native";
import { Word } from "@/models/word";

type WordCardProps = {
  word: Word;
};

export default function WordCard({ word }: WordCardProps) {
  return (
    <View style={styles.container}>
      {/* word */}
      <Text>{word.word}</Text>
      <Text>/{word.pronunciation}/</Text>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
