import { View, Text, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { theme } from "@/constants/theme";

const flag = require("@/assets/flags/gb.svg");

export default function DictionaryHeader() {
  return (
    <View style={styles.constainer}>
      <Pressable>
        <FontAwesome size={26} name="user-circle" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  constainer: {
    paddingHorizontal: theme.page.paddingHorizontal,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    height: 30,
    gap: 10,
  },
  flag: {
    height: 26,
    width: 32,
    borderRadius: 6,
  },
});
