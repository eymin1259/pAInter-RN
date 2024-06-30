import React, {useCallback, useEffect} from 'react';
import SignUp from '../components/screens/SignUp';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../AppInner';
import {useSignUpMutation} from '../hooks/api/useFirebaseAuth';
import {Alert} from 'react-native';
import {useAppDispatch} from '../store';
import {saveUserIntoStorage} from '../thunks/encryptedStorageThunk';

type SignUpScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUp'>;

export interface ISignUpForm {
  email: string;
  password: string;
  cfpassword: string;
}

const SignUpScreen = ({navigation}: SignUpScreenProps) => {
  const dispatch = useAppDispatch();
  const [singUp, {isLoading, data, isError, error}] = useSignUpMutation();

  const onSubmit = useCallback(
    (form: ISignUpForm) => {
      singUp({email: form.email, password: form.password});
    },
    [singUp],
  );

  const gotoSignIn = useCallback(() => {
    navigation.pop();
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
    <SignUp gotoSignIn={gotoSignIn} onSubmit={onSubmit} isLoading={isLoading} />
  );
};

export default SignUpScreen;
