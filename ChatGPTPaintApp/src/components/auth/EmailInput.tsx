import React from 'react';
import styled from '@emotion/native';
import {Platform} from 'react-native';

const EmailInput = () => {
  return (
    <EmailInputContainer>
      <EmailTextInput keyboardType="email-address" placeholder="email" />
      <EmailValidationError>asd</EmailValidationError>
    </EmailInputContainer>
  );
};

const EmailInputContainer = styled.View`
  width: 80%;
  margin-top: ${() => {
    return Platform.OS === 'ios' ? '60px' : '40px';
  }};
`;

const EmailTextInput = styled.TextInput`
  width: 100%;
  border-bottom-width: 1px;
  border-style: solid;
  border-color: purple;
  padding-bottom: 5px;
`;

const EmailValidationError = styled.Text`
  width: 100%;
  color: red;
`;

export default EmailInput;
