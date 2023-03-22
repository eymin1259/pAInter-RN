import React, {ReactNode} from 'react';
import styled from '@emotion/native';
import {ActivityIndicator, Text} from 'react-native';

interface IPurpleButtonProps {
  children: ReactNode;
  onPress?: () => void;
  isLoading?: boolean;
}

const PurpleButton = ({children, onPress, isLoading}: IPurpleButtonProps) => {
  return (
    <PurplePressable onPress={onPress} disabled={isLoading}>
      {isLoading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text style={{color: 'white', fontWeight: 'bold'}}>{children}</Text>
      )}
    </PurplePressable>
  );
};

const PurplePressable = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 46px;
  background-color: purple;
  border-radius: 10px;
  margin-top: 20px;
`;
export default PurpleButton;
