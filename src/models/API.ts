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
    const res = await this.$http.get(`trending/all/${timeSpan}`);
    return res.data.results.map((e: any) => Movie.fromJson(e));
  }
}

export default API;
