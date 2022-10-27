/* eslint-disable no-undef */
import API from '../../src/index';
import {describe, beforeAll, test, expect} from "vitest"

let client: API;

describe('Movie Service', () => {
  beforeAll(() => {
    client = new API(process.env.TMDB_KEY!);
  });

  test('check for movie model values', async () => {
    const clientRes = await client.movies.getTrending('day');
    const res = await client.$http.get('/trending/movie/day');

    expect(clientRes.results[0].adult).toBe(res.data.results[0].adult);
    expect(clientRes.results[0].id).toBe(res.data.results[0].id);
  });
});
