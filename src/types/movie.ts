import Movie from '../models/movie/Movie';

type MovieStatus = 'Rumored' | 'Planned' | 'In Production' | 'Post Production' | 'Released' | 'Canceled';

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

export {
  MovieStatus, TrendingMovieResult, SearchMovieInput, SearchMovieResult, NowPlayingMovieResult,
  AlternativeTitlesResult, AlternativeTitlesInput,
};
