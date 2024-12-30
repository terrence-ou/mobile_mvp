import auth from "@react-native-firebase/auth";
import appleAuth, {
  AppleAuthRequestOperation,
  AppleAuthRequestScope,
} from "@invertase/react-native-apple-authentication";

// Signup/ Signin the user with Apple ID
export async function appleSignIn() {
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
  auth().signInWithCredential(appleCredential);
  return identityToken;
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
