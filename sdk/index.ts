import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export interface SDKConfig {
  baseURL?: string;
  axiosConfig?: AxiosRequestConfig;
}

export class StaticSiteSDK {
  private client: AxiosInstance;

  constructor(config: SDKConfig = {}) {
    this.client = axios.create({
      baseURL: config.baseURL || 'http://localhost:3000',
      ...(config.axiosConfig || {})
    });
  }

  /**
   * GET /
   * Retrieves index.html content
   */
  async getIndex(): Promise<AxiosResponse<string>> {
    return this.client.get<string>('/');
  }

  /**
   * GET /assets/{filePath}
   * @param filePath relative path under assets directory (e.g. css/main.css)
   */
  async getAsset(filePath: string): Promise<AxiosResponse<any>> {
    return this.client.get(`/assets/${filePath}`, { responseType: 'arraybuffer' });
  }

  /**
   * GET /{path}
   * Fallback route returning index.html
   * @param path any string (e.g. some/random/path)
   */
  async getFallback(path: string): Promise<AxiosResponse<string>> {
    return this.client.get<string>(`/${path}`);
  }
}