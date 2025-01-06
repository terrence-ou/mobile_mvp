import { useCallback, useState } from "react";
import { router } from "expo-router";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";

import { appleSignIn } from "@/apis/appleSignin";
import { googleSignIn } from "@/apis/googleSignin";
import { useAtomSession } from "@/hooks/useAtomSession";

import ViewWrapper from "@/components/ViewWrapper";
import SignInButton from "@/components/SignInButton";
import React from "react";

export default function SignIn() {
  const { signIn } = useAtomSession();
  const [loadingState, setLoadingState] = useState<[boolean, string]>([false, ""]);
  const handleLoadingState = (newState: [boolean, string]) => {
    setLoadingState(newState);
  };

  const handleSignIn = useCallback(
    async (
      providerSignInFn: (
        handleState: typeof handleLoadingState
      ) => Promise<string | undefined>
    ) => {
      try {
        const token = await providerSignInFn(handleLoadingState);
        if (token) {
          signIn(token);
          router.replace("/");
        } else {
          throw new Error("Sign-In failed - no identify token returned");
        }
      } catch (error) {
        alert(`Sign-In Error: ${error}`);
      } finally {
        setLoadingState([false, ""]);
      }
    },
    []
  );

  if (loadingState[0]) {
    return (
      <View style={styles.loadingBackdrop}>
        <ActivityIndicator size="large" color="#000000" />
        <Text style={styles.loadingText}>{loadingState[1]}</Text>
      </View>
    );
  }

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
  loadingBackdrop: {
    position: "absolute",
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 100,
  },
  loadingText: {
    color: "#000000",
    fontSize: 16,
    fontWeight: 400,
    letterSpacing: 0.6,
    marginTop: 10,
  },
});
