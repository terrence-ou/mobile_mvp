import axios from "axios";
import auth from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

const GOOGLE_WEB_CLIENT_ID = process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID;
const SERVICE_URL = process.env.EXPO_PUBLIC_SERVICE_URL;

GoogleSignin.configure({
  webClientId: GOOGLE_WEB_CLIENT_ID,
});

export async function googleSignIn(
  handleState: (newState: [boolean, string]) => void
): Promise<string | undefined> {
  const url = `${SERVICE_URL}/user/signin/google`;
  // check if the device has Google Play Services installed
  await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
  const signInResult = await GoogleSignin.signIn();
  const idToken = signInResult.data?.idToken;
  if (!idToken) {
    throw new Error("Google Sign-In failed - no identify token returned");
  }
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  handleState([true, "Connecting to APP server..."]);
  await auth().signInWithCredential(googleCredential);
  const serverResponse = await axios.post(
    url,
    {},
    {
      headers: { "identity-token": idToken },
    }
  );

  return serverResponse.data["session_token"];
}
