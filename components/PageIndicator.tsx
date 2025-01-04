import { View, StyleSheet, Dimensions } from "react-native";
import Animated, {
  interpolate,
  SharedValue,
  useAnimatedStyle,
  Extrapolation,
} from "react-native-reanimated";

type PageIndicatorProps = {
  numCards: number;
  currIndex: number;
  scrollX: SharedValue<number>;
};

const { width } = Dimensions.get("screen");

export default function PageIndicator({
  numCards,
  currIndex,
  scrollX,
}: PageIndicatorProps) {
  return (
    <View style={styles.container}>
      {Array.from({ length: numCards }).map((_, index) => {
        const reAnimatedStyle = useAnimatedStyle(() => {
          const dotWidth = interpolate(
            scrollX.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [6, 16, 6],
            Extrapolation.CLAMP
          );
          return { width: dotWidth };
        });

        return (
          <Animated.View
            key={`pagedot-${index}`}
            style={[
              styles.dot,
              { backgroundColor: currIndex === index ? "black" : "gray" },
              reAnimatedStyle,
            ]}
          ></Animated.View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 4,
    height: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 6,
  },
});
