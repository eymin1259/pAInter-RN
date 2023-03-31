import {createApi} from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from '../../api/axiosBaseQuery';
import {OPENAIKEY} from '../../constants/APIKEY';

interface ImageGenerationResponse {
  url: string;
}

export const imageGenerationApi = createApi({
  reducerPath: 'imageGenerationApi',
  baseQuery: axiosBaseQuery(),
  endpoints: builder => ({
    imageGeneratio: builder.mutation<ImageGenerationResponse, string>({
      query: prompt => {
        return {
          url: '/images/generations',
          method: 'post',
          data: {prompt: prompt, n: 1, size: '256x256'},
          headers: {
            Authorization: `Bearer ${OPENAIKEY}`,
            'Content-Type': 'application/json',
          },
        };
      },
      transformResponse: baseQueryReturnValue => {
        return {
          url: baseQueryReturnValue.data[0].url,
        };
      },
      transformErrorResponse: (baseQueryReturnValue: any) => {
        return baseQueryReturnValue.data.error.message as string;
      },
    }),
  }),
});

export const {useImageGeneratioMutation} = imageGenerationApi;
