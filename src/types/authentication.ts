interface NewTokenResult {
  success: boolean;
  expires_at: Date;
  request_token: string
}

interface SessionResult {
  success: boolean;
  session_id: string;
}

export { NewTokenResult, SessionResult };
