/* eslint-disable no-undef */
import { AxiosResponse } from 'axios';
import API from '../../index';
import { MovieListResult } from '../../types/movie';

let client: API;
let clientRes: MovieListResult;
let res: AxiosResponse<any, any>;

beforeAll(async () => {
  client = new API(process.env.TMDB_KEY!, true);
  clientRes = await client.movies.getUpcoming();
  res = await client.$http.get('/movie/upcoming');
});

test('upcoming movie result length', async () => {
  expect(clientRes.results.length).toBe(res.data.results.length);
});

test('upcoming movie total pages', async () => {
  expect(clientRes.total_pages).toBe(res.data.total_pages);
});

test('get upcoming movie total results', async () => {
  expect(clientRes.total_results).toBe(res.data.total_results);
});
