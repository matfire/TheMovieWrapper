/* eslint-disable no-undef */
import { AxiosResponse } from 'axios';
import API from '../../src/index';
import { GenericListResult } from '../../src/types/generic';
import { TV } from '../../src/types/tv';
import {describe, beforeAll, test, expect} from "vitest"

let client: API;
let clientRes: GenericListResult<TV>;
let res: AxiosResponse<any, any>;

describe('TV Service', () => {
  beforeAll(async () => {
    client = new API(process.env.TMDB_KEY!);
    clientRes = await client.tv.getTrending('day');
    res = await client.$http.get('/trending/tv/day');
  });

  test('trending tv shows result length', async () => {
    expect(clientRes.results.length).toBe(res.data.results.length);
  });

  test('trending tv shows total pages', async () => {
    expect(clientRes.total_pages).toBe(res.data.total_pages);
  });

  test('get trending tv shows total results', async () => {
    expect(clientRes.total_results).toBe(res.data.total_results);
  });
});
