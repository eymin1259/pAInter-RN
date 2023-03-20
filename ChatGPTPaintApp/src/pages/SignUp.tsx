import React, {useCallback} from 'react';
import SignUpPage from '../components/pages/SignUpPage';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../AppInner';

type SignUpPageProps = NativeStackScreenProps<RootStackParamList, 'SignUp'>;

export type SignUpForm = {
  email: string;
  password: string;
  cfpassword: string;
};

const SignUp = ({navigation}: SignUpPageProps) => {
  const onSubmit = useCallback((data: SignUpForm) => {
    console.log('SignUp');
    console.log(data);
  }, []);

  const gotoSignIn = useCallback(() => {
    navigation.pop();
  }, [navigation]);

  return <SignUpPage gotoSignIn={gotoSignIn} onSubmit={onSubmit} />;
};

export default SignUp;
