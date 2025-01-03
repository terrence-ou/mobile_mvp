import { View, StyleSheet } from "react-native";
import ViewWrapper from "@/components/ViewWrapper";
import DictionaryHeader from "@/components/DictionaryHeader";
import SignOutButton from "@/components/SignOutButton";

export default function Dictionary() {
  return (
    <ViewWrapper>
      <DictionaryHeader />
      <View style={styles.container}>
        {/* The time, wifi, battery bar */}
        <SignOutButton />
      </View>
    </ViewWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
