import React from 'react';
import AuthTitle from '../auth/AuthTitle';
import EmailInput from '../auth/EmailInput';
import PasswordInput from '../auth/PasswordInput';
import AuthButton from '../auth/AuthButton';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {Platform} from 'react-native';

interface ISignUpPageProps {
  gotoSignIn: () => void;
}

const SignUpPage = (props: ISignUpPageProps) => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.OutterContainer}>
        <KeyboardAwareScrollView>
          <View style={styles.InnerContainer}>
            <AuthTitle>SignUp</AuthTitle>
            <EmailInput />
            <PasswordInput />
            <PasswordInput />
            <AuthButton>Confirm</AuthButton>
            <AuthButton onPress={props.gotoSignIn}>SignIn</AuthButton>
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

export default SignUpPage;
