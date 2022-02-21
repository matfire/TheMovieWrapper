interface ICrewData {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path ?: string;
  credit_id: number;
  department: string;
  job: string;
}

class Crew implements ICrewData {
  adult: boolean;

  gender: number;

  id: number;

  known_for_department: string;

  name: string;

  original_name: string;

  popularity: number;

  profile_path?: string | undefined;

  credit_id: number;

  department: string;

  job: string;

  constructor(data: ICrewData) {
    this.adult = data.adult;
    this.gender = data.gender;
    this.id = data.id;
    this.known_for_department = data.known_for_department;
    this.name = data.name;
    this.original_name = data.original_name;
    this.popularity = data.popularity;
    this.profile_path = data.profile_path;
    this.credit_id = data.credit_id;
    this.department = data.department;
    this.job = data.job;
  }

  static fromJson(data: any): Crew {
    const converted: ICrewData = data as ICrewData;

    return new Crew(converted);
  }
}

export default Crew;
