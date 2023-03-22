import React, {useCallback} from 'react';
import MyPageScreen from '../components/screens/MyPageScreen';
import {useAppDispatch} from '../store';
import auth from '@react-native-firebase/auth';
import {removeUserFromStorage} from '../thunks/encryptedStorageThunk';
import InputDialog from '../components/common/InputDialog';
import useDialog from '../hooks/useDialog';

const MyPage = () => {
  const dispatch = useAppDispatch();
  const {openDialog} = useDialog();

  const handleSignOut = useCallback(async () => {
    await auth().signOut();
    dispatch(removeUserFromStorage());
  }, [dispatch]);

  const hadleDeleteAccount = async () => {
    const payload = await openDialog({
      title: 'Alert',
      message: 'Do you want to delete this account?',
    });
    if (payload.result) {
      console.log(`re-auth ${payload.dialogInput}`);
    }
  };

  return (
    <>
      <MyPageScreen
        handleSignOut={handleSignOut}
        hadleDeleteAccount={hadleDeleteAccount}
      />
      <InputDialog
        inputPlaceholder="password"
        cancelBtnLabel="cancel"
        confirmBtnLable="delete"
      />
    </>
  );
};

export default MyPage;
