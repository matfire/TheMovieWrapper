/* eslint-disable no-undef */
import API from '../../index';

let client: API;

beforeAll(() => {
  client = new API(process.env.TMDB_KEY!, true);
});

test('get specific movie', async () => {
  const clientRes = await client.movies.getMovie(299534);

  expect(clientRes.adult).toBe(false);
  expect(clientRes.original_language).toBe('en');
});

test('get alternative titles for movie', async () => {
  const clientRes = await client.movies.getAlternativeTitles({ movieId: '299564' });
  const httpRes = await client.$http.get('/movie/299564/alternative_titles');

  expect(clientRes.id).toBe(httpRes.data.id);
  expect(clientRes.titles.length).toBe(httpRes.data.titles.length);
});

test('get changes for movie', async() => {
  const clientRes = await client.movies.getChanges({ movieId: '299564' });
  const httpRes = await client.$http.get('/movie/299564/changes');

  expect(clientRes.changes.length).toBe(httpRes.data.changes.length);
});
