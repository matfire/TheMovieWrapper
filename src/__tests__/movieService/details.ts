/* eslint-disable no-undef */
import API from '../../index';
import Video from '../../models/Video';
import { Country } from '../../types/generic';

let client: API;

beforeAll(() => {
  client = new API(process.env.TMDB_KEY!);
});

test('get specific movie', async () => {
  const clientRes = await client.movies.getMovie(299534);

  expect(clientRes.adult).toBe(false);
  expect(clientRes.original_language).toBe('en');
});

test('get alternative titles for movie', async () => {
  const clientRes = await client.movies.getAlternativeTitles(
    {
      movieId: 299564,
      country: Country.Italy,
    },
  );
  const httpRes = await client.$http.get('/movie/299564/alternative_titles', { params: { ...client.$http.defaults.params, country: Country.Italy } });

  expect(clientRes.id).toBe(httpRes.data.id);
  expect(clientRes.titles.length).toBe(httpRes.data.titles.length);
});

test('get changes for movie', async () => {
  const clientRes = await client.movies.getChanges({ movieId: 299564, start_date: new Date('12/03/2001') });
  const httpRes = await client.$http.get('/movie/299564/changes');

  expect(clientRes.changes.length).toBe(httpRes.data.changes.length);
});

test('get external ids for movie', async () => {
  const clientRes = await client.movies.getExternalIds(299564);
  const httpRes = await client.$http.get('/movie/299564/external_ids');

  expect(clientRes).toStrictEqual(httpRes.data);
});

test('get keywords for movie', async () => {
  const clientRes = await client.movies.getKeyword(299564);
  const httpRes = await client.$http.get('/movie/299564/keywords');

  expect(clientRes).toStrictEqual(httpRes.data);
});

test('get lists for movie', async () => {
  const clientRes = await client.movies.getLists({ movieId: 299564 });
  const httpRes = await client.$http.get('/movie/299564/lists');

  expect(clientRes).toStrictEqual(httpRes.data);
});

test('get recommendations for movie', async () => {
  const clientRes = await client.movies.getRecommendations({ movieId: 299564 });
  const httpRes = await client.$http.get('/movie/299564/recommendations');

  expect(clientRes).toStrictEqual(httpRes.data);
});

test('get release dates for movie', async () => {
  const clientRes = await client.movies.getReleaseDates(299564);
  const httpRes = await client.$http.get('/movie/299564/release_dates');

  expect(clientRes).toStrictEqual(httpRes.data);
});

test('get similar movies for movie', async () => {
  const clientRes = await client.movies.getSimilar({ movieId: 299564 });
  const httpRes = await client.$http.get('/movie/299564/similar');

  expect(clientRes).toStrictEqual(httpRes.data);
});

test('get translations for movie', async () => {
  const clientRes = await client.movies.getTranslations(299564);
  const httpRes = await client.$http.get('/movie/299564/translations');

  expect(clientRes).toStrictEqual(httpRes.data);
});

test('get videos for movie', async () => {
  const res = await client.movies.getVideos(299534);
  expect(res.results.pop()).toBeInstanceOf(Video);
});

test('get watch providers for movie', async () => {
  const clientRes = await client.movies.getWatchProviders(299564);
  const httpRes = await client.$http.get('/movie/299564/watch/providers');

  expect(clientRes).toStrictEqual(httpRes.data);
});

test('get images', async () => {
  const clientRes = await client.movies.getImages(299564);
  const httpRes = await client.$http.get('/movie/299564/images');

  expect(clientRes).toStrictEqual(httpRes.data);
});

test('get reviews', async () => {
  const clientRes = await client.movies.getReviews({ movieId: 299564 });
  const httpRes = await client.$http.get('/movie/299564/reviews');

  expect(clientRes).toStrictEqual(httpRes.data);
});
