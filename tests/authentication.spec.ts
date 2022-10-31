/* eslint-disable no-undef */
import API from '../src/index';

import {describe, beforeAll, test, expect, assert} from "vitest"
let client: API;

describe('Authentication Service', () => {
  beforeAll(() => {
    client = new API(process.env.TMDB_KEY!);
  });

  test('get authentication url', async () => {
    const url = await client.auth.createAuthUrl('http://testUrl.com');

    expect(url).toContain('?redirect_to=http://testUrl.com');
  });

  test("get token from username + password", async() => {
    const data = await client.auth.createSessionWithLogin(process.env.TMDB_USERNAME!, process.env.TMDB_PASSWORD!);
    expect(data).toBeDefined();
  })
});
