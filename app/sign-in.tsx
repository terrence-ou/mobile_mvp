// import axios from "axios";
import { router } from "expo-router";
import { Text, View, StyleSheet } from "react-native";
import { appleSignIn } from "@/apis/appleSignin";

import { useSession } from "@/context/AuthContext";
import ViewWrapper from "@/components/ViewWrapper";
import { googleSignIn } from "@/apis/googleSignin";

import SignInButton from "@/components/SignInButton";
import { useCallback } from "react";

export default function SignIn() {
  const { signIn } = useSession();

  const handleSignIn = useCallback(async (providerSignInFn: () => Promise<string>) => {
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
    }
  }, []);

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
