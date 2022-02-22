import { MovieStatus } from '../types/movie';
import Genre from './Genre';

interface IMovieBasicData {
    id: string;
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
    original_language?: string;
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

class Movie implements IMovieBasicData, IMovieExtraData {
  id: string;

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

  original_language?: string;

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
    this.status = data.status ?? 'Rumored';
    this.tagline = data.tagline;
    this.video = data.video;
    this.vote_average = data.vote_average;
    this.vote_count = data.vote_count;
  }

  static fromJson(data: any, extra = false): Movie {
    const initialData = {
      id: data.id,
      poster_path: data.poster_path,
      title: data.title,
      original_title: data.original_title,
    };

    const extraData: IMovieExtraData = extra ? { ...data } : undefined;
    return new Movie(initialData, extraData);
  }
}

export default Movie;
