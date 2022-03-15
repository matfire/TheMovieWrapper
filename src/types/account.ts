import { Country, Language } from './generic';

type SortValues = 'created_at.asc' | 'created_at.desc';
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

interface CreatedListsInput {
  accountID: number;
  page ?: number;
}

interface MarkFavoriteInput {
  accountID: number;
  media_id: number;
  media_type: MediaValue;
  favorite: boolean;
}

interface SortPageAccountInput {
  sort_by?: SortValues;
  page?: number;
  accountID: number;
}

interface WatchlistInput {
  accountID: number;
  media_type: MediaValue;
  media_id: number;
  watchlist: boolean;
}

export {
  AccountDetailsResults,
  CreatedListsInput,
  MarkFavoriteInput,
  SortPageAccountInput,
  WatchlistInput,
};
