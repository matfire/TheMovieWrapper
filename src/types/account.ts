import Movie from '../models/movie/Movie';
import { Country, Language, List } from './generic';

type FavoriteSortValues = 'created_at.asc' | 'created_at.desc';
type MediaValue = 'tv' | 'movie';

interface AccountDetailsResults {
  avatar: {
    gravatar: {
      hash: string
    }
  },
  id: number;
  iso_639_1: Language;
  iso_3166_1: Country;
  name: string;
  include_adult: boolean;
  username: string;
}

interface CreatedListsResults {
  page: number;
  results: List[];
  total_results: number;
  total_pages: number;
}

interface FavoriteMoviesInput {
  accountID: number;
  sort_by?: FavoriteSortValues;
  page?: number
}

interface FavoriteMoviesResults {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

interface MarkFavoriteInput {
  accountID: number;
  media_id: number;
  media_type: MediaValue;
  favorite: boolean;
}

export {
  AccountDetailsResults,
  CreatedListsResults,
  FavoriteMoviesInput, FavoriteMoviesResults,
  MarkFavoriteInput,
};
