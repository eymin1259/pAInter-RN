import React, {ReactNode} from 'react';
import styled from '@emotion/native';

interface ITitleProps {
  children: ReactNode;
  textColor?: string;
  fontSize?: string;
}
const Title = ({children, textColor, fontSize}: ITitleProps) => {
  return (
    <TitleText fontSize={fontSize} textColor={textColor}>
      {children}
    </TitleText>
  );
};

interface TitleTextProps {
  textColor?: string;
  fontSize?: string;
}

const TitleText = styled.Text`
  font-size: ${(props: TitleTextProps) =>
    props.fontSize ? props.fontSize : '30px'};
  color: ${(props: TitleTextProps) =>
    props.textColor ? props.textColor : 'purple'};
  font-weight: bold;
`;

export default Title;
