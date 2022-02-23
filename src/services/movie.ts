import { AxiosInstance } from 'axios';
import Movie from '../models/Movie';
import { Language, TrendingTimeSpan } from '../types/generic';
import { SearchMovieInput, SearchMovieResult, TrendingMovieResult } from '../types/movie';

class MovieService {
  private session_id?: string;

  private $http: AxiosInstance;

  private language: Language = 'en';

  constructor(client: AxiosInstance) {
    this.$http = client;
  }

  async getTrending(timeSpan: TrendingTimeSpan, page = 1): Promise<TrendingMovieResult> {
    const { data } = await this.$http.get(`/trending/movie/${timeSpan}`, { params: { ...this.$http.defaults.params, page } });
    return {
      total_pages: data.total_pages,
      total_results: data.total_results,
      page,
      results: data.results.map((e: any) => Movie.fromJson(e)),
    };
  }

  async search(input: SearchMovieInput): Promise<SearchMovieResult> {
    const { data } = await this.$http.get('/search/movie', { params: { ...this.$http.defaults.params, language: this.language, ...input } });
    return {
      page: input.page || 1,
      total_results: data.total_results,
      total_pages: data.total_pages,
      results: data.results.map((e:any) => Movie.fromJson(e)),
    };
  }

  setSessionId(sId: string) {
    this.session_id = sId;
  }

  setLanguage(l:Language) { this.language = l; }
}

export default MovieService;
