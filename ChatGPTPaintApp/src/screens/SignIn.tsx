import React, {useCallback, useEffect} from 'react';
import SignInScreen from '../components/screens/SignInScreen';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../AppInner';
import {useSignInMutation} from '../hooks/api/authApi';
import {Alert} from 'react-native';
import {useAppDispatch} from '../store';
import {saveUserInfo} from '../thunks/encryptedStorageThunk';

type SignInPageProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

export type SignInForm = {
  email: string;
  password: string;
};

const SignIn = ({navigation}: SignInPageProps) => {
  const dispatch = useAppDispatch();
  const [signIn, {isLoading, data, isError, error}] = useSignInMutation();

  const onSubmit = useCallback(
    (form: SignInForm) => {
      signIn({
        email: form.email,
        password: form.password,
      });
    },
    [signIn],
  );

  const gotoSignUp = useCallback(() => {
    navigation.navigate('SignUp');
  }, [navigation]);

  useEffect(() => {
    if (error) {
      const errorMessage = error as string;
      Alert.alert('alert', errorMessage);
    }
  }, [isError, error]);

  useEffect(() => {
    if (data) {
      dispatch(saveUserInfo({email: data.email, uid: data.uid}));
    }
  }, [data, dispatch]);

  return (
    <SignInScreen
      gotoSignUp={gotoSignUp}
      onSubmit={onSubmit}
      isLoading={isLoading}
    />
  );
};

export default SignIn;
