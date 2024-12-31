// import axios from "axios";
import { router } from "expo-router";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { AppleButton } from "@invertase/react-native-apple-authentication";
import { appleSignIn } from "@/apis/appleSignin";

import { useSession } from "@/context/AuthContext";
import ViewWrapper from "@/components/ViewWrapper";
import { googleSignIn } from "@/apis/googleSignin";

export default function SignIn() {
  // const apiURL = process.env.EXPO_PUBLIC_SERVICE_URL;
  const { signIn } = useSession();

  const handleAppleSignIn = async () => {
    try {
      const identityToken = await appleSignIn();
      if (identityToken) {
        // const response = await axios.post(
        //   `${apiURL}/users/verify-user/apple`,
        //   {},
        //   {
        //     headers: {
        //       "identity-token": identityToken,
        //       "Content-Type": "application/json",
        //     },
        //   }
        // );
        signIn(identityToken);
        router.replace("/dictionary");
      } else {
        throw new Error("Apple Sign-In failed - no identify token returned");
      }
    } catch (error) {
      alert(`Apple Sign-In Error: ${error}`);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const idToken = await googleSignIn();
      if (idToken) {
        signIn(idToken);
        router.replace("/dictionary");
      } else {
        throw new Error("Google Sign-In failed - no identify token returned");
      }
    } catch (error) {
      alert(`Google Sign-In Error: ${error}`);
    }
  };

  return (
    <ViewWrapper>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Text style={styles.title}>Jiten</Text>
          <Text>( jee-ten | じてん )</Text>
          <Text style={styles.subTitle}>
            Jiten is a <Text>FREE</Text> multi-language-supported dictionary app. The
            reason for the registration is to avoid misused by strange bots.
          </Text>
        </View>
        <AppleButton
          buttonStyle={AppleButton.Style.BLACK}
          buttonType={AppleButton.Type.CONTINUE}
          style={{ width: 300, height: 45 }}
          onPress={handleAppleSignIn}
        />
        <Pressable onPress={() => handleGoogleSignIn()}>
          <Text>Google Sign-In</Text>
        </Pressable>
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
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 55,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 16,
    textAlign: "left",
    marginTop: 30,
  },
});
