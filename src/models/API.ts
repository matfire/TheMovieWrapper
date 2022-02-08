import axios, { AxiosInstance } from 'axios';
import TrendingTimeSpan from '../types/generic';
import Movie from './Movie';

class API {
  apiKey: string;

  $http: AxiosInstance;

  constructor(apiKey:string) {
    this.apiKey = apiKey;
    this.$http = axios.create({ baseURL: 'https://api.themoviedb.org/3', params: { api_key: apiKey } });
  }

  async getTrending(timeSpan: TrendingTimeSpan): Promise<Movie[]> {
    const res = await this.$http.get(`/trending/all/${timeSpan}`);
    return res.data.results.map((e: any) => Movie.fromJson(e));
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

export default API;
