import { AxiosInstance } from 'axios';
import Movie from '../models/movie/Movie';
import { Language, TrendingTimeSpan } from '../types/generic';
import {
  SearchMovieInput, SearchMovieResult, 
  TrendingMovieResult,
  NowPlayingMovieResult, 
  AlternativeTitlesResult, AlternativeTitlesInput,
  ChangesInput, ChangesResult,
} from '../types/movie';

class MovieService {
  private session_id?: string;

  private $http: AxiosInstance;

  private language: Language = 'en';

  constructor(client: AxiosInstance) {
    this.$http = client;
  }

  async getTrending(timeSpan: TrendingTimeSpan, page = 1): Promise<TrendingMovieResult> {
    const { data } = await this.$http.get(`/trending/movie/${timeSpan}`, { params: { ...this.$http.defaults.params, page, language: this.language } });
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

  async getMovie(id: number): Promise<Movie> {
    const { data } = await this.$http.get(`/movie/${id}`, { params: { ...this.$http.defaults.params, language: this.language } });
    return Movie.fromJson(data);
  }

  async getLatest(): Promise<Movie> {
    const { data } = await this.$http.get('/movie/latest', { params: { ...this.$http.defaults.params, language: this.language } });
    return Movie.fromJson(data);
  }

  async getNowPlaying(): Promise<NowPlayingMovieResult> {
    const { data } = await this.$http.get('/movie/now_playing', { params: { ...this.$http.defaults.params, language: this.language } });

    return {
      page: data.page,
      total_pages: data.total_pages,
      total_results: data.total_results,
      dates: {
        maximum: new Date(data.dates.maximum),
        minimum: new Date(data.dates.minimum),
      },
      results: data.results.map((e: any) => Movie.fromJson(e)),
    };
  }

  async getAlternativeTitles(titleData: AlternativeTitlesInput): Promise<AlternativeTitlesResult> {
    const { data } = await this.$http.get(`/movie/${titleData.movieId}/alternative_titles`, { params: { ...this.$http.defaults.params, country: titleData.country } });

    return {
      id: data.id,
      titles: [...data.titles],
    };
  }

  async getChanges(changesData: ChangesInput): Promise<ChangesResult> {
    const { data } = await this.$http.get(`/movie/${changesData.movieId}/changes`, {
      params: {
        ...this.$http.defaults.params,
        start_date: changesData.start_date,
        end_date: changesData.end_date,
        page: changesData.page,
      },
    });

    return {
      changes: data.changes,
    };
  }

  setSessionId(sId: string) {
    this.session_id = sId;
  }

  setLanguage(l:Language) { this.language = l; }
}

export default MovieService;
