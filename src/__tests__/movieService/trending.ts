/* eslint-disable no-undef */
import { AxiosResponse } from 'axios';
import API from '../../index';
import { Movie } from '../../types/movie';
import { GenericListResult } from '../../types/generic';

let client: API;
let clientRes: GenericListResult<Movie>;
let res: AxiosResponse<any, any>;

beforeAll(async () => {
  client = new API(process.env.TMDB_KEY!);
  clientRes = await client.movies.getTrending('day');
  res = await client.$http.get('/trending/movie/day');
});

test('trending movie result length', async () => {
  expect(clientRes.results.length).toBe(res.data.results.length);
});

test('trending movie total pages', async () => {
  expect(clientRes.total_pages).toBe(res.data.total_pages);
});

test('get trending movie total results', async () => {
  expect(clientRes.total_results).toBe(res.data.total_results);
});
