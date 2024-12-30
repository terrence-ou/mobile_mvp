import { router } from "expo-router";
import { Text, View, StyleSheet } from "react-native";
import { AppleButton } from "@invertase/react-native-apple-authentication";
import { appleSignIn } from "@/apis/appleSignin";

import { useSession } from "@/context/AuthContext";
import ViewWrapper from "@/components/ViewWrapper";

export default function SignIn() {
  const { signIn } = useSession();

  const handleAppleSignIn = async () => {
    try {
      const identityToken = await appleSignIn();
      if (identityToken) {
        signIn(identityToken);
        router.replace("/dictionary");
      } else {
        throw new Error("Apple Sign-In failed - no identify token returned");
      }
    } catch (error) {
      alert(`Apple Sign-In Error: ${error}`);
    }
  };

  return (
    <ViewWrapper>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Text style={styles.title}>Jiten</Text>
          <Text style={styles.subTitle}>
            Jiten is a <Text>FREE</Text> multi-language-supported dictionary app. The
            reason for the registration is to avoid misused by strange bots.
          </Text>
        </View>
        <AppleButton
          buttonStyle={AppleButton.Style.BLACK}
          buttonType={AppleButton.Type.CONTINUE}
          style={{ width: 280, height: 45 }}
          onPress={handleAppleSignIn}
        />
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
  subContainer: {
    marginVertical: 50,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 55,
    fontWeight: "bold",
    marginVertical: 20,
  },
  subTitle: {
    fontSize: 16,
    textAlign: "left",
  },
});
