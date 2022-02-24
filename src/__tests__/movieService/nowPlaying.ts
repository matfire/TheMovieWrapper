import API from '../../index';

let client: API;

// eslint-disable-next-line no-undef
beforeAll(() => {
  client = new API(process.env.TMDB_KEY!, true);
});

// eslint-disable-next-line no-undef
test('trending movie result length', async () => {
  const clientRes = await client.movies.getNowPlaying();
  const res = await client.$http.get('/movie/now_playing');

  // eslint-disable-next-line no-undef
  expect(clientRes.results.length).toBe(res.data.results.length);
});

// eslint-disable-next-line no-undef
test('trending movie total pages', async () => {
  const clientRes = await client.movies.getNowPlaying();
  const res = await client.$http.get('/movie/now_playing');

  // eslint-disable-next-line no-undef
  expect(clientRes.total_pages).toBe(res.data.total_pages);
});

// eslint-disable-next-line no-undef
test('get trending movie total results', async () => {
  const clientRes = await client.movies.getNowPlaying();
  const res = await client.$http.get('/movie/now_playing');

  // eslint-disable-next-line no-undef
  expect(clientRes.total_results).toBe(res.data.total_results);
});
