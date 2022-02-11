import axios, { AxiosInstance } from 'axios';
import AuthenticationService from '../services/authentication';

class API {
  apiKey: string;

  $http: AxiosInstance;

  auth: AuthenticationService;

  constructor(apiKey:string) {
    this.apiKey = apiKey;
    this.$http = axios.create({ baseURL: 'https://api.themoviedb.org/3', params: { api_key: apiKey } });

    this.auth = new AuthenticationService(this.$http);
  }
}

export default API;
