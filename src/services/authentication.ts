import { AxiosInstance } from 'axios';
import { NewTokenResult, SessionResult } from '../types/authentication';

class AuthenticationService {
  $http: AxiosInstance;

  constructor(httpClient: AxiosInstance) {
    this.$http = httpClient;
  }

  async getAuthenticationToken(): Promise<NewTokenResult> {
    const res = await this.$http.get('/authentication/token/new');
    return res.data as NewTokenResult;
  }

  async createAuthUrl(redirectUrl: string, requestToken ?: string): Promise<string> {
    let token = requestToken;
    if (!token) {
      const tmp = await this.getAuthenticationToken();
      token = tmp.request_token;
    }
    localStorage.setItem('tmdb_request_token', token);
    return `https://www.themoviedb.org/authenticate/${token}?redirect_to=${redirectUrl}`;
  }

  async createSession(requestToken?: string): Promise<SessionResult> {
    let token = requestToken;

    if (!token) {
      token = localStorage.getItem('tmdb_request_token')!;
    }
    const res = await this.$http.post('/authentication/session/new', { request_token: token });
    return res.data as SessionResult;
  }
}

export default AuthenticationService;
