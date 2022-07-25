/* eslint-disable no-undef */
import { AxiosResponse } from 'axios';
import API from '../../src/index';
import { Movie } from '../../src/types/movie';
import { GenericListResult } from '../../src/types/generic';

let client: API;
let clientRes: GenericListResult<Movie>;
let res: AxiosResponse<any, any>;

describe('Movie Service', () => {
  beforeAll(async () => {
    client = new API(process.env.TMDB_KEY!);
    clientRes = await client.movies.getTopRated();
    res = await client.$http.get('/movie/top_rated');
  });

  test('top rated movie result length', async () => {
    expect(clientRes.results.length).toBe(res.data.results.length);
  });

  test('top rated movie total pages', async () => {
    expect(clientRes.total_pages).toBe(res.data.total_pages);
  });

  test('get top rated movie total results', async () => {
    expect(clientRes.total_results).toBe(res.data.total_results);
  });
});
