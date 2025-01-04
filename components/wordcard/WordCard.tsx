import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import { Word } from "@/models/word";
import DefinitionBlock from "./DefinitionBlock";
import TensesBlock from "./TensesBlock";
import WordsArrayBlock from "./WordsArrayBlock";
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

type WordCardProps = {
  word: Word;
  index: number;
  scrollX: SharedValue<number>;
};

const { width } = Dimensions.get("screen");
const offSetScale = 0.12;

export default function WordCard({ word, index, scrollX }: WordCardProps) {
  const reAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(
            scrollX.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [-width * offSetScale, 0, width * offSetScale],
            Extrapolation.CLAMP,
          ),
        },
        {
          scale: interpolate(
            scrollX.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [0.95, 1.0, 0.95],
            Extrapolation.CLAMP,
          ),
        },
      ],
    };
  });

  return (
    <Animated.View style={[styles.container, reAnimatedStyle]}>
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
            <WordsArrayBlock
              title="Synonyms"
              word={word.word}
              terms={word.synonyms}
            />
          )}
          {word.antonyms.length > 0 && (
            <WordsArrayBlock
              title="Antonyms"
              word={word.word}
              terms={word.antonyms}
            />
          )}
          {/* related terms */}
          <WordsArrayBlock
            title="Related Terms"
            word={word.word}
            terms={word.relatedTerms}
          />
        </ScrollView>
      </View>
    </Animated.View>
  );
}

const paddingHorizontal = 12;

const styles = StyleSheet.create({
  container: {
    width: width,
    alignItems: "center",
    justifyContent: "center",
  },
  cardBody: {
    height: 530,
    width: "85%",
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
