import {
  Country, Genre, Language, ProductionCompany,
} from './generic';

interface TV {
  first_air_date: Date;
  overview: string;
  original_name: string;
  origin_country: Country;
  genre_ids: number[];
  vote_count: number;
  original_language: Language;
  name: string;
  poster_path: string;
  id: number;
  backdrop_path: string | null;
  vote_average: number;
  popularity: number;
}

interface SearchTVInput {
  query: string;
  page?: number;
  include_adult?: boolean;
  first_air_date_year ?: number;
}

interface SeasonOverview {
  air_date: Date;
  episode_count: number;
  id: number;
  poster_path: string | null;
  season_number: number;
}

interface TVDetails {
  backdrop_path: string | null;
  created_by: object[];
  episode_run_time: number[];
  first_air_date: Date;
  genres: Genre[];
  homepage: string | null;
  id: number;
  in_prodution: boolean;
  languages: Language[];
  last_air_date: Date | null;
  name: string;
  networks: object[]; // TODO create network interface
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: Country[];
  original_language: Language;
  original_name: string;
  overview: string | null;
  popularity: number;
  poster_path: string | null;
  production_companies: ProductionCompany[];
  seasons: SeasonOverview[];
  status: string;
  type: string;
  vote_average: number;
  vote_count: number;
}

export { TV, SearchTVInput, TVDetails };
