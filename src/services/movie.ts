import { AxiosInstance } from 'axios';
import Movie from '../models/Movie';
import TrendingTimeSpan from '../types/generic';
import { TrendingMovie } from '../types/movie';

class MovieService {
  session_id?: string;

  $http: AxiosInstance;

  constructor(http: AxiosInstance) {
    this.$http = http;
  }

  async getTrending(timeSpan: TrendingTimeSpan, page = 1): Promise<TrendingMovie> {
    const { data } = await this.$http.get(`/trending/movie/${timeSpan}`, {
      params: { page },
    });
    return {
      total_pages: data.total_pages,
      total_results: data.total_results,
      page,
      results: data.results.map((e: any) => Movie.fromJson(e)),
    };
  }
}

export default MovieService;