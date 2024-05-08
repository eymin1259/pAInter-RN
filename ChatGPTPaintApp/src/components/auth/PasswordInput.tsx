import React from 'react';
import styled from '@emotion/native';
import {Platform} from 'react-native';

interface IPasswordInputProps {
  error?: string;
  onChangeText: (text: String) => void;
  placeholder?: string;
}

const PasswordInput = ({
  error,
  onChangeText,
  placeholder,
}: IPasswordInputProps) => {
  return (
    <PasswordInputContainer>
      <PasswordTextInput
        keyboardType="ascii-capable"
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
      <PasswordValidationError>{error}</PasswordValidationError>
    </PasswordInputContainer>
  );
};

const PasswordInputContainer = styled.View`
  width: 80%;
  margin-top: ${() => {
    return Platform.OS === 'ios' ? '30px' : '20px';
  }};
`;

const PasswordTextInput = styled.TextInput`
  width: 100%;
  border-bottom-width: 1px;
  border-style: solid;
  border-color: purple;
  padding-bottom: 5px;
`;

const PasswordValidationError = styled.Text`
  width: 100%;
  color: red;
`;

export default PasswordInput;
