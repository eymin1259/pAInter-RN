import React, {ReactNode} from 'react';
import styled from '@emotion/native';

interface ITextBoxButtonProps {
  children: ReactNode;
  onPress?: () => void;
  textColor?: string;
}

const TextBoxButton = ({children, onPress, textColor}: ITextBoxButtonProps) => {
  return (
    <BoxButton onPress={onPress}>
      <BoxText textColor={textColor}>{children}</BoxText>
    </BoxButton>
  );
};

const BoxButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: flex-start;
  padding-left: 20px;
  width: 100%;
  height: 56px;
  background-color: white;
`;

interface BoxTextProps {
  textColor?: string;
}

const BoxText = styled.Text`
  font-size: 15px;
  color: ${(props: BoxTextProps) =>
    props.textColor ? props.textColor : '#424242'};
`;

export default TextBoxButton;
