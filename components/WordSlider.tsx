import { Word } from "@/models/word";
import { View, StyleSheet, FlatList } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import WordCard from "@/components/wordcard/WordCard";

type WordSliderProps = {
  words: Word[];
};

export default function WordSlider({ words }: WordSliderProps) {
  const scrollX = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
    },
  });
  return (
    <View style={styles.container}>
      <Animated.FlatList
        data={words}
        renderItem={({ item, index }) => (
          <WordCard word={item} index={index} scrollX={scrollX} />
        )}
        keyExtractor={(item) => item.word}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={onScroll}
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
