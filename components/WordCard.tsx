import { View, Text, StyleSheet } from "react-native";

export default function WordCard() {
  return (
    <View style={styles.container}>
      <Text>Word</Text>
      <Text>Meaning</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
