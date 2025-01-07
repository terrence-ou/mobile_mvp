import { View, StyleSheet, Dimensions } from "react-native";
import { SharedValue } from "react-native-reanimated";

type PageIndicatorProps = {
  numCards: number;
  currIndex: number;
  scrollX: SharedValue<number>;
};

export default function PageIndicator({ numCards, currIndex }: PageIndicatorProps) {
  return (
    <View style={styles.container}>
      {Array.from({ length: numCards }).map((_, index) => (
        <View
          key={`dot-${index}`}
          style={[
            styles.dot,
            { backgroundColor: index === currIndex ? "black" : "gray" },
          ]}
        ></View>
      ))}
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
