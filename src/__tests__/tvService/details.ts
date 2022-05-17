/* eslint-disable no-undef */
import { AxiosResponse } from 'axios';
import API from '../../index';
import { GenericListResult } from '../../types/generic';
import { TVDetails } from '../../types/tv';

let client: API;
let res: AxiosResponse<any, any>;

describe('TV Service', () => {
  beforeAll(async () => {
    client = new API(process.env.TMDB_KEY!);
  });

  test('simple tv details', async () => {
    const clientRes = await client.tv.getDetails(1399);
    res = await client.$http.get('/tv/1399');
    expect(clientRes).toStrictEqual(res.data);
  });
});
