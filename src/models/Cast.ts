interface ICastData {
  adult: boolean;
  gender ?: number;
  id: number;
  known_for_department : string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path ?: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

class Cast implements ICastData {
  gender?: number | undefined;

  id: number;

  known_for_department: string;

  name: string;

  original_name: string;

  popularity: number;

  profile_path?: string | undefined;

  cast_id: number;

  character: string;

  credit_id: string;

  order: number;

  adult: boolean;

  constructor(data: ICastData) {
    this.gender = data.gender;
    this.id = data.id;
    this.known_for_department = data.known_for_department;
    this.name = data.name;
    this.original_name = data.original_name;
    this.popularity = data.popularity;
    this.profile_path = data.profile_path;
    this.cast_id = data.cast_id;
    this.character = data.character;
    this.credit_id = data.credit_id;
    this.order = data.order;
    this.adult = data.adult;
  }

  static fromJson(data:any): Cast {
    const converted: ICastData = data as ICastData;

    return new Cast(converted);
  }
}

export default Cast;
