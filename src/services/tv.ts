import { GenericListResult, TrendingTimeSpan } from '../types/generic';
import GenericService from '../types/genericService';
import { SearchTVInput, TV, TVDetails } from '../types/tv';

class TVService extends GenericService {
  async getTrending(time: TrendingTimeSpan): Promise<GenericListResult<TV>> {
    const { data } = await this.$http.get(`/trending/tv/${time}`, {
      params: { ...this.$http.defaults.params, language: this.language },
    });
    return data;
  }

  async search(search: SearchTVInput): Promise<GenericListResult<TV>> {
    const { data } = await this.$http.get('/search/tv', {
      params: { ...this.$http.defaults.params, ...search, language: this.language },
    });
    return data;
  }

  async getTopRated(page ?: number): Promise<GenericListResult<TV>> {
    const { data } = await this.$http.get('/tv/top_rated', {
      params: { ...this.$http.defaults.params, page, language: this.language },
    });
    return data;
  }

  async getPopular(page ?: number): Promise<GenericListResult<TV>> {
    const { data } = await this.$http.get('/tv/popular', {
      params: { ...this.$http.defaults.params, page, language: this.language },
    });
    return data;
  }

  async getLatest(): Promise<TVDetails> {
    const { data } = await this.$http.get('/tv/latest', {
      params: { ...this.$http.defaults.params, language: this.language },
    });
    return data;
  }

  async getAiringToday(page ?: number): Promise<GenericListResult<TV>> {
    const { data } = await this.$http.get('/tv/airing_today', {
      params: { ...this.$http.defaults.params, page, language: this.language },
    });
    return data;
  }

  async getOnAir(page ?: number): Promise<GenericListResult<TV>> {
    const { data } = await this.$http.get('/tv/on_the_air', {
      params: { ...this.$http.defaults.params, page, language: this.language },
    });
    return data;
  }
}

export default TVService;
