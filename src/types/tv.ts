import { Country, Language } from './generic';

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

// eslint-disable-next-line import/prefer-default-export
export { TV };
