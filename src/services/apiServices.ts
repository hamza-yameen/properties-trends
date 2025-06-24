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

  async getMedianSales(city: string): Promise<ApiResponse<any>> {
    return await this.callApi<any>(
      'GET',
      `median-sales-1?city=${city}`
    );
  }
}

export const apiService = new ApiService();
export const getMedianSales = apiService.getMedianSales.bind(apiService);
