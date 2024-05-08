import React from 'react';
import styled from '@emotion/native';
import {Platform} from 'react-native';

interface IEmailInputProps {
  error?: string;
  onChangeText: (text: String) => void;
}

const EmailInput = ({error, onChangeText}: IEmailInputProps) => {
  return (
    <EmailInputContainer>
      <EmailTextInput
        keyboardType="email-address"
        placeholder="email"
        onChangeText={onChangeText}
      />
      <EmailValidationError>{error}</EmailValidationError>
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
