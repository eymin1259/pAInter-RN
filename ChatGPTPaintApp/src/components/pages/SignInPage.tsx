import React from 'react';
import {Text} from 'react-native';
import styled from '@emotion/native';
import AuthTitle from '../auth/AuthTitle';

const SignInPage = () => {
  return (
    <SignInPageLayout>
      <AuthTitle>로그인</AuthTitle>
      <Text>이메일</Text>
      <Text>비밀번호</Text>
      <Text>로그인버튼</Text>
      <Text>회원가입</Text>
    </SignInPageLayout>
  );
};

const SignInPageLayout = styled.SafeAreaView`
  justify-content: center;
  align-items: center;
  background-color: white;
  height: 100%;
`;

export default SignInPage;
