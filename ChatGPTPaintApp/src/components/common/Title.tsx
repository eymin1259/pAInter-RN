import React, {ReactNode} from 'react';
import styled from '@emotion/native';

interface ITitleProps {
  children?: ReactNode;
  textColor?: string;
  fontSize?: string;
  paddingTop?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  paddingRight?: string;
}
const Title = ({
  children,
  textColor,
  fontSize,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
}: ITitleProps) => {
  return (
    <TitleText
      fontSize={fontSize}
      textColor={textColor}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}>
      {children}
    </TitleText>
  );
};

interface TitleTextProps {
  textColor?: string;
  fontSize?: string;
  paddingTop?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  paddingRight?: string;
}

const TitleText = styled.Text`
  font-size: ${(props: TitleTextProps) =>
    props.fontSize ? props.fontSize : '30px'};
  color: ${(props: TitleTextProps) =>
    props.textColor ? props.textColor : 'purple'};
  padding-top: ${(props: TitleTextProps) =>
    props.paddingTop ? props.paddingTop : '0px'};
  padding-bottom: ${(props: TitleTextProps) =>
    props.paddingBottom ? props.paddingBottom : '0px'};
  padding-left: ${(props: TitleTextProps) =>
    props.paddingLeft ? props.paddingLeft : '0px'};
  padding-right: ${(props: TitleTextProps) =>
    props.paddingRight ? props.paddingRight : '0px'};
  font-weight: bold;
`;

export default Title;
