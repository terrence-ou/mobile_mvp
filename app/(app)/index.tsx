import { StyleSheet, View } from "react-native";
import ViewWrapper from "@/components/ViewWrapper";
import DictionaryHeader from "@/components/DictionaryHeader";
import DictionaryBody from "@/components/DictionaryBody";
// import SignOutButton from "@/components/SignOutButton";

export default function App() {
  return (
    <ViewWrapper>
      <View style={styles.container}>
        <DictionaryHeader />
        <DictionaryBody />
        {/* <SignOutButton /> */}
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
