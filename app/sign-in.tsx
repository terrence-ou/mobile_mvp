// import axios from "axios";
import { router } from "expo-router";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { appleSignIn } from "@/apis/appleSignin";

import { useSession } from "@/context/AuthContext";
import ViewWrapper from "@/components/ViewWrapper";
import { googleSignIn } from "@/apis/googleSignin";

import SignInButton from "@/components/SignInButton";
import { useCallback } from "react";

export default function SignIn() {
  // const apiURL = process.env.EXPO_PUBLIC_SERVICE_URL;
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
            Jiten is a <Text>FREE</Text> multi-language-supported dictionary app. The
            reason for the registration is to avoid misused by strange bots.
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
