import { atomWithStorage, createJSONStorage } from "jotai/utils";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SESSION_KEY } from "@/constants/storageKeys";
import { SessionStorage } from "@/models/session";

const storage = createJSONStorage<SessionStorage>(() => AsyncStorage);
const content = { session_token: null };
export const sessionAtom = atomWithStorage<SessionStorage>(SESSION_KEY, content, storage);
