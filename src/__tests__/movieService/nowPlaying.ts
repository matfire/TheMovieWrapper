/* eslint-disable no-undef */
import API from '../../index';

let client: API;

beforeAll(() => {
  client = new API(process.env.TMDB_KEY!, true);
});

test('trending movie result length', async () => {
  const clientRes = await client.movies.getNowPlaying();
  const res = await client.$http.get('/movie/now_playing');

  expect(clientRes.results.length).toBe(res.data.results.length);
});

test('trending movie total pages', async () => {
  const clientRes = await client.movies.getNowPlaying();
  const res = await client.$http.get('/movie/now_playing');

  expect(clientRes.total_pages).toBe(res.data.total_pages);
});

test('get trending movie total results', async () => {
  const clientRes = await client.movies.getNowPlaying();
  const res = await client.$http.get('/movie/now_playing');

  expect(clientRes.total_results).toBe(res.data.total_results);
});
