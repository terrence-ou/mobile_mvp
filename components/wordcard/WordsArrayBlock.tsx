import { wordCardStyles } from "@/constants/theme";
import { View, Text, StyleSheet } from "react-native";

export default function WordsArrayBlock({
  word,
  title,
  terms,
}: {
  word: string;
  title: string;
  terms: string[];
}) {
  return (
    <View>
      <Text>{title}</Text>
      <View style={wordCardStyles.sectionBlock}>
        <View style={styles.wordList}>
          {terms.map((term) => {
            return <Text key={`${word}-${title}-${term}`}>{term}</Text>;
          })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wordList: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
});
