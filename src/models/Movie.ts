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
    release_data?: Date;
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

  release_data?: Date;

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
      Object.keys(extraData).forEach((/* e */) => {
        // this[e] = extraData[e];
      });
    }
  }

  static fromJson(data: any): Movie {
    const initialData = {
      id: data.id,
      poster_path: data.poster_path,
      title: data.title,
      original_title: data.original_title,
    };
    const extraData: IMovieExtraData = { ...data };

    return new Movie(initialData, extraData);
  }
}

export default Movie;
