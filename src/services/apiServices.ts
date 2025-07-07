import ApiUtil, { ApiResponse } from '../utils/apiMiddleware';

export interface House {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  images: string[];
  createdAt: string;
  updatedAt: string;
}

export class ApiService {
  async callApi<T = any>(
    method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
    url: string,
    data?: any,
    params?: any,
    headers?: Record<string, string>
  ): Promise<ApiResponse<T>> {
    return await ApiUtil.sendAsync<T>({
      method,
      url,
      data,
      params,
      headers
    });
  }

  async getAllLocations(): Promise<ApiResponse<any>> {
    return await this.callApi<any>(
      'GET',
      'ALL-Cities'
    );
  }

  async getChartData(url: string): Promise<ApiResponse<any>> {
    return await this.callApi<any>(
      'GET',
      url
    );
  }

  async getTableData(city: string, year: string, month: string): Promise<ApiResponse<any>> {
    return await this.callApi<any>(
      'GET',
      `get-tables?city=${city}&year=${year}&month=${month}`
    );
  }

  async chatResponse(query: string): Promise<ApiResponse<any>> {
    return await this.callApi<any>(
      'GET',
      `Chat-bot?query=${query}`
    );
  }
}

export const apiService = new ApiService();
