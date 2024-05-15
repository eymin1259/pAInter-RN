import React, {useCallback} from 'react';
import SignUpPage from '../components/pages/SignUpPage';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../AppInner';
import {useSignUpPostMutation} from '../api/authApi';

type SignUpPageProps = NativeStackScreenProps<RootStackParamList, 'SignUp'>;

export interface SignUpForm {
  email: string;
  password: string;
  cfpassword: string;
}

const SignUp = ({navigation}: SignUpPageProps) => {
  const [singUp, {isLoading, data: uid, isError, error}] =
    useSignUpPostMutation();

  const onSubmit = useCallback(
    (form: SignUpForm) => {
      console.log('SignUp');
      console.log(form);
      singUp({email: form.email, password: form.password});
    },
    [singUp],
  );

  const gotoSignIn = useCallback(() => {
    navigation.pop();
  }, [navigation]);

  return <SignUpPage gotoSignIn={gotoSignIn} onSubmit={onSubmit} />;
};

export default SignUp;
