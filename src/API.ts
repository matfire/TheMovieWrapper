import axios, { AxiosInstance } from 'axios';
import AccountService from './services/account';
import AuthenticationService from './services/authentication';
import GenreService from './services/genre';
import MovieService from './services/movie';
import TVService from './services/tv';
import { Language } from './types/generic';

class API {
  apiKey: string;

  $http: AxiosInstance;

  auth: AuthenticationService;

  movies: MovieService;

  tv: TVService;

  account: AccountService;

  genre: GenreService;

  language: Language;

  private imageUrl = 'https://image.tmdb.org/t/p/';

  private sessionId: number | undefined;

  constructor(apiKey:string) {
    this.apiKey = apiKey;
    this.language = 'en';
    this.$http = axios.create({ baseURL: 'https://api.themoviedb.org/3', params: { api_key: apiKey } });
    this.auth = new AuthenticationService(this.$http);
    this.movies = new MovieService(this.$http);
    this.tv = new TVService(this.$http);
    this.account = new AccountService(this.$http);
    this.genre = new GenreService(this.$http);
  }

  setLanguage(l: Language) {
    this.language = l;
    this.movies.setLanguage(l);
    this.tv.setLanguage(l);
    this.account.setLanguage(l);
  }

  getImageUrl(path: string, size:string): string {
    return `${this.imageUrl}/${size}/${path}`;
  }

  setSessionId(session: number) {
    this.sessionId = session;
    this.movies.setSessionId(session);
    this.tv.setSessionId(session);
    this.account.setSessionId(session);
  }
}

export default API;
