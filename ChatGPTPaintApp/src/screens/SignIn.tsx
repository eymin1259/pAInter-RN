import React, {useCallback} from 'react';
import SignInScreen from '../components/screens/SignInScreen';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../AppInner';

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

  return <SignInScreen gotoSignUp={gotoSignUp} onSubmit={onSubmit} />;
};

export default SignIn;
