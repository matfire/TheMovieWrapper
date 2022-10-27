/* eslint-disable no-undef */
import API from '../../src/index';
import {describe, beforeAll, test, expect} from "vitest"

let client: API;

describe('TV Service', () => {
  beforeAll(() => {
    client = new API(process.env.TMDB_KEY!);
  });

  test('get latest tv show', async () => {
    const clientRes = await client.tv.getLatest();

    expect(clientRes.id).toBeDefined();
  });
});
