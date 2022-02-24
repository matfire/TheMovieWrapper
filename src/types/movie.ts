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

export {
  MovieStatus, TrendingMovieResult, SearchMovieInput, SearchMovieResult,
};
