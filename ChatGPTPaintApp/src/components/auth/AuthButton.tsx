import React, {ReactNode} from 'react';
import styled from '@emotion/native';
import {Text} from 'react-native';

interface IAuthButtonProps {
  children: ReactNode;
  onPress?: () => void;
}

const AuthButton = ({children, onPress}: IAuthButtonProps) => {
  return (
    <AuthPressable onPress={onPress}>
      <Text style={{color: 'white', fontWeight: 'bold'}}>{children}</Text>
    </AuthPressable>
  );
};

const AuthPressable = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 46px;
  background-color: purple;
  border-radius: 10px;
  margin-top: 20px;
`;
export default AuthButton;
