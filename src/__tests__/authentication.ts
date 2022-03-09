/* eslint-disable no-undef */
import API from '../index';

let client: API;

beforeAll(() => {
  client = new API(process.env.TMDB_KEY!, true);
});

test('get authentication url', async () => {
  const url = await client.auth.createAuthUrl('http://testUrl.com');

  expect(url).toContain('?redirect_to=http://testUrl.com');
});
