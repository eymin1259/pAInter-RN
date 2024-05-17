import {createApi, fakeBaseQuery} from '@reduxjs/toolkit/query/react';
import auth from '@react-native-firebase/auth';
import {ISignUpForm} from '../../screens/SignUp';

type SignUpData = Omit<ISignUpForm, 'cfpassword'>;

export interface IUserInfo {
  email: string;
  uid: string;
}

export const firebaseAuthApi = createApi({
  reducerPath: 'firebaseAuthApi',
  baseQuery: fakeBaseQuery(),
  tagTypes: ['Post'],
  endpoints: builder => ({
    signIn: builder.mutation<IUserInfo, SignUpData>({
      queryFn: async form => {
        try {
          const userCredential = await auth().signInWithEmailAndPassword(
            form.email,
            form.password,
          );
          return {
            data: {
              email: userCredential.user.email ?? '',
              uid: userCredential.user.uid,
            },
          };
        } catch (error: any) {
          const errorCode = error.code as string;
          let errorMsg = 'unknown error';
          switch (errorCode) {
            case 'auth/invalid-email':
              errorMsg = 'the email address is not valid.';
              break;
            case 'auth/user-disabled':
              errorMsg =
                'the user corresponding to the given email has been disabled.';
              break;
            case 'auth/user-not-found':
              errorMsg = 'there is no user corresponding to the given email.';
              break;
            case 'auth/wrong-password':
              errorMsg = 'the password is invalid for the given email';
              break;
            default:
              break;
          }
          return {error: errorMsg};
        }
      },
    }),
    signUp: builder.mutation<IUserInfo, SignUpData>({
      queryFn: async form => {
        try {
          const userCredential = await auth().createUserWithEmailAndPassword(
            form.email,
            form.password,
          );
          return {
            data: {
              email: userCredential.user.email ?? '',
              uid: userCredential.user.uid,
            },
          };
        } catch (error: any) {
          const errorCode = error.code as string;
          let errorMsg = 'unknown error';
          switch (errorCode) {
            case 'auth/email-already-in-use':
              errorMsg =
                'there already exists an account with the given email address.';
              break;
            case 'auth/invalid-email':
              errorMsg = 'the email address is not valid.';
              break;
            case 'auth/operation-not-allowed':
              errorMsg = 'email/password accounts are not enabled.';
              break;
            case 'auth/weak-password':
              errorMsg = 'the password is not strong enough.';
              break;
            default:
              break;
          }
          return {error: errorMsg};
        }
      },
    }),
  }),
});

export const {useSignUpMutation, useSignInMutation} = firebaseAuthApi;
