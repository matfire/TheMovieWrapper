import Movie from '../models/Movie';

type MovieStatus = 'Rumored' | 'Planned' | 'In Production' | 'Post Production' | 'Released' | 'Canceled';

interface TrendingMovie {
  page: number;
  total_pages: number;
  total_results: number;
  results: Movie[]
}

export { MovieStatus, TrendingMovie };
