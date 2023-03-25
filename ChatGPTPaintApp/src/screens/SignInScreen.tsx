import React, {useCallback, useEffect} from 'react';
import SignIn from '../components/screens/SignIn';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../AppInner';
import {useSignInMutation} from '../hooks/api/authApi';
import {Alert} from 'react-native';
import {useAppDispatch} from '../store';
import {saveUserIntoStorage} from '../thunks/encryptedStorageThunk';

type SignInScreenProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

export type SignInForm = {
  email: string;
  password: string;
};

const SignInScreen = ({navigation}: SignInScreenProps) => {
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
      dispatch(saveUserIntoStorage({email: data.email, uid: data.uid}));
    }
  }, [data, dispatch]);

  return (
    <SignIn gotoSignUp={gotoSignUp} onSubmit={onSubmit} isLoading={isLoading} />
  );
};

export default SignInScreen;
