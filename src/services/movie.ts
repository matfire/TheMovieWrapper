import { AxiosInstance } from 'axios';
import Movie from '../models/movie/Movie';
import { KeywordResult, Language, TrendingTimeSpan } from '../types/generic';
import {
  SearchMovieInput, MovieListResult,
  NowPlayingMovieResult,
  AlternativeTitlesResult, AlternativeTitlesInput,
  ChangesInput, ChangesResult,
  ExternalIdsResult,
  ListResult,
  MoviePageInput,
  ReleaseDateResults,
} from '../types/movie';

class MovieService {
  private session_id?: string;

  private $http: AxiosInstance;

  private language: Language = 'en';

  constructor(client: AxiosInstance) {
    this.$http = client;
  }

  async getTrending(timeSpan: TrendingTimeSpan, page = 1): Promise<MovieListResult> {
    const { data } = await this.$http.get(`/trending/movie/${timeSpan}`, { params: { ...this.$http.defaults.params, page, language: this.language } });
    return {
      total_pages: data.total_pages,
      total_results: data.total_results,
      page,
      results: data.results.map((e: any) => Movie.fromJson(e)),
    };
  }

  async search(input: SearchMovieInput): Promise<MovieListResult> {
    const { data } = await this.$http.get('/search/movie', { params: { ...this.$http.defaults.params, language: this.language, ...input } });
    return {
      page: input.page || 1,
      total_results: data.total_results,
      total_pages: data.total_pages,
      results: data.results.map((e:any) => Movie.fromJson(e)),
    };
  }

  // TODO: add append_to_response parameter

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

  // TODO Credits Go Here

  async getExternalIds(movieId: string): Promise<ExternalIdsResult> {
    const { data } = await this.$http.get(`/movie/${movieId}/external_ids`);
    return data as ExternalIdsResult;
  }

  // TODO Images Go Here

  async getKeyword(movieId: string): Promise<KeywordResult> {
    const { data } = await this.$http.get(`/movie/${movieId}/keywords`);
    return data as KeywordResult;
  }

  async getLists(listData: MoviePageInput): Promise<ListResult> {
    const { data } = await this.$http.get(`/movie/${listData.movieId}/lists`, { params: { ...this.$http.defaults.params, language: this.language, page: listData.page } });
    return data as ListResult;
  }

  async getRecommendations(recommendationsData: MoviePageInput): Promise<MovieListResult> {
    const { data } = await this.$http.get(`/movie/${recommendationsData.movieId}/recommendations`, { params: { ...this.$http.defaults.params, language: this.language, page: recommendationsData.page } });
    return {
      page: data.page,
      total_pages: data.total_pages,
      total_results: data.total_results,
      results: data.results.map((e: any) => Movie.fromJson(e)),
    };
  }

  async getReleaseDates(movieId: string): Promise<ReleaseDateResults> {
    const { data } = await this.$http.get(`/movie/${movieId}/release_dates`);
    return data as ReleaseDateResults;
  }

  // TODO Reviews Go Here

  async getSimilar(similarData: MoviePageInput): Promise<MovieListResult> {
    const { data } = await this.$http.get(`/movie/${similarData.movieId}/similar`, { params: { ...this.$http.defaults.params, language: this.language, page: similarData.page } });
    return {
      page: data.page,
      total_pages: data.total_pages,
      total_results: data.total_results,
      results: data.results.map((e: any) => Movie.fromJson(e)),
    };
  }

  setSessionId(sId: string) {
    this.session_id = sId;
  }

  setLanguage(l:Language) { this.language = l; }
}

export default MovieService;
