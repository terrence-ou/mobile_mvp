import { wordCardStyles } from "@/constants/theme";
import { View, Text, StyleSheet } from "react-native";

export default function WordsArrayBlock({
  title,
  terms,
}: {
  title: string;
  terms: string[];
}) {
  return (
    <View>
      <Text>{title}</Text>
      <View style={wordCardStyles.sectionBlock}>
        <View style={styles.wordList}>
          {terms.map((word) => {
            return <Text key={`${title}-${word}`}>{word}</Text>;
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
