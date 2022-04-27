/* eslint-disable no-undef */
import API from '../../index';

let client: API;

describe('TV Service', () => {
  beforeAll(() => {
    client = new API(process.env.TMDB_KEY!);
  });

  test('get latest movie', async () => {
    const clientRes = await client.tv.getLatest();

    expect(clientRes.id).toBeDefined();
  });
});
