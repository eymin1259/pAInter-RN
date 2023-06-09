import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/reducer';
import TextBoxButton from '../common/TextBoxButton';

interface IMyPageProps {
  handleSignOut: () => void;
  hadleDeleteAccount: () => void;
}

const MyPage = ({handleSignOut, hadleDeleteAccount}: IMyPageProps) => {
  const userEmail = useSelector((state: RootState) => state.user.email);

  return (
    <>
      <TextBoxButton>{userEmail}</TextBoxButton>
      <TextBoxButton onPress={handleSignOut}>sign out</TextBoxButton>
      <TextBoxButton onPress={hadleDeleteAccount} textColor="red">
        delete account
      </TextBoxButton>
    </>
  );
};

export default MyPage;
