import {createApi} from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from '../../api/axiosBaseQuery';
import {OPENAIKEY} from '../../constants/APIKEY';

interface ImageVariationResponse {
  url: string;
}

interface ImageForm {
  uri: string;
  name: string;
  type: string;
}

export const imageVariationApi = createApi({
  reducerPath: 'imageVariation',
  baseQuery: axiosBaseQuery(),
  endpoints: builder => ({
    imageVariation: builder.mutation<ImageVariationResponse, ImageForm>({
      query: form => {
        const formData = new FormData();
        formData.append('image', form);
        formData.append('n', 1);
        formData.append('size', '256x256');
        return {
          url: '/images/variations',
          method: 'post',
          data: formData,
          headers: {
            Authorization: `Bearer ${OPENAIKEY}`,
            'Content-Type': 'multipart/form-data',
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

export const {useImageVariationMutation} = imageVariationApi;
