import axios from "axios";
import { VerificationResponse } from "@/models/session";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SESSION_KEY } from "@/constants/storageKeys";
import { SessionStorage } from "@/models/session";
const SERVICE_URL = process.env.EXPO_PUBLIC_SERVICE_URL;

export async function signOutUser(session: string) {
  const url = `${SERVICE_URL}/user/signout`;
  try {
    await axios.post(url, {}, { headers: { "session-token": session } });
  } catch (error) {
    console.error(`Sign-Out Error: ${error}`);
  }
}

export async function verifyUser(session: string) {
  const url = `${SERVICE_URL}/user/verify_session`;
  try {
    const response = await axios.post(url, {}, { headers: { "session-token": session } });
    return response.data as VerificationResponse;
  } catch (error) {
    alert(`Verify-User Error: ${error}`);
  }
}

export async function verifySession() {
  try {
    const storage = await AsyncStorage.getItem(SESSION_KEY);
    if (!storage) return false;
    const { session_token: sessionToken }: SessionStorage = storage
      ? JSON.parse(storage)
      : { session_token: null };
    if (!sessionToken) return false;
    const response = await verifyUser(sessionToken);
    if (!response) return false;
    if (!response.valid) {
      alert("Session is invalid. Please sign in again.");
    }
    return response.valid;
  } catch (error) {
    alert(`Verify-Session Error: ${error}`);
    return false;
  }
}
