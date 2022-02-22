import axios, { AxiosInstance } from 'axios';
import { $log, Logger } from '@tsed/logger';
import AuthenticationService from './services/authentication';
import MovieService from './services/movie';

const BASE_URL = 'https://api.themoviedb.org/3';

class API {
  apiKey: string;

  $http: AxiosInstance;

  logger: Logger;

  auth: AuthenticationService;

  movies: MovieService;

  constructor(apiKey:string, testing = false) {
    this.apiKey = apiKey;
    this.$http = axios.create({ baseURL: BASE_URL, params: { api_key: apiKey } });
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
    this.movies = new MovieService({ baseUrl: BASE_URL, params: { api_key: apiKey } });
  }
}

export default API;
