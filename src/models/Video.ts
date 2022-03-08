import { Language } from '../types/generic';

interface VideoInput {
  iso_639_1: Language;
iso_3166_1: string; // TODO: type for country
name: string
key: string
site: string
size: number
type: string
official: boolean
published_at: Date
id : string
}

class Video implements VideoInput {
  iso_639_1: Language;

  iso_3166_1: string;

  name: string;

  key: string;

  site: string;

  size: number;

  type: string;

  official: boolean;

  published_at: Date;

  id: string;

  constructor(data: VideoInput) {
    this.iso_639_1 = data.iso_639_1;
    this.iso_3166_1 = data.iso_3166_1;
    this.name = data.name;
    this.key = data.key;
    this.site = data.site;
    this.size = data.size;
    this.type = data.type;
    this.official = data.official;
    this.published_at = data.published_at;
    this.id = data.id;
  }

  static fromJson(data:any): Video {
    return new Video(data as VideoInput);
  }
}

export default Video;
