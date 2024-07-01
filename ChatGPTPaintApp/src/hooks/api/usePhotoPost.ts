import {createApi, fakeBaseQuery} from '@reduxjs/toolkit/query/react';
import axios from 'axios';
import {OPENAIKEY} from '../../constants/APIKEY';

export interface ImageForm {
  uri: string;
  name: string;
  type: string;
}

interface ImageVariationResponse {
  data: [
    {
      url: string;
    },
  ];
}

export const postPhotoApi = createApi({
  reducerPath: 'postPhotoApi',
  baseQuery: fakeBaseQuery(),
  endpoints: builder => ({
    postPhoto: builder.mutation<string, ImageForm>({
      queryFn: async form => {
        const formData = new FormData();
        formData.append('image', form);
        formData.append('n', 1);
        formData.append('size', '512x512');
        // formData.append('response_format', 'b64_json');
        try {
          console.log('postPhotoApi');
          const response = await axios.post<ImageVariationResponse>(
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

          console.log(response);
          if (response.data.data.length < 1) {
            throw Error('no image variation');
          }
          return {
            data: response.data.data[0].url,
          };
        } catch (err: any) {
          console.log(err);
          console.debug(err);
          console.debug(err);

          return {
            error: err.message,
          };
        }
      },
    }),
  }),
});

export const {usePostPhotoMutation} = postPhotoApi;
