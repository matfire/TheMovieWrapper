/* eslint-disable no-use-before-define */
import {
  Author,
  Country,
  GenericListResult,
  Genre,
  Image,
  Language,
  List,
  Video,
  Cast,
  Crew,
  ProductionCompany,
  ProductionCountry,
  SpokenLanguage,
} from './generic';

type MovieStatus = 'Rumored' | 'Planned' | 'In Production' | 'Post Production' | 'Released' | 'Canceled' | 'Unknown';

type AppendToResponseMovie = 'account_states'
| 'alternative_titles'
| 'changes'
| 'credits'
| 'external_ids'
| 'images'
| 'keywords'
| 'lists'
| 'recommendations'
| 'release_dates'
| 'reviews'
| 'similar'
| 'translations'
| 'videos'

interface SearchMovieInput {
  query: string;
  page?: number;
  include_adult?: boolean;
  region?: string;
  year ?: number;
  primary_release_year ?: number;
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
  movieId: number;
  country ?: Country;
}

interface AlternativeTitlesResult {
  id: number;
  titles: {
    iso_3166_1: Country,
    title: string,
    type: string
  }[]
}

interface MoviePageInput {
  movieId: number;
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
    iso_3166_1: Country;
    release_dates: {
      certification: string;
      iso_639_1: Language;
      release_date: Date;
      type: number;
      note: string;
    }[]
  }[]
}

interface Translation {
    iso_3166_1: Country;
    iso_639_1: Language;
    name: string;
    english_name: string;
    data: {
      title: string;
      overview: string;
      homepage: string;
    }
  }

interface TranslationResults {
  id: number;
  translations: Translation[]
}

interface VideoResults {
  id: number;
  results: Video[];
}

interface WatchProviderProvider {
  display_priority: number;
  logo_path: string;
  provider_id: number;
  provider_name: string;
}

interface WatchProvidersResult {
  id: number;
  results: {
    AR: {
      link: string;
      flatrate: WatchProviderProvider[],
      rent: WatchProviderProvider[],
      buy: WatchProviderProvider[]
    },
    AT: {
      link: string;
      flatrate: WatchProviderProvider[],
      rent: WatchProviderProvider[],
      buy: WatchProviderProvider[]
    },
    AU: {
      link: string;
      flatrate: WatchProviderProvider[],
      rent: WatchProviderProvider[],
      buy: WatchProviderProvider[]
    },
    BE: {
      link: string;
      flatrate: WatchProviderProvider[],
      rent: WatchProviderProvider[],
      buy: WatchProviderProvider[]
    },
    BR: {
      link: string;
      flatrate: WatchProviderProvider[],
      rent: WatchProviderProvider[],
      buy: WatchProviderProvider[]
    },
    CA: {
      link: string;
      flatrate: WatchProviderProvider[],
      rent: WatchProviderProvider[],
      buy: WatchProviderProvider[]
    },
    CH: {
      link: string;
      flatrate: WatchProviderProvider[],
      rent: WatchProviderProvider[],
      buy: WatchProviderProvider[]
    },
    CL: {
      link: string;
      flatrate: WatchProviderProvider[],
      rent: WatchProviderProvider[],
      buy: WatchProviderProvider[]
    },
    CO: {
      link: string;
      flatrate: WatchProviderProvider[],
      rent: WatchProviderProvider[],
      buy: WatchProviderProvider[]
    },
    CZ: {
      link: string;
      flatrate: WatchProviderProvider[],
      rent: WatchProviderProvider[],
      buy: WatchProviderProvider[]
    },
    DE: {
      link: string;
      flatrate: WatchProviderProvider[],
      rent: WatchProviderProvider[],
      buy: WatchProviderProvider[]
    },
    DK: {
      link: string;
      flatrate: WatchProviderProvider[],
      rent: WatchProviderProvider[],
      buy: WatchProviderProvider[]
    },
    EC: {
      link: string;
      flatrate: WatchProviderProvider[],
      rent: WatchProviderProvider[],
      buy: WatchProviderProvider[]
    },
    EE: {
      link: string;
      flatrate: WatchProviderProvider[],
      rent: WatchProviderProvider[],
      buy: WatchProviderProvider[]
    },
    ES: {
      link: string;
      flatrate: WatchProviderProvider[],
      rent: WatchProviderProvider[],
      buy: WatchProviderProvider[]
    },
    FI: {
      link: string;
      flatrate: WatchProviderProvider[],
      rent: WatchProviderProvider[],
      buy: WatchProviderProvider[]
    },
    FR: {
      link: string;
      flatrate: WatchProviderProvider[],
      rent: WatchProviderProvider[],
      buy: WatchProviderProvider[]
    },
    GB: {
      link: string;
      flatrate: WatchProviderProvider[],
      rent: WatchProviderProvider[],
      buy: WatchProviderProvider[]
    },
    GR: {
      link: string;
      flatrate: WatchProviderProvider[],
      rent: WatchProviderProvider[],
      buy: WatchProviderProvider[]
    },
    HU: {
      link: string;
      flatrate: WatchProviderProvider[],
      rent: WatchProviderProvider[],
      buy: WatchProviderProvider[]
    },
    ID: {
      link: string;
      flatrate: WatchProviderProvider[],
      rent: WatchProviderProvider[],
      buy: WatchProviderProvider[]
    },
    IE: {
      link: string;
      flatrate: WatchProviderProvider[],
      rent: WatchProviderProvider[],
      buy: WatchProviderProvider[]
    },
    IN: {
      link: string;
      flatrate: WatchProviderProvider[],
      rent: WatchProviderProvider[],
      buy: WatchProviderProvider[]
    },
    IT: {
      link: string;
      flatrate: WatchProviderProvider[],
      rent: WatchProviderProvider[],
      buy: WatchProviderProvider[]
    },
    JP: {
      link: string;
      flatrate: WatchProviderProvider[],
      rent: WatchProviderProvider[],
      buy: WatchProviderProvider[]
    },
    KR: {
      link: string;
      flatrate: WatchProviderProvider[],
      rent: WatchProviderProvider[],
      buy: WatchProviderProvider[]
    },
    LT: {
      link: string;
      flatrate: WatchProviderProvider[],
      rent: WatchProviderProvider[],
      buy: WatchProviderProvider[]
    },
    LV: {
      link: string;
      flatrate: WatchProviderProvider[],
      rent: WatchProviderProvider[],
      buy: WatchProviderProvider[]
    },
    MX: {
      link: string;
      flatrate: WatchProviderProvider[],
      rent: WatchProviderProvider[],
      buy: WatchProviderProvider[]
    },
    MY: {
      link: string;
      flatrate: WatchProviderProvider[],
      rent: WatchProviderProvider[],
      buy: WatchProviderProvider[]
    },
    NL: {
      link: string;
      flatrate: WatchProviderProvider[],
      rent: WatchProviderProvider[],
      buy: WatchProviderProvider[]
    },
    NO: {
      link: string;
      flatrate: WatchProviderProvider[],
      rent: WatchProviderProvider[],
      buy: WatchProviderProvider[]
    },
    NZ: {
      link: string;
      flatrate: WatchProviderProvider[],
      rent: WatchProviderProvider[],
      buy: WatchProviderProvider[]
    },
    PE: {
      link: string;
      flatrate: WatchProviderProvider[],
      rent: WatchProviderProvider[],
      buy: WatchProviderProvider[]
    },
    PH: {
      link: string;
      flatrate: WatchProviderProvider[],
      rent: WatchProviderProvider[],
      buy: WatchProviderProvider[]
    },
    PL: {
      link: string;
      flatrate: WatchProviderProvider[],
      rent: WatchProviderProvider[],
      buy: WatchProviderProvider[]
    },
    PT: {
      link: string;
      flatrate: WatchProviderProvider[],
      rent: WatchProviderProvider[],
      buy: WatchProviderProvider[]
    },
    RO: {
      link: string;
      flatrate: WatchProviderProvider[],
      rent: WatchProviderProvider[],
      buy: WatchProviderProvider[]
    },
    RU: {
      link: string;
      flatrate: WatchProviderProvider[],
      rent: WatchProviderProvider[],
      buy: WatchProviderProvider[]
    },
    SE: {
      link: string;
      flatrate: WatchProviderProvider[],
      rent: WatchProviderProvider[],
      buy: WatchProviderProvider[]
    },
    SG: {
      link: string;
      flatrate: WatchProviderProvider[],
      rent: WatchProviderProvider[],
      buy: WatchProviderProvider[]
    },
    TH: {
      link: string;
      flatrate: WatchProviderProvider[],
      rent: WatchProviderProvider[],
      buy: WatchProviderProvider[]
    },
    TR: {
      link: string;
      flatrate: WatchProviderProvider[],
      rent: WatchProviderProvider[],
      buy: WatchProviderProvider[]
    },
    US: {
      link: string;
      flatrate: WatchProviderProvider[],
      rent: WatchProviderProvider[],
      buy: WatchProviderProvider[]
    },
    VE: {
      link: string;
      flatrate: WatchProviderProvider[],
      rent: WatchProviderProvider[],
      buy: WatchProviderProvider[]
    },
    ZA: {
      link: string;
      flatrate: WatchProviderProvider[],
      rent: WatchProviderProvider[],
      buy: WatchProviderProvider[]
    },
  }
}

interface PopularInput {
  page?: number;
  region?: Country;
}

interface TopRatedInput {
  page ?: number;
  region?: Country;
}

interface UpcomingInput {
  page ?: number;
  region?: Country;
}

interface ImagesResult {
  id: number;
  backdrops: Image[],
  posters: Image[]
}

interface MovieReview {
  author: string;
  author_details: Author;
  content: string;
  created_at: Date;
  id: string;
  updated_at: Date;
  url: string;
}

interface MovieReviewResult extends GenericListResult<MovieReview> {
  id: string;
}

interface CreditsResult {
  id: number;
  cast: Cast[];
  crew: Crew[]
}

interface AccountStatesResult {
  id: number;
  favorite: boolean;
  rated: {
    value: number;
  } | boolean;
  watchlist: boolean
}

interface Credits {
  cast: Cast[];

  crew: Crew[];
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

interface Change<T> {
  key: string;
  items: {
    id: string;
    action: string;
    time: T;
    iso_639_1: Language;
    value: string;
    original_value: string;
  }[]
}

interface Movie {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: any | null;
  budget: number;
  genres: Genre[];
  homepage: string | null;
  id: number;
  imdb_id: string | null;
  original_language: string;
  original_title: string;
  overview: string | null;
  popularity: number;
  poster_path: string | null;
  production_companies: ProductionCompany[] | null
  production_countries: ProductionCountry[] | null
  release_date: Date;
  revenue: number;
  runtime: number | null;
  spoken_languages: SpokenLanguage[] | null;
  status: MovieStatus;
  tagline: string | null;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  credits: Credits | null;
  images: Images | null;
  videos: VideoResults | null;
  reviews: MovieReviewResult | null;
  recommendations: GenericListResult<Movie>;
  account_states: AccountStates | null;
  alternative_titles: Title[] | null;
  external_ids: ExternalIds | null;
  changes: Change<Date> | null;
  keywords: {keywords: {id:number, name:string}[]} | null;
  lists: GenericListResult<List> | null;
}

export {
  MovieStatus, SearchMovieInput, NowPlayingMovieResult,
  AlternativeTitlesResult, AlternativeTitlesInput, ChangesInput, ChangesResult,
  ExternalIdsResult, ListResult, MoviePageInput, ReleaseDateResults,
  TranslationResults, VideoResults, WatchProvidersResult,
  PopularInput, TopRatedInput, UpcomingInput,
  AppendToResponseMovie, ImagesResult, MovieReviewResult,
  CreditsResult, MovieReview, Translation, AccountStatesResult,
  Movie, Keyword,
};
