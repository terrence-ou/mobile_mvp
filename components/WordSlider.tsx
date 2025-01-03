import { Word } from "@/models/word";
import { View, StyleSheet, FlatList } from "react-native";
import Animated, { useSharedValue } from "react-native-reanimated";
import WordCard from "@/components/wordcard/WordCard";

type WordSliderProps = {
  words: Word[];
};

export default function WordSlider({ words }: WordSliderProps) {
  const scrollX = useSharedValue(0);
  return (
    <View style={styles.container}>
      <Animated.FlatList
        data={words}
        renderItem={({ item }) => <WordCard word={item} />}
        keyExtractor={(item) => item.word}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
