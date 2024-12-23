import { View, StyleSheet } from "react-native";
import { Link, Stack } from "expo-router";
import React from "react";

export default function NotFound() {
  <>
    <Stack.Screen name="not_found" options={{ title: "Not Found" }} />
    <View style={styles.container}>
      <Link href="/" style={styles.button}>
        Go back to Home Screen!
      </Link>
    </View>
  </>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
});
