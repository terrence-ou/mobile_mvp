import { theme } from "@/constants/theme";
import { PropsWithChildren } from "react";
import { View, SafeAreaView } from "react-native";

export default function ViewWrapper({ children }: PropsWithChildren) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, paddingVertical: theme.page.paddingVertical }}>
        {children}
      </View>
    </SafeAreaView>
  );
}
