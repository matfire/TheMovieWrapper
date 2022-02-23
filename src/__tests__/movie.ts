import API from '../index';

let client: API;

// eslint-disable-next-line no-undef
beforeAll(() => {
  client = new API(process.env.TMDB_KEY!, true);
});

// eslint-disable-next-line no-undef
test('trending movie result length', async () => {
  const clientRes = await client.movies.getTrending('day');
  const res = await client.$http.get('/trending/movie/day');

  // eslint-disable-next-line no-undef
  expect(clientRes.results.length).toBe(res.data.results.length);
});

// eslint-disable-next-line no-undef
test('trending movie total pages', async () => {
  const clientRes = await client.movies.getTrending('day');
  const res = await client.$http.get('/trending/movie/day');

  // eslint-disable-next-line no-undef
  expect(clientRes.total_pages).toBe(res.data.total_pages);
});

// eslint-disable-next-line no-undef
test('get trending movie total results', async () => {
  const clientRes = await client.movies.getTrending('day');
  const res = await client.$http.get('/trending/movie/day');

  // eslint-disable-next-line no-undef
  expect(clientRes.total_results).toBe(res.data.total_results);
});

// eslint-disable-next-line no-undef
test('check for movie model values', async () => {
  const clientRes = await client.movies.getTrending('day');
  const res = await client.$http.get('/trending/movie/day');

  // eslint-disable-next-line no-undef
  expect(clientRes.results[0].adult).toBe(res.data.results[0].adult);
  // eslint-disable-next-line no-undef
  expect(clientRes.results[0].id).toBe(res.data.results[0].id);
});
