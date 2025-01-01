import axios from "axios";
import auth from "@react-native-firebase/auth";
import appleAuth, {
  AppleAuthRequestOperation,
  AppleAuthRequestScope,
} from "@invertase/react-native-apple-authentication";

const SERVICE_URL = process.env.EXPO_PUBLIC_SERVICE_URL;

// Signup/ Signin the user with Apple ID
export async function appleSignIn(): Promise<string | undefined> {
  const url = `${SERVICE_URL}/user/verify-user/apple`;
  const appleAuthRequestResponse = await appleAuth.performRequest({
    requestedOperation: AppleAuthRequestOperation.LOGIN,
    requestedScopes: [AppleAuthRequestScope.EMAIL, AppleAuthRequestScope.FULL_NAME],
  });

  // Ensure Apple returned a user identityToken
  if (!appleAuthRequestResponse.identityToken) {
    throw new Error("Apple Sign-In failed - no identify token returned");
  }

  // Create a Firebase credential from the response
  const { identityToken, nonce } = appleAuthRequestResponse;
  const appleCredential = auth.AppleAuthProvider.credential(identityToken, nonce);

  // Sign the user in with the credential
  await auth().signInWithCredential(appleCredential);
  const serverResponse = await axios.post(
    url,
    {},
    {
      headers: { "identity-token": identityToken },
    }
  );
  return serverResponse.data["session_token"];
}

// Revoke the user's Apple ID sign-in
export async function appleRevokeSignIn() {
  const { authorizationCode } = await appleAuth.performRequest({
    requestedOperation: AppleAuthRequestOperation.REFRESH,
  });

  // Ensure Apple returned an authorizationCode
  if (!authorizationCode) {
    throw new Error("Apple Revocation failed - no authorizationCode returned");
  }

  return auth().revokeToken(authorizationCode);
}
