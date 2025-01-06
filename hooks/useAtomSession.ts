import { useAtom } from "jotai";
import { sessionAtom } from "@/atoms/storageAtom";

export function useAtomSession() {
  const [session, setSession] = useAtom(sessionAtom);

  const signIn = (session_token: string) => {
    setSession({ session_token });
  };

  const signOut = () => {
    setSession({ session_token: null });
  };

  return { session, signIn, signOut };
}
