/* eslint-disable no-undef */
import API from '../../index';

let client: API;

beforeAll(() => {
  client = new API(process.env.TMDB_KEY!, true);
});

test('simple search', async () => {
  const clientRes = await client.movies.search({ query: 'avengers' });
  const res = await client.$http.get('/search/movie', { params: { ...client.$http.defaults.params, query: 'avengers' } });

  expect(clientRes.results[0].id).toBe(res.data.results[0].id);
});

test('search with params', async () => {
  const clientRes = await client.movies.search({ query: 'avengers', primary_release_year: 2019 });
  const res = await client.$http.get('/search/movie', { params: { ...client.$http.defaults.params, query: 'avengers', primary_release_year: 2019 } });

  expect(clientRes.results[0].id).toBe(res.data.results[0].id);
  expect(clientRes.total_results).toBe(res.data.total_results);
  expect(clientRes.total_results).toBe(1);
});
