import { Pressable, Text, StyleSheet } from "react-native";
import { useSession } from "@/context/AuthContext";
import { signOutUser } from "@/apis/signout";

export default function SignOutButton() {
  const { session, signOut } = useSession();
  const handleSignOutUser = async () => {
    if (session) await signOutUser(session);
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
