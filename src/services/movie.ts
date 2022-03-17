import { AxiosInstance } from 'axios';
import Movie from '../models/movie/Movie';
import Video from '../models/Video';
import {
  GenericListResult,
  KeywordResult, Language, Response, TrendingTimeSpan,
} from '../types/generic';
import {
  SearchMovieInput,
  NowPlayingMovieResult,
  AlternativeTitlesResult, AlternativeTitlesInput,
  ChangesInput, ChangesResult,
  ExternalIdsResult,
  ListResult,
  MoviePageInput,
  ReleaseDateResults,
  TranslationResults,
  VideoResults,
  WatchProvidersResult,
  PopularInput,
  TopRatedInput,
  UpcomingInput,
  AppendToResponseMovie,
  ImagesResult,
} from '../types/movie';

class MovieService {
  private session_id?: string;

  private $http: AxiosInstance;

  private language: Language = 'en';

  constructor(client: AxiosInstance) {
    this.$http = client;
  }

  async getTrending(timeSpan: TrendingTimeSpan, page = 1): Promise<GenericListResult<Movie>> {
    const { data } = await this.$http.get(`/trending/movie/${timeSpan}`, { params: { ...this.$http.defaults.params, page, language: this.language } });
    return {
      total_pages: data.total_pages,
      total_results: data.total_results,
      page,
      results: data.results.map((e: any) => Movie.fromJson(e)),
    };
  }

  async search(input: SearchMovieInput): Promise<GenericListResult<Movie>> {
    const { data } = await this.$http.get('/search/movie', { params: { ...this.$http.defaults.params, language: this.language, ...input } });
    return {
      page: input.page || 1,
      total_results: data.total_results,
      total_pages: data.total_pages,
      results: data.results.map((e:any) => Movie.fromJson(e)),
    };
  }

  async getMovie(id: number, appendToResponse ?: AppendToResponseMovie[]): Promise<Movie> {
    const { data } = await this.$http.get(`/movie/${id}`, {
      params: {
        ...this.$http.defaults.params,
        language: this.language,
        append_to_response: appendToResponse?.join(','),
      },
    });
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

  async getPopular(popularData?: PopularInput): Promise<GenericListResult<Movie>> {
    const { data } = await this.$http.get('/movie/popular', {
      params: {
        ...this.$http.defaults.params,
        region: popularData?.region,
        language: this.language,
        page: popularData?.page,
      },
    });
    return {
      page: data.page,
      total_pages: data.total_pages,
      total_results: data.total_results,
      results: data.results.map((e: any) => Movie.fromJson(e)),
    };
  }

  async getTopRated(topRatedData?: TopRatedInput): Promise<GenericListResult<Movie>> {
    const { data } = await this.$http.get('/movie/top_rated', {
      params: {
        ...this.$http.defaults.params,
        region: topRatedData?.region,
        language: this.language,
        page: topRatedData?.page,
      },
    });

    return {
      page: data.page,
      total_pages: data.total_pages,
      total_results: data.total_results,
      results: data.results.map((e: any) => Movie.fromJson(e)),
    };
  }

  async getUpcoming(upcomingData?: UpcomingInput): Promise<GenericListResult<Movie>> {
    const { data } = await this.$http.get('/movie/upcoming', {
      params: {
        ...this.$http.defaults.params,
        region: upcomingData?.region,
        language: this.language,
        page: upcomingData?.page,
      },
    });

    return {
      page: data.page,
      total_pages: data.total_pages,
      total_results: data.total_results,
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

  async getExternalIds(movieId: number): Promise<ExternalIdsResult> {
    const { data } = await this.$http.get(`/movie/${movieId}/external_ids`);
    return data as ExternalIdsResult;
  }

  // TODO Images Go Here
  async getImages(movieId: number, includeImageLanguage ?: Language[]): Promise<ImagesResult> {
    const { data } = await this.$http.get(`/movie/${movieId}/images`, {
      params: {
        ...this.$http.defaults.params,
        language: this.language,
        include_image_language: includeImageLanguage?.join(','),
      },
    });
    return data as ImagesResult;
  }

  async getKeyword(movieId: number): Promise<KeywordResult> {
    const { data } = await this.$http.get(`/movie/${movieId}/keywords`);
    return data as KeywordResult;
  }

  async getLists(listData: MoviePageInput): Promise<ListResult> {
    const { data } = await this.$http.get(`/movie/${listData.movieId}/lists`, { params: { ...this.$http.defaults.params, language: this.language, page: listData.page } });
    return data as ListResult;
  }

  async getRecommendations(recommendationsData: MoviePageInput): Promise<GenericListResult<Movie>> {
    const { data } = await this.$http.get(`/movie/${recommendationsData.movieId}/recommendations`, { params: { ...this.$http.defaults.params, language: this.language, page: recommendationsData.page } });
    return {
      page: data.page,
      total_pages: data.total_pages,
      total_results: data.total_results,
      results: data.results.map((e: any) => Movie.fromJson(e)),
    };
  }

  async getReleaseDates(movieId: number): Promise<ReleaseDateResults> {
    const { data } = await this.$http.get(`/movie/${movieId}/release_dates`);
    return data as ReleaseDateResults;
  }

  // TODO Reviews Go Here

  async getSimilar(similarData: MoviePageInput): Promise<GenericListResult<Movie>> {
    const { data } = await this.$http.get(`/movie/${similarData.movieId}/similar`, { params: { ...this.$http.defaults.params, language: this.language, page: similarData.page } });
    return {
      page: data.page,
      total_pages: data.total_pages,
      total_results: data.total_results,
      results: data.results.map((e: any) => Movie.fromJson(e)),
    };
  }

  async getTranslations(movieId: number): Promise<TranslationResults> {
    const { data } = await this.$http.get(`/movie/${movieId}/translations`);
    return data as TranslationResults;
  }

  async getVideos(movieId: number): Promise<VideoResults> {
    const { data } = await this.$http.get(`/movie/${movieId}/videos`, { params: { ...this.$http.defaults.params, language: this.language } });
    return {
      id: data.id,
      results: data.results.map((e:any) => Video.fromJson(e)),
    };
  }

  async getWatchProviders(movieId: number): Promise<WatchProvidersResult> {
    const { data } = await this.$http.get(`/movie/${movieId}/watch/providers`);
    return data as WatchProvidersResult;
  }

  async rate(movieId: number, value:number): Promise<Response> {
    const { data } = await this.$http.post(`/movie/${movieId}/rating`, { value }, {
      params: { ...this.$http.defaults.params, session_id: this.session_id },
    });
    return data as Response;
  }

  async deleteRating(movieId: number): Promise<Response> {
    const { data } = await this.$http.delete(`/movie/${movieId}/rating`, {
      params: { ...this.$http.defaults.params, session_id: this.session_id },
    });

    return data as Response;
  }

  setSessionId(sId: string) {
    this.session_id = sId;
  }

  setLanguage(l:Language) { this.language = l; }
}

export default MovieService;
