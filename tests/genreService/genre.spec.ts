/* eslint-disable no-undef */
import API from '../../src/index';

import {describe, beforeAll, test, expect, assert} from "vitest"
let client: API;

describe('Genre Service', () => {
  beforeAll(() => {
    client = new API(process.env.TMDB_KEY!);
  });

  test("get movie genres", async() => {
    const clientRes = await client.genre.getMovieGenres();
    const httpRes = await client.$http.get("/genre/movie/list");
    expect(clientRes).toEqual(httpRes.data);
  })
  test("get tv genres", async() => {
    const clientRes = await client.genre.getTvGenres();
    const httpRes = await client.$http.get("/genre/tv/list");
    expect(clientRes).toEqual(httpRes.data);
  })
});