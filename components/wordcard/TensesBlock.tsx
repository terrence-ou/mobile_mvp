import { View, Text, StyleSheet } from "react-native";
import { WordTenses } from "@/models/word";
import { wordCardStyles } from "@/constants/theme";

export default function TensesBlock({
  word,
  tenses,
}: {
  word: string;
  tenses: WordTenses;
}) {
  return (
    <View>
      <Text>Tenses</Text>
      <View style={[wordCardStyles.sectionBlock, styles.sectionBlock]}>
        {Object.entries(tenses).map(([key, value]) => (
          <View key={`${word}-tense-${key}`} style={styles.tenseRow}>
            <Text style={styles.tenseKey}>{key}: </Text>
            <Text>{value}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tenseRow: {
    flexDirection: "row",
  },
  sectionBlock: {
    gap: 2,
  },
  tenseKey: {
    width: 100,
  },
});
