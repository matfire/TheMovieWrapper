import API from '..';
import Movie from '../models/Movie';
import TrendingTimeSpan from '../types/generic';
import { TrendingMovie } from '../types/movie';

class MovieService {
  session_id?: string;

  api: API;

  constructor(client: API) {
    this.api = client;
  }

  async getTrending(timeSpan: TrendingTimeSpan, page = 1): Promise<TrendingMovie> {
    const { data } = await this.api.$http.get(`/trending/movie/${timeSpan}`);
    return {
      total_pages: data.total_pages,
      total_results: data.total_results,
      page,
      results: data.results.map((e: any) => Movie.fromJson(e)),
    };
  }

  setSessionId(sId: string) {
    this.session_id = sId;
  }
}

export default MovieService;
