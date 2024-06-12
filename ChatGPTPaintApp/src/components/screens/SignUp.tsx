import React from 'react';
import Title from '../common/Title';
import EmailInput from '../auth/EmailInput';
import PasswordInput from '../auth/PasswordInput';
import PurpleButton from '../common/PurpleButton';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {useForm, Controller} from 'react-hook-form';
import {ISignUpForm} from '../../screens/SignUpScreen';

interface ISignUpProps {
  gotoSignIn: () => void;
  onSubmit: (data: ISignUpForm) => void;
  isLoading: boolean;
}

const SignUp = ({gotoSignIn, onSubmit, isLoading}: ISignUpProps) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      cfpassword: '',
    },
  });

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.OutterContainer}>
        <KeyboardAwareScrollView>
          <View style={styles.InnerContainer}>
            <Title>SignUp</Title>
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
            <Controller
              control={control}
              name="cfpassword"
              rules={{
                validate: (val, formVal) => {
                  return val === formVal.password;
                },
              }}
              render={({field: {onChange}}) => (
                <PasswordInput
                  onChangeText={onChange}
                  error={
                    errors.cfpassword === undefined ? '' : 'password mismatch'
                  }
                  placeholder="confirm password"
                />
              )}
            />
            <PurpleButton
              onPress={handleSubmit(onSubmit)}
              isLoading={isLoading}>
              Confirm
            </PurpleButton>
            <PurpleButton onPress={gotoSignIn}>SignIn</PurpleButton>
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
    height: '70%',
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

export default SignUp;
