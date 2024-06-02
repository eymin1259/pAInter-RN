import React from 'react';
import PurpleTitle from '../common/PurpleTitle';
import EmailInput from '../auth/EmailInput';
import PasswordInput from '../auth/PasswordInput';
import PurpleButton from '../common/PurpleButton';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {Platform} from 'react-native';
import {SignInForm} from '../../screens/SignInScreen';
import {useForm, Controller} from 'react-hook-form';

interface ISignInProps {
  gotoSignUp: () => void;
  onSubmit: (data: SignInForm) => void;
  isLoading: boolean;
}

const SignIn = ({gotoSignUp, onSubmit, isLoading}: ISignInProps) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.OutterContainer}>
        <KeyboardAwareScrollView>
          <View style={styles.InnerContainer}>
            <PurpleTitle>SignIn</PurpleTitle>
            <Controller
              control={control}
              name="email"
              rules={{
                required: {value: true, message: "email can't be blank"},
                pattern: {
                  value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                  message: 'invalid email address',
                },
              }}
              render={({field: {onChange}}) => (
                <EmailInput
                  onChangeText={onChange}
                  error={errors.email?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="password"
              rules={{
                required: {value: true, message: "password can't be blank"},
                minLength: {
                  value: 6,
                  message: 'minimum is 6 characters',
                },
              }}
              render={({field: {onChange}}) => (
                <PasswordInput
                  onChangeText={onChange}
                  error={errors.password?.message}
                  placeholder="password"
                />
              )}
            />
            <PurpleButton
              onPress={handleSubmit(onSubmit)}
              isLoading={isLoading}>
              Confirm
            </PurpleButton>
            <PurpleButton onPress={gotoSignUp}>SignUp</PurpleButton>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  OutterContainer: {
    width: '100%',
    height: `${Platform.OS === 'ios' ? '60%' : '66%'}`,
  },
  InnerContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
});

export default SignIn;
