import {
  Cast, Country, Crew, GenericListResult, Image, Language, List, Video,
} from '../../types/generic';
import { MovieReview, MovieStatus, Translation } from '../../types/movie';
import Genre from '../Genre';

interface Credits {
  cast: Cast[],
  crew: Crew[]
}

interface Images {
  backdrops: Image[],
  posters: Image[],
  logos: Image[]
}

interface AccountStates {
  favorite: boolean,
  rated: {
    value: number
  } | boolean,
  watchlist: boolean,
}

interface Title {
  iso_3166_1: Country,
  title: string,
  type: string
}

interface ExternalIds {
  imdb_id?: string,
  facebook_id?: string,
  instagram_id?: string,
  twitter_id?: string
}

interface Keyword {
  id: number;
  name: string;
}

interface IMovieBasicData {
    id: number;
    poster_path: string;
    title: string;
    original_title: string
}

interface IMovieExtraData {
    adult?: boolean;
    backdrop_path?: string;
    belongs_to_collection?: null | object;
    budget?: number;
    genres?: Genre[];
    homepage?: string;
    imdb_id?: string;
    original_language?: Language;
    overview?: string;
    popularity?: number;
    release_date?: Date;
    revenue?: number;
    runtime?: number;
    status?: MovieStatus;
    tagline?: string;
    video?: boolean;
    vote_average?: number;
    vote_count?: number;
}

interface Change {
  key: string;
  items: {
    id: string;
    action: string;
    time: Date;
    iso_639_1: Language;
    value: string;
    original_value: string;
  }[]
}

interface ReleaseDate {
  iso_3166_1: Country,
  release_dates: {
    certification: string;
    iso_639_1: Language;
    note: string;
    release_date: Date;
    type: number;
  }[]
}

interface MovieExport {
  id: number;
  poster_path: string;
  title: string;
  original_title: string;
  adult?: boolean;
  backdrop_path?: string;
  belongs_to_collection?: null | object;
  budget?: number;
  genres: Genre[];
  homepage?: string;
  imdb_id?: string;
  original_language?: Language;
  overview?: string;
  popularity?: number;
  release_date?: Date;
  revenue?: number;
  runtime?: number;
  status?: MovieStatus;
  tagline?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
  rating?: number;
  credits: Credits | undefined;
  images: Images | undefined;
  videos: Video[] | undefined;
  account_states: AccountStates | undefined;
  alternative_titles: Title[] | undefined;
  external_ids: ExternalIds | undefined;
  changes: Change[] | undefined;
  keywords: Keyword[] | undefined;
  lists: GenericListResult<List> | undefined;
  // eslint-disable-next-line no-use-before-define
  recommendations: GenericListResult<MovieExport> | undefined;
  release_dates: ReleaseDate[] | undefined;
  reviews: GenericListResult<MovieReview> | undefined;
  // eslint-disable-next-line no-use-before-define
  similar: GenericListResult<MovieExport> | undefined;
  translations: Translation[] | undefined;
}

class Movie implements IMovieBasicData, IMovieExtraData {
  id: number;

  poster_path: string;

  title: string;

  original_title: string;

  adult?: boolean;

  backdrop_path?: string;

  belongs_to_collection?: null | object;

  budget?: number;

  genres: Genre[] = [];

  homepage?: string;

  imdb_id?: string;

  original_language?: Language;

  overview?: string;

  popularity?: number;

  release_date?: Date;

  revenue?: number;

  runtime?: number;

  status?: MovieStatus;

  tagline?: string;

  video?: boolean;

  vote_average?: number;

  vote_count?: number;

  rating?: number;

  credits: Credits | undefined;

  images: Images | undefined;

  videos: Video[] | undefined;

  account_states: AccountStates | undefined;

  alternative_titles: Title[] | undefined;

  external_ids: ExternalIds | undefined;

  changes: Change[] | undefined;

  keywords: Keyword[] | undefined;

  lists: GenericListResult<List> | undefined;

  // eslint-disable-next-line no-use-before-define
  recommendations: GenericListResult<Movie> | undefined;

  release_dates: ReleaseDate[] | undefined;

  reviews: GenericListResult<MovieReview> | undefined;

  // eslint-disable-next-line no-use-before-define
  similar: GenericListResult<Movie> | undefined;

  translations: Translation[] | undefined;

  constructor(initialData: IMovieBasicData, extraData ?: IMovieExtraData) {
    this.id = initialData.id;
    this.poster_path = initialData.poster_path;
    this.title = initialData.title;
    this.original_title = initialData.original_title;
    if (extraData) {
      this.readExtraData(extraData);
    }
  }

  private readExtraData(data: IMovieExtraData) {
    this.adult = data.adult;
    this.backdrop_path = data.backdrop_path;
    this.belongs_to_collection = data.belongs_to_collection;
    this.budget = data.budget;
    this.homepage = data.homepage;
    this.imdb_id = data.imdb_id;
    this.original_language = data.original_language;
    this.overview = data.overview;
    this.popularity = data.popularity;
    this.release_date = data.release_date ? new Date(data.release_date) : undefined;
    this.revenue = data.revenue;
    this.runtime = data.runtime;
    this.status = data.status ?? 'Unknown';
    this.tagline = data.tagline;
    this.video = data.video;
    this.vote_average = data.vote_average;
    this.vote_count = data.vote_count;
  }

  private appendToResponse(data: any) {
    if (data.external_ids) {
      this.external_ids = data.external_ids;
    }
    if (data.account_states) {
      this.account_states = data.account_states;
    }
    if (data.alternative_titles) {
      this.alternative_titles = data.alternative_titles?.titles;
    }
    if (data.credits) {
      this.credits = data.credits;
    }
    if (data.images) {
      this.images = data.images;
    }
    if (data.videos) {
      this.videos = data?.videos?.results;
    }
    if (data.changes) {
      this.changes = data?.changes?.changes;
    }
    if (data.keywords) {
      this.keywords = data.keywords?.keywords;
    }
    if (data.lists) {
      this.lists = data.lists;
    }
    if (data.recommendations) {
      this.recommendations = {
        ...data.recommendations,
        results: data.recommendations.results.map((e:any) => Movie.fromJson(e)),
      };
    }
    if (data.release_dates) {
      this.release_dates = data.release_dates;
    }
    if (data.reviews) {
      this.reviews = data.reviews;
    }
    if (data.similar) {
      this.similar = {
        ...data.similar,
        results: data.similar.results.map((e:any) => Movie.fromJson(e)),
      };
    }
    if (data.translations) {
      this.translations = data.translations?.translations;
    }
    return this;
  }

  static fromJson(data: any): Movie {
    const initialData: IMovieBasicData = { ...data };

    const extraData: IMovieExtraData = { ...data };
    return new Movie(initialData, extraData).appendToResponse(data);
  }

  addRating(r: number): Movie {
    this.rating = r;
    return this;
  }

  toJSON(): MovieExport {
    return {
      ...this,
      recommendations: {
        ...this.recommendations,
        results: this.recommendations?.results.map((e) => e.toJSON()),
      },
      similar: {
        ...this.similar,
        results: this.similar?.results.map((e) => e.toJSON()),
      },
    };
  }
}

export default Movie;
