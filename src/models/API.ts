import axios, { AxiosInstance } from 'axios';
import TrendingTimeSpan from '../types/generic';
import Movie from './Movie';

class API {
  api_key: string;

  $http: AxiosInstance;

  constructor(api_key:string) {
    this.api_key = api_key;
    this.$http = axios.create({ baseURL: 'https://api.themoviedb.org/3', params: { api_key } });
  }

  async getTrending(timeSpan: TrendingTimeSpan): Promise<Movie[]> {
    console.log(timeSpan);
    return [];
  }
}

export { API };
