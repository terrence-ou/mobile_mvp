import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SESSION_KEY } from "@/constants/storageKeys";
import { SessionStorage } from "@/models/storage";

const SERVICE_URL = process.env.EXPO_PUBLIC_SERVICE_URL;

export async function generateWords(userPrompt: string) {
  const url = `${SERVICE_URL}/generate/words`;
  try {
    const storage = await AsyncStorage.getItem(SESSION_KEY);
    const { session_token: sessionToken }: SessionStorage = storage
      ? JSON.parse(storage)
      : { session_token: null };
    const response = await axios.post(
      url,
      { prompt: userPrompt },
      { headers: { "session-token": sessionToken, "Content-Type": "application/json" } }
    );
    return response.data.words;
  } catch (error) {
    console.error(`Generate Words Error: ${error}`);
  }
}
