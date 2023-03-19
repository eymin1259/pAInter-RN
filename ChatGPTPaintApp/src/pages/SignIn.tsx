import React, {useCallback} from 'react';
import SignInPage from '../components/pages/SignInPage';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';

type SignInPageProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

export type SignInForm = {
  email: string;
  password: string;
};

const SignIn = ({navigation}: SignInPageProps) => {
  const onSubmit = useCallback((data: SignInForm) => {
    console.log('SignIn');
    console.log(data);
  }, []);

  const gotoSignUp = useCallback(() => {
    navigation.navigate('SignUp');
  }, [navigation]);

  return <SignInPage gotoSignUp={gotoSignUp} onSubmit={onSubmit} />;
};

export default SignIn;
