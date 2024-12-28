import { PropsWithChildren } from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";

export default function ViewWrapper({ children }: PropsWithChildren) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 10 }}>
        {children}
      </View>
    </SafeAreaView>
  );
}
