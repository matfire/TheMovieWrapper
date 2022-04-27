import { GenericListResult, TrendingTimeSpan } from '../types/generic';
import GenericService from '../types/genericService';
import { TV } from '../types/tv';

class TVService extends GenericService {
  async getTrending(time: TrendingTimeSpan): Promise<GenericListResult<TV>> {
    const { data } = await this.$http.get(`/trending/tv/${time}`);

    return data;
  }
}

export default TVService;
