import { useCallback, useState } from "react";
import { router } from "expo-router";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";

import { useSession } from "@/context/AuthContext";
import { appleSignIn } from "@/apis/appleSignin";
import { googleSignIn } from "@/apis/googleSignin";

import ViewWrapper from "@/components/ViewWrapper";
import SignInButton from "@/components/SignInButton";
import React from "react";

export default function SignIn() {
  const { signIn } = useSession();
  const [loading, setLoading] = useState<boolean>(false);

  const handleSignIn = useCallback(
    async (providerSignInFn: () => Promise<string | undefined>) => {
      try {
        setLoading(true);
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
        setLoading(false);
      }
    },
    []
  );

  return (
    <>
      {loading && (
        <View style={styles.loadingBackdrop}>
          <ActivityIndicator size="large" color="white" />
          <Text style={styles.loadingText}>Signing In...</Text>
        </View>
      )}
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
    </>
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
    backgroundColor: "#000000b3", // rgba(0, 0, 0, 0.7) in hex
    zIndex: 100,
  },
  loadingText: {
    color: "#FFFFFF", // white in hex
    fontSize: 20,
    fontWeight: 500,
    letterSpacing: 1,
    marginTop: 10,
  },
});
