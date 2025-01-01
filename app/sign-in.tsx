import { useCallback } from "react";
import { router } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

import { useSession } from "@/context/AuthContext";
import { appleSignIn } from "@/apis/appleSignin";
import { googleSignIn } from "@/apis/googleSignin";

import ViewWrapper from "@/components/ViewWrapper";
import SignInButton from "@/components/SignInButton";

export default function SignIn() {
  const { signIn } = useSession();

  const handleSignIn = useCallback(
    async (providerSignInFn: () => Promise<string | undefined>) => {
      try {
        const token = await providerSignInFn();
        if (token) {
          signIn(token);
          router.replace("/dictionary");
        } else {
          throw new Error("Sign-In failed - no identify token returned");
        }
      } catch (error) {
        alert(`Sign-In Error: ${error}`);
      } finally {
      }
    },
    []
  );

  return (
    <ViewWrapper>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Text style={styles.title}>Jiten</Text>
          <Text>( jee-ten | じてん )</Text>
          <Text style={styles.subTitle}>
            Jiten is a FREE multi-language-supported dictionary app. The reason for the
            registration is to avoid misused by strange bots.
          </Text>
        </View>
        <SignInButton type="apple" onPress={() => handleSignIn(appleSignIn)} />
        <SignInButton type="google" onPress={() => handleSignIn(googleSignIn)} />
      </View>
    </ViewWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 50,
  },
  subContainer: {
    marginVertical: 70,
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
    marginTop: 40,
  },
});
