import { AxiosInstance } from 'axios';
import Movie from '../models/movie/Movie';
import {
  AccountDetailsResults,
  CreatedListsInput,
  MarkFavoriteInput, SortPageAccountInput, WatchlistInput,
} from '../types/account';
import {
  GenericListResult, Language, List, Response,
} from '../types/generic';

class AccountService {
  $http: AxiosInstance;

  session_id: string | undefined;

  account_id: string | undefined;

  language: Language = "en";

  constructor(httpClient: AxiosInstance) {
    this.$http = httpClient;
  }

  async getAccount(): Promise<AccountDetailsResults> {
    const { data } = await this.$http.get('/account', {
      params: { ...this.$http.defaults.params, session_id: this.session_id },
    });
    return data as AccountDetailsResults;
  }

  async getCreatedLists(createdInput: CreatedListsInput): Promise<GenericListResult<List>> {
    const { data } = await this.$http.get(`/account/${createdInput.accountID}/lists`, {
      params: {
        ...this.$http.defaults.params,
        session_id: this.session_id,
        page: createdInput.page,
        language: this.language,
      },
    });

    return data as GenericListResult<List>;
  }

  async getFavoriteMovies(favoriteInput: SortPageAccountInput): Promise<GenericListResult<Movie>> {
    const { data } = await this.$http.get(`/account/${favoriteInput.accountID}/favorite/movies`, {
      params: {
        ...this.$http.defaults.params,
        session_id: this.session_id,
        sort_by: favoriteInput.sort_by,
        page: favoriteInput.page,
        language: this.language,
      },
    });

    return {
      page: data.page,
      total_pages: data.total_pages,
      total_results: data.total_results,
      results: data.results.map((e:any) => Movie.fromJson(e)),
    };
  }

  // TODO favorite tv shows here

  async markAsFavorite(favoriteInput: MarkFavoriteInput): Promise<Response> {
    const { data } = await this.$http.post(`/account/${favoriteInput.accountID}/favorite`, {
      media_type: favoriteInput.media_type,
      media_id: favoriteInput.media_id,
      favorite: favoriteInput.favorite,
    }, {
      params: { ...this.$http.defaults.params, session_id: this.session_id },
    });

    return data as Response;
  }

  async getRatedMovies(ratedInput: SortPageAccountInput): Promise<GenericListResult<Movie>> {
    const { data } = await this.$http.get(`/account/${ratedInput.accountID}/rated/movies`, {
      params: {
        ...this.$http.defaults.params,
        session_id: this.session_id,
        sort_by: ratedInput.sort_by,
        page: ratedInput.page,
        language: this.language,
      },
    });

    return {
      page: data.page,
      total_pages: data.total_pages,
      total_results: data.total_results,
      results: data.results.map((e:any) => Movie.fromJson(e).addRating(parseInt(e.rating, 10))),
    };
  }

  // TODO get rated tv shows

  // TODO get rated tv episodes

  async addToWatchlist(watchInput: WatchlistInput): Promise<Response> {
    const { data } = await this.$http.post(`/account/${watchInput.accountID}/watchlist`, {
      media_type: watchInput.media_type,
      media_id: watchInput.media_id,
      watchlist: watchInput.watchlist,
    }, {
      params: { ...this.$http.defaults.params, session_id: this.session_id },
    });
    return data as Response;
  }

  async getMovieWatchlist(watchInput: SortPageAccountInput): Promise<GenericListResult<Movie>> {
    const { data } = await this.$http.get(`/account/${watchInput.accountID}/watchlist/movies`, {
      params: {
        ...this.$http.defaults.params,
        session_id: this.session_id,
        sort_by: watchInput.sort_by,
        page: watchInput.page,
        language: this.language,
      },
    });

    return {
      page: data.page,
      total_pages: data.total_pages,
      total_results: data.total_results,
      results: data.results.map((e:any) => Movie.fromJson(e)),
    };
  }

  // TODO get tv show watchlist

  setSessionId(sessionId: string) {
    this.session_id = sessionId;
  }

  setLanguage(language: Language) {
    this.language = language;
  }
}

export default AccountService;
