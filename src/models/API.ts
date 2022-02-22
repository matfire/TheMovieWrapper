import axios, { AxiosInstance } from 'axios';
import { $log, Logger } from '@tsed/logger';
import AuthenticationService from '../services/authentication';

class API {
  apiKey: string;

  $http: AxiosInstance;

  logger: Logger;

  auth: AuthenticationService;

  constructor(apiKey:string, testing = false) {
    this.apiKey = apiKey;
    this.$http = axios.create({ baseURL: 'https://api.themoviedb.org/3', params: { api_key: apiKey } });
    this.logger = $log;
    this.logger.name = 'TheMovieGetter';
    this.logger.level = 'debug';
    if (testing) {
      this.$http.interceptors.response.use((value) => {
        this.logger.info(`${value.config.url}`);
        return value;
      }, (error) => {
        this.logger.error(`Request for url ${error.config.url} failed with error ${error.response.status}`);
        this.logger.error(`query data: ${JSON.stringify(error.config.params)}`);
        Promise.reject(error);
      });
    }
    this.auth = new AuthenticationService(this.$http);
  }
}

export default API;
