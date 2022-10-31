import { AxiosInstance } from 'axios';
import { Language } from './generic';

class GenericService {
  protected session_id?: number;

  protected $http: AxiosInstance;

  protected language: Language = 'en';

  constructor(client: AxiosInstance) {
    this.$http = client;
  }

  setSessionId(sId: number) { this.session_id = sId; }

  setLanguage(l:Language) { this.language = l; }
}

export default GenericService;
