import {createApi, fakeBaseQuery} from '@reduxjs/toolkit/query/react';
import axios from 'axios';
import {OPENAIKEY} from '../../constants/APIKEY';
import {ImageResponse} from './useVaryImage';

export const generateImageApi = createApi({
  reducerPath: 'generateImageApi',
  baseQuery: fakeBaseQuery(),
  endpoints: builder => ({
    generateImage: builder.mutation<string, string>({
      queryFn: async prompt => {
        try {
          const response = await axios.post<ImageResponse>(
            'https://api.openai.com/v1/images/generations',
            {prompt: prompt, n: 1, size: '256x256'},
            {
              withCredentials: true,
              headers: {
                Authorization: `Bearer ${OPENAIKEY}`,
                'Content-Type': 'application/json',
              },
            },
          );
          console.log(response);
          if (response.data.data.length < 1) {
            throw Error('no image generation');
          }
          return {
            data: response.data.data[0].url,
          };
        } catch (err: any) {
          let errorMessage = 'unknown error';
          if (axios.isAxiosError(err)) {
            errorMessage = err.response?.data.error.message as string;
          } else {
            errorMessage = err.message as string;
          }
          return {
            error: errorMessage,
          };
        }
      },
    }),
  }),
});

export const {useGenerateImageMutation} = generateImageApi;
