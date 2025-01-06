import { Pressable, Text, StyleSheet } from "react-native";
import { signOutUser } from "@/apis/user";
import { useAtomSession } from "@/hooks/useAtomSession";

export default function SignOutButton() {
  const { session, signOut } = useAtomSession();
  const sessionToken = session.session_token;
  const handleSignOutUser = async () => {
    if (sessionToken) await signOutUser(sessionToken);
    signOut();
  };
  return (
    <Pressable style={styles.container} onPress={handleSignOutUser}>
      <Text style={styles.buttonText}>Sign out</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 45,
    backgroundColor: "#000",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 17,
  },
});
