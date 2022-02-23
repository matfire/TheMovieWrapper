import API from '../../index';

let client: API;

// eslint-disable-next-line no-undef
beforeAll(() => {
  client = new API(process.env.TMDB_KEY!, true);
});

// eslint-disable-next-line no-undef
test('get specific movie', async () => {
  const clientRes = await client.movies.getMovie(299534);

  // eslint-disable-next-line no-undef
  expect(clientRes.adult).toBe(false);
  // eslint-disable-next-line no-undef
  expect(clientRes.original_language).toBe('en');
});
