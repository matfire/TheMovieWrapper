/* eslint-disable no-undef */
import API from '../../index';
import { Movie } from '../../types/movie';
import { GenericListResult } from '../../types/generic';

let client: API;
let clientRes: GenericListResult<Movie>;
let res: { data: { results: string | any[]; total_pages: any; total_results: any; }; };

describe('Popular Movie', () => {
  beforeAll(async () => {
    client = new API(process.env.TMDB_KEY!);
    clientRes = await client.movies.getPopular();
    res = await client.$http.get('/movie/popular');
  });

  test('popular movie result length', async () => {
    expect(clientRes.results.length).toBe(res.data.results.length);
  });

  test('popular movie total pages', async () => {
    expect(clientRes.total_pages).toBe(res.data.total_pages);
  });

  test('get popular movie total results', async () => {
    expect(clientRes.total_results).toBe(res.data.total_results);
  });
});
