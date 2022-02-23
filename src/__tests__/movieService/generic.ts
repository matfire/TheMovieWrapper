import API from '../../index';

let client: API;

// eslint-disable-next-line no-undef
beforeAll(() => {
  client = new API(process.env.TMDB_KEY!, true);
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
