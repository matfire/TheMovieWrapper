/* eslint-disable no-undef */
import API from '../src/index';

let client: API;

describe('Authentication Service', () => {
  beforeAll(() => {
    client = new API(process.env.TMDB_KEY!);
  });

  test('get authentication url', async () => {
    const url = await client.auth.createAuthUrl('http://testUrl.com');

    expect(url).toContain('?redirect_to=http://testUrl.com');
  });
});
