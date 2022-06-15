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
    clientRes = await client.tv.getAiringToday();
    res = await client.$http.get('/tv/airing_today');
  });

  test('airing shows result length', async () => {
    expect(clientRes.results.length).toBe(res.data.results.length);
  });

  test('airing shows total pages', async () => {
    expect(clientRes.total_pages).toBe(res.data.total_pages);
  });

  test('get airing shows total results', async () => {
    expect(clientRes.total_results).toBe(res.data.total_results);
  });
});
