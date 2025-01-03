import { View, Text, StyleSheet } from "react-native";
import { WordDefinition } from "@/models/word";
import { wordCardStyles } from "@/constants/theme";

export default function DefinitionBlock({
  word,
  definitions,
}: {
  word: string;
  definitions: WordDefinition[];
}) {
  return (
    <View>
      <Text>Definitions</Text>
      <View style={[wordCardStyles.sectionBlock, styles.sectionBlock]}>
        {definitions.map((definition, i) => (
          <View key={`${word}-definition-${i}`}>
            <Text style={styles.partOfSpeech}>{definition.partOfSpeech}</Text>
            <Text>{definition.meaning}</Text>
            <View>
              <Text>Example</Text>
              <Text>{definition.examples[0]}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionBlock: {
    gap: 8,
  },
  partOfSpeech: {
    fontSize: 16,
  },
});
