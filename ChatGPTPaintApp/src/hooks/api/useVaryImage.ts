import {createApi, fakeBaseQuery} from '@reduxjs/toolkit/query/react';
import axios from 'axios';
import {OPENAIKEY} from '../../constants/APIKEY';

export interface ImageForm {
  uri: string;
  name: string;
  type: string;
}

export interface ImageResponse {
  data: [
    {
      url: string;
    },
  ];
}

export const varyImageApi = createApi({
  reducerPath: 'varyImageApi',
  baseQuery: fakeBaseQuery(),
  endpoints: builder => ({
    varyImage: builder.mutation<string, ImageForm>({
      queryFn: async form => {
        const formData = new FormData();
        formData.append('image', form);
        formData.append('n', 1);
        formData.append('size', '512x512');
        try {
          const response = await axios.post<ImageResponse>(
            'https://api.openai.com/v1/images/variations',
            formData,
            {
              withCredentials: true,
              headers: {
                Authorization: `Bearer ${OPENAIKEY}`,
                'Content-Type': 'multipart/form-data',
              },
            },
          );
          if (response.data.data.length < 1) {
            throw Error('no image variation');
          }
          return {
            data: response.data.data[0].url,
          };
        } catch (err: any) {
          let errorMessage = 'unknown error';
          if (axios.isAxiosError(err)) {
            errorMessage = err.response?.data.error.message;
          } else {
            errorMessage = err.message;
          }
          return {
            error: errorMessage,
          };
        }
      },
    }),
  }),
});

export const {useVaryImageMutation} = varyImageApi;
