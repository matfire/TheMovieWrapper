import API from '../../index';

let client: API;

// eslint-disable-next-line no-undef
beforeAll(() => {
  client = new API(process.env.TMDB_KEY!, true);
});

// eslint-disable-next-line no-undef
test('simple search', async () => {
  const clientRes = await client.movies.search({ query: 'avengers' });
  const res = await client.$http.get('/search/movie', { params: { ...client.$http.defaults.params, query: 'avengers' } });
  // eslint-disable-next-line no-undef
  expect(clientRes.results[0].id).toBe(res.data.results[0].id);
});

// eslint-disable-next-line no-undef
test('search with params', async () => {
  const clientRes = await client.movies.search({ query: 'avengers', primary_release_year: 2019 });
  const res = await client.$http.get('/search/movie', { params: { ...client.$http.defaults.params, query: 'avengers', primary_release_year: 2019 } });

  // eslint-disable-next-line no-undef
  expect(clientRes.results[0].id).toBe(res.data.results[0].id);
  // eslint-disable-next-line no-undef
  expect(clientRes.total_results).toBe(res.data.total_results);
  // eslint-disable-next-line no-undef
  expect(clientRes.total_results).toBe(1);
});
