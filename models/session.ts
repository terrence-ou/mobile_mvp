export interface SessionStorage {
  session_token: string | null;
}

export interface VerificationResponse {
  message: string;
  valid: boolean;
}
