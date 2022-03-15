/* eslint-disable no-undef */
import { AxiosResponse } from 'axios';
import API from '../../index';
import Movie from '../../models/movie/Movie';
import { GenericListResult } from '../../types/generic';

let client: API;
let clientRes: GenericListResult<Movie>;
let res: AxiosResponse<any, any>;

beforeAll(async () => {
  client = new API(process.env.TMDB_KEY!);
  clientRes = await client.movies.search({ query: 'avengers', primary_release_year: 2019 });
  res = await client.$http.get('/search/movie', { params: { ...client.$http.defaults.params, query: 'avengers', primary_release_year: 2019 } });
});

test('simple search', async () => {
  expect(clientRes.results[0].id).toBe(res.data.results[0].id);
});

test('search with params', async () => {
  expect(clientRes.results[0].id).toBe(res.data.results[0].id);
  expect(clientRes.total_results).toBe(res.data.total_results);
  expect(clientRes.total_results).toBe(1);
});
