import { router } from "expo-router";
import { Text, View, StyleSheet } from "react-native";
import { AppleButton } from "@invertase/react-native-apple-authentication";
import { appleSignIn } from "@/apis/appleSignin";

import { useSession } from "@/context/AuthContext";
import ViewWrapper from "@/components/ViewWrapper";

export default function SignIn() {
  const { signIn } = useSession();
  return (
    <ViewWrapper>
      <View style={styles.container}>
        <AppleButton
          buttonStyle={AppleButton.Style.BLACK}
          buttonType={AppleButton.Type.CONTINUE}
          style={{ width: 240, height: 40 }}
          onPress={() =>
            appleSignIn()
              .then((sessionToken) => {
                if (sessionToken) {
                  signIn(sessionToken);
                  router.replace("/dictionary");
                }
              })
              .catch((error) => {
                // You can also show an error message to the user here
                alert(`Apple Sign-In Error: ${error}`);
              })
          }
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
});
