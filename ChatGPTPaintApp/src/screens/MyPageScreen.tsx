import React, {useCallback, useEffect} from 'react';
import MyPage from '../components/screens/MyPage';
import {useAppDispatch} from '../store';
import auth from '@react-native-firebase/auth';
import {removeUserFromStorage} from '../thunks/encryptedStorageThunk';
import InputDialog from '../components/common/InputDialog';
import useDialog from '../hooks/useDialog';
import {DialogResult} from '../thunks/dialogThunk';
import {useDeleteUserMutation} from '../hooks/api/useFirebaseAuth';
import {Alert} from 'react-native';

const MyPageScreen = () => {
  const dispatch = useAppDispatch();
  const {openDialog} = useDialog();
  const [deleteUser, {isLoading, data: deleteResult, isError, error}] =
    useDeleteUserMutation();

  const handleSignOut = useCallback(async () => {
    await auth().signOut();
    dispatch(removeUserFromStorage());
  }, [dispatch]);

  const hadleDeleteAccount = useCallback(async () => {
    const payload = (await openDialog({
      title: 'Alert',
      message: 'Do you want to delete this account?\nEnter your password.',
    })) as DialogResult;
    if (payload.result && !isLoading) {
      deleteUser(payload.dialogInput);
    }
  }, [deleteUser, isLoading, openDialog]);

  useEffect(() => {
    if (deleteResult === true) {
      dispatch(removeUserFromStorage());
    }
  }, [dispatch, deleteResult]);

  useEffect(() => {
    if (isError) {
      const errorMessage = error as string;
      Alert.alert('alert', errorMessage);
    }
  }, [isError, error]);

  return (
    <>
      <MyPage
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

export default MyPageScreen;
