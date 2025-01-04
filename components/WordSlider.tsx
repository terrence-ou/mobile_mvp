import { Word } from "@/models/word";
import { View, StyleSheet, ViewToken } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import WordCard from "@/components/wordcard/WordCard";
import PageIndicator from "./PageIndicator";
import { useRef, useState } from "react";

type WordSliderProps = {
  words: Word[];
};

export default function WordSlider({ words }: WordSliderProps) {
  const scrollX = useSharedValue(0);
  const [cardIndex, setCardIndex] = useState<number>(1);

  const viewabilityConfig = { itemVisiblePercentThreshold: 50 };

  const onViewableItemsChanged = ({ viewableItems }: { viewableItems: ViewToken[] }) => {
    if (viewableItems.length > 0) {
      setCardIndex(viewableItems[0].index!);
    }
  };

  const viewabilityConfigCallbackPairs = useRef([
    { viewabilityConfig, onViewableItemsChanged },
  ]);

  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
    },
  });

  return (
    <View style={styles.container}>
      <Animated.FlatList
        keyExtractor={(item) => item.word}
        style={styles.flatList}
        data={words}
        renderItem={({ item, index }) => (
          <WordCard word={item} index={index} scrollX={scrollX} />
        )}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
      />
      <PageIndicator numCards={words.length} currIndex={cardIndex} scrollX={scrollX} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  flatList: {
    flexGrow: 0,
    paddingVertical: 10,
  },
});
