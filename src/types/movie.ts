import Movie from '../models/movie/Movie';
import { List } from './generic';

type MovieStatus = 'Rumored' | 'Planned' | 'In Production' | 'Post Production' | 'Released' | 'Canceled' | 'Unknown';

interface SearchMovieInput {
  query: string;
  page?: number;
  include_adult?: boolean;
  region?: string;
  year ?: number;
  primary_release_year ?: number;
}

interface TrendingMovieResult {
  page: number;
  total_pages: number;
  total_results: number;
  results: Movie[]
}

interface SearchMovieResult {
  page: number;
  total_pages: number;
  total_results: number;
  results: Movie[]
}

interface NowPlayingMovieResult {
  page: number;
  total_pages: number;
  total_results: number;
  results: Movie[];
  dates: {
    maximum: Date;
    minimum: Date;
  }
}

interface AlternativeTitlesInput {
  movieId: string;
  country ?: string; // TODO create proper type for iso_3166_1
}

interface AlternativeTitlesResult {
  id: number;
  titles: {
    iso_3166_1: string, // TODO create proper type for iso_3166_1
    title: string,
    type: string
  }[]
}

interface ChangesInput {
  movieId: string;
  start_date?: Date;
  end_date?: Date;
  page?: number
}

interface ChangesResult {
  changes: {
    key: string,
    items: {
      id: string;
      action: string;
      time: Date;
      iso_639_1: string; // TODO create proper type for iso_639_1
      value: string;
      original_value: string;
    }[]
  }[]
}

interface ExternalIdsResult {
  imdb_id ?: string;
  facebook_id ?: string;
  instagram_id ?: string;
  twitter_id ?: string;
  id ?: number;
}

interface ListInput {
  movieId: string;
  page?: number;
}

interface ListResult {
  id: number;
  page: number;
  total_pages: number;
  total_results: number;
  results: List[]
}

export {
  MovieStatus, TrendingMovieResult, SearchMovieInput, SearchMovieResult, NowPlayingMovieResult,
  AlternativeTitlesResult, AlternativeTitlesInput, ChangesInput, ChangesResult,
  ExternalIdsResult, ListResult, ListInput,
};
