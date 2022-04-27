/* eslint-disable no-undef */
import { AxiosResponse } from 'axios';
import API from '../../index';
import { GenericListResult } from '../../types/generic';
import { TV } from '../../types/tv';

let client: API;
let clientRes: GenericListResult<TV>;
let res: AxiosResponse<any, any>;

describe('TV Service', () => {
  beforeAll(async () => {
    client = new API(process.env.TMDB_KEY!);
    clientRes = await client.tv.search({ query: 'boris' });
    res = await client.$http.get('/search/tv', { params: { ...client.$http.defaults.params, query: 'boris' } });
  });

  test('search', async () => {
    expect(clientRes.results[0].id).toBe(res.data.results[0].id);
    expect(clientRes.total_results).toBe(res.data.total_results);
  });
});
