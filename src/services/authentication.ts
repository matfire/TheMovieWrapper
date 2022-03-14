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

  async createAuthUrl(redirectUrl: string): Promise<string> {
    const token = await this.getAuthenticationToken();
    return `https://www.themoviedb.org/authenticate/${token.request_token}?redirect_to=${redirectUrl}`;
  }

  async createSession(requestToken: string): Promise<SessionResult> {
    const res = await this.$http.post('/authentication/session/new', {
      request_token: requestToken,
    });
    return res.data as SessionResult;
  }
}

export default AuthenticationService;
