import Movie from '../models/movie/Movie';
import { Language, List } from './generic';

type MovieStatus = 'Rumored' | 'Planned' | 'In Production' | 'Post Production' | 'Released' | 'Canceled' | 'Unknown';

interface SearchMovieInput {
  query: string;
  page?: number;
  include_adult?: boolean;
  region?: string;
  year ?: number;
  primary_release_year ?: number;
}

interface MovieListResult {
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

interface MoviePageInput {
  movieId: string;
  page?: number;
}

interface ChangesInput extends MoviePageInput {
  start_date?: Date;
  end_date?: Date;
}

interface ChangesResult {
  changes: {
    key: string,
    items: {
      id: string;
      action: string;
      time: Date;
      iso_639_1: Language;
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

interface ListResult {
  id: number;
  page: number;
  total_pages: number;
  total_results: number;
  results: List[]
}

interface ReleaseDateResults {
  id: number;
  results: {
    iso_3166_1: string;
    release_dates: {
      certification: string;
      iso_639_1: Language;
      release_date: Date;
      type: number;
      note: string;
    }[]
  }[]
}

interface TranslationResults {
  id: number;
  translations: {
    iso_3166_1: string;
    iso_639_1: Language;
    name: string;
    english_name: string;
    data: {
      title: string;
      overview: string;
      homepage: string;
    }
  }[]
}

export {
  MovieStatus, SearchMovieInput, MovieListResult, NowPlayingMovieResult,
  AlternativeTitlesResult, AlternativeTitlesInput, ChangesInput, ChangesResult,
  ExternalIdsResult, ListResult, MoviePageInput, ReleaseDateResults,
  TranslationResults,
};
