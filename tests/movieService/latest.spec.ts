/* eslint-disable no-undef */
import API from '../../src/index';
import {describe, beforeAll, test, expect} from "vitest"

let client: API;

describe('Movie Service', () => {
  beforeAll(() => {
    client = new API(process.env.TMDB_KEY!);
  });

  test('get latest movie', async () => {
    const clientRes = await client.movies.getLatest();

    expect(clientRes.id).toBeDefined();
  });
});
