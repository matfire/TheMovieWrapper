import API from '../index';

let client: API;

// eslint-disable-next-line no-undef
beforeAll(() => {
  client = new API(process.env.TMDB_KEY!, false);
});

// eslint-disable-next-line no-undef
test('get authentication url', async () => {
  const url = await client.auth.createAuthUrl('http://testUrl.com');

  // eslint-disable-next-line no-undef
  expect(url).toContain('?redirect_to=http://testUrl.com');
});
