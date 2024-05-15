import {createApi, fakeBaseQuery} from '@reduxjs/toolkit/query/react';
import auth from '@react-native-firebase/auth';
import {SignUpForm} from '../pages/SignUp';

type SignUpData = Omit<SignUpForm, 'cfpassword'>;

export const firebaseAuthApi = createApi({
  reducerPath: 'firebaseAuthApi',
  baseQuery: fakeBaseQuery(),
  tagTypes: ['Post'],
  endpoints: builder => ({
    signUpPost: builder.mutation<string, SignUpData>({
      queryFn: async form => {
        try {
          const userCredential = await auth().createUserWithEmailAndPassword(
            form.email,
            form.password,
          );
          return {data: userCredential.user.uid};
        } catch (error) {
          const errorCode = error as string;
          return {error: errorCode};
        }
      },
    }),
  }),
});

export const {useSignUpPostMutation} = firebaseAuthApi;
