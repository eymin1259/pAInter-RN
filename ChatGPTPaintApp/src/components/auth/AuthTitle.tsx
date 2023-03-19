import React, {ReactNode} from 'react';
import styled from '@emotion/native';

interface IAuthTitleProps {
  children: ReactNode;
}
const AuthTitle = ({children}: IAuthTitleProps) => {
  return <AuthTitleText>{children}</AuthTitleText>;
};

const AuthTitleText = styled.Text`
  font-size: 30px;
  color: purple;
  font-weight: bold;
`;

export default AuthTitle;
