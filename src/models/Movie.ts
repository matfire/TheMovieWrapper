import MovieStatus from '../types/movie';
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
    this.adult = data.adult ?? undefined;
    this.backdrop_path = data.backdrop_path ?? undefined;
    this.belongs_to_collection = data.belongs_to_collection ?? undefined;
    this.budget = data.budget ?? undefined;
    this.homepage = data.homepage ?? undefined;
    this.imdb_id = data.imdb_id ?? undefined;
    this.original_language = data.original_language ?? undefined;
    this.overview = data.overview ?? undefined;
    this.popularity = data.popularity ?? undefined;
    this.release_date = data.release_date ? new Date(data.release_date) : undefined;
    this.revenue = data.revenue ?? undefined;
    this.runtime = data.runtime ?? undefined;
    this.status = data.status ?? 'Rumored';
    this.tagline = data.tagline ?? undefined;
    this.video = data.video ?? undefined;
    this.vote_average = data.vote_average ?? undefined;
    this.vote_count = data.vote_count ?? undefined;
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
