import type {BaseQueryFn} from '@reduxjs/toolkit/query';
import axios from 'axios';
import type {AxiosRequestConfig, AxiosError} from 'axios';

interface ServerResponse {
  data: [
    {
      url: string;
    },
  ];
}

const axiosBaseQuery =
  (
    {baseUrl}: {baseUrl: string} = {baseUrl: 'https://api.openai.com/v1'},
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig['method'];
      data?: AxiosRequestConfig['data'];
      params?: AxiosRequestConfig['params'];
      headers?: AxiosRequestConfig['headers'];
    },
    ServerResponse,
    unknown
  > =>
  async ({url, method, data, params, headers}) => {
    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        data,
        params,
        headers,
      });
      return {data: result.data};
    } catch (axiosError) {
      let err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export default axiosBaseQuery;
