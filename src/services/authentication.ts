import { AxiosInstance } from 'axios';

class AuthenticationService {
  $http: AxiosInstance;

  constructor(httpClient: AxiosInstance) {
    this.$http = httpClient;
  }

  async getAuthenticationToken(): Promise<string> {
    const res = await this.$http.get('/authentication/token/new');
    if (!res.data.success) {
      throw new Error('Could not get request token');
    }
    return res.data.request_token;
  }

  async createAuthUrl(redirectUrl: string): Promise<string> {
    const token = await this.getAuthenticationToken();

    return `https://www.themoviedb.org/authenticate/${token}?redirect_to=${redirectUrl}`;
  }

  async createSession(requestToken:string): Promise<string> {
    const res = await this.$http.post('/authentication/session/new', { request_token: requestToken });
    if (!res.data.success) {
      throw new Error('Could not get session id');
    }
    return res.data.session_id;
  }
}

export default AuthenticationService;
