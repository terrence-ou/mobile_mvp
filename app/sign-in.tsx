import { router } from "expo-router";
import { Text, View } from "react-native";
import { AppleButton } from "@invertase/react-native-apple-authentication";
import { appleSignIn } from "@/apis/appleSignin";

import { useSession } from "@/context/AuthContext";
import ViewWrapper from "@/components/ViewWrapper";

export default function SignIn() {
  const { signIn } = useSession();
  return (
    <ViewWrapper>
      <Text
        onPress={() => {
          signIn();
        }}
      >
        Sign In
      </Text>
      <AppleButton
        buttonStyle={AppleButton.Style.BLACK}
        buttonType={AppleButton.Type.SIGN_IN}
        style={{ width: 160, height: 45 }}
        onPress={() =>
          appleSignIn().then((sessionToken) => {
            if (sessionToken) {
              signIn(sessionToken);
              router.replace("/dictionary");
            }
          })
        }
      />
    </ViewWrapper>
  );
}
