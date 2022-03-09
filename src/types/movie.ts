import Movie from '../models/movie/Movie';
import Video from '../models/Video';
import { Country, Language, List } from './generic';

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

interface TranslationResults {
  id: number;
  translations: {
    iso_3166_1: Country;
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

export {
  MovieStatus, SearchMovieInput, MovieListResult, NowPlayingMovieResult,
  AlternativeTitlesResult, AlternativeTitlesInput, ChangesInput, ChangesResult,
  ExternalIdsResult, ListResult, MoviePageInput, ReleaseDateResults,
  TranslationResults, VideoResults, WatchProvidersResult,
  PopularInput, TopRatedInput, UpcomingInput,
};
