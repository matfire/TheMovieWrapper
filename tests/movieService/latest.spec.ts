/* eslint-disable no-undef */
import API from '../../src/index';

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
