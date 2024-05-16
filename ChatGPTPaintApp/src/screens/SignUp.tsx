import React, {useCallback} from 'react';
import SignUpScreen from '../components/screens/SignUpScreen';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../AppInner';
import {useSignUpPostMutation} from '../hooks/api/authApi';

type SignUpPageProps = NativeStackScreenProps<RootStackParamList, 'SignUp'>;

export interface ISignUpForm {
  email: string;
  password: string;
  cfpassword: string;
}

const SignUp = ({navigation}: SignUpPageProps) => {
  const [singUp, {isLoading, data: uid, isError, error}] =
    useSignUpPostMutation();

  const onSubmit = useCallback(
    (form: ISignUpForm) => {
      console.log('SignUp');
      console.log(form);
      singUp({email: form.email, password: form.password});
    },
    [singUp],
  );

  const gotoSignIn = useCallback(() => {
    navigation.pop();
  }, [navigation]);

  return <SignUpScreen gotoSignIn={gotoSignIn} onSubmit={onSubmit} />;
};

export default SignUp;
