class Genre {
  id: string;

  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

  static fromJson(data: any): Genre {
    return new Genre(data.id, data.name);
  }
}

export default Genre;
