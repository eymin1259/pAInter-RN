import React, {ReactNode} from 'react';
import styled from '@emotion/native';
import {ActivityIndicator} from 'react-native';

interface IPurpleButtonProps {
  children: ReactNode;
  onPress?: () => void;
  isLoading?: boolean;
  fontSize?: string;
}

const PurpleButton = ({
  children,
  onPress,
  isLoading,
  fontSize,
}: IPurpleButtonProps) => {
  return (
    <PurplePressable onPress={onPress} disabled={isLoading}>
      {isLoading ? (
        <ActivityIndicator color="white" />
      ) : (
        <ButtonText fontSize={fontSize}>{children}</ButtonText>
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
  border-radius: 20px;
  margin-top: 20px;
`;

interface BoxTextProps {
  fontSize?: string;
}

const ButtonText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: ${(props: BoxTextProps) =>
    props.fontSize ? props.fontSize : '15px'};
`;

export default PurpleButton;
