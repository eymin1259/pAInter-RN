import React, {useCallback} from 'react';
import SignUpPage from '../components/pages/SignUpPage';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';

type SignUpPageProps = NativeStackScreenProps<RootStackParamList, 'SignUp'>;

const SignUp = ({navigation}: SignUpPageProps) => {
  const gotoSignIn = useCallback(() => {
    navigation.pop();
  }, [navigation]);

  return <SignUpPage gotoSignIn={gotoSignIn}></SignUpPage>;
};

export default SignUp;
