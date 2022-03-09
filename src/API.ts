import axios, { AxiosInstance } from 'axios';
import AuthenticationService from './services/authentication';
import MovieService from './services/movie';
import { Language } from './types/generic';

class API {
  apiKey: string;

  $http: AxiosInstance;

  auth: AuthenticationService;

  movies: MovieService;

  language: Language;

  private imageUrl = 'https://image.tmdb.org/t/p/';

  constructor(apiKey:string) {
    this.apiKey = apiKey;
    this.language = 'en';
    this.$http = axios.create({ baseURL: 'https://api.themoviedb.org/3', params: { test: 'toto', api_key: apiKey } });
    this.auth = new AuthenticationService(this.$http);
    this.movies = new MovieService(this.$http);
  }

  setLanguage(l: Language) {
    this.language = l;
    this.movies.setLanguage(l);
  }

  getImageUrl(path: string, size:string): string {
    return `${this.imageUrl}/${size}/${path}`;
  }
}

export default API;
