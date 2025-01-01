import { View, Text, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";

type SignInButtonProps = {
  type: "apple" | "google";
  onPress: () => void;
};

export default function SignInButton({ type, onPress }: SignInButtonProps) {
  const icon =
    type === "apple"
      ? require("@/assets/icons/apple-white.svg")
      : require("@/assets/icons/google.svg");
  return (
    <Pressable style={[styles.container, styles[type]]} onPress={onPress}>
      <Image source={icon} style={styles.icon} />
      <Text style={[styles.text, styles[`${type}Text`]]}>
        Continue with {type === "apple" ? "Apple" : "Google"}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 45,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 9,
    marginVertical: 6,
  },
  apple: {
    backgroundColor: "black",
  },
  google: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#00000050",
  },
  text: {
    fontSize: 17,
  },
  appleText: {
    color: "white",
    fontWeight: 500,
  },
  googleText: {
    color: "black",
    fontWeight: 600,
  },
  icon: {
    width: 17,
    height: 17,
  },
});
