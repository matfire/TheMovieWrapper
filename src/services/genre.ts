import GenericService from '../types/genericService';
import GenreResult from '../types/genre';

class GenreService extends GenericService {
  async getMovieGenres(): Promise<GenreResult> {
    const res = await this.$http.get('/genre/movie/list');
    return res.data;
  }

  async getTvGenres(): Promise<GenreResult> {
    const res = await this.$http.get('/genre/tv/list');
    return res.data;
  }
}

export default GenreService;
