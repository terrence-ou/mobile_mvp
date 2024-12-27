import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Header() {
  return (
    <SafeAreaView style={{ height: 44, backgroundColor: "transparent" }}>
      <Text>Header</Text>
    </SafeAreaView>
  );
}
