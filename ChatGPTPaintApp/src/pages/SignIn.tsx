import React, {useCallback} from 'react';
import SignInPage from '../components/pages/SignInPage';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';

type SignInPageProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

const SignIn = ({navigation}: SignInPageProps) => {
  const gotoSignUp = useCallback(() => {
    navigation.navigate('SignUp');
  }, [navigation]);

  return <SignInPage gotoSignUp={gotoSignUp}></SignInPage>;
};

export default SignIn;
