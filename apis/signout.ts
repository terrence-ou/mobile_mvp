import axios from "axios";
const SERVICE_URL = process.env.EXPO_PUBLIC_SERVICE_URL;

export async function signOutUser(session: string) {
  const url = `${SERVICE_URL}/user/signout`;
  try {
    await axios.post(url, {}, { headers: { "session-token": session } });
  } catch (error) {
    console.error(`Sign-Out Error: ${error}`);
  }
}
