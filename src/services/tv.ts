import { GenericListResult, TrendingTimeSpan } from '../types/generic';
import GenericService from '../types/genericService';
import { SearchTVInput, TV } from '../types/tv';

class TVService extends GenericService {
  async getTrending(time: TrendingTimeSpan): Promise<GenericListResult<TV>> {
    const { data } = await this.$http.get(`/trending/tv/${time}`);
    return data;
  }

  async search(search: SearchTVInput): Promise<GenericListResult<TV>> {
    const { data } = await this.$http.get('/search/tv', {
      params: { ...this.$http.defaults.params, ...search },
    });
    return data;
  }
}

export default TVService;
