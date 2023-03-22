import React, {ReactNode} from 'react';
import styled from '@emotion/native';

interface IPurpleTitleProps {
  children: ReactNode;
}
const PurpleTitle = ({children}: IPurpleTitleProps) => {
  return <PurpleTitleText>{children}</PurpleTitleText>;
};

const PurpleTitleText = styled.Text`
  font-size: 30px;
  color: purple;
  font-weight: bold;
`;

export default PurpleTitle;
