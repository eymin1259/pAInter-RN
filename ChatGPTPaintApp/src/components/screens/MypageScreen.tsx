import React, {useCallback, useState} from 'react';
import {View} from 'react-native';
import {useAppDispatch} from '../../store';
import {removeUserFromStorage} from '../../thunks/encryptedStorageThunk';
import Dialog from 'react-native-dialog';
import auth from '@react-native-firebase/auth';
import TextBoxButton from '../common/TextBoxButton';

const MyPageScreen = () => {
  const dispatch = useAppDispatch();
  const [visible, setVisible] = useState(false);
  const [inputPassword, setInputPassword] = useState('');

  const handleSignOut = useCallback(async () => {
    await auth().signOut();
    dispatch(removeUserFromStorage());
  }, [dispatch]);

  const handleCancel = () => {
    setInputPassword('');
    setVisible(false);
  };

  const handleDelete = () => {
    console.log(inputPassword);
    setInputPassword('');
    setVisible(false);
  };

  return (
    <View>
      <TextBoxButton>email</TextBoxButton>
      <TextBoxButton onPress={handleSignOut}>sign out</TextBoxButton>
      <TextBoxButton onPress={() => setVisible(true)} textColor="red">
        delete account
      </TextBoxButton>
      <Dialog.Container visible={visible}>
        <Dialog.Title>Account delete</Dialog.Title>
        <Dialog.Description>
          Do you want to delete this account? You cannot undo this action.
        </Dialog.Description>
        <Dialog.Input
          placeholder="password"
          onChangeText={e => {
            setInputPassword(e);
          }}
        />
        <Dialog.Button label="Cancel" onPress={handleCancel} />
        <Dialog.Button label="Delete" onPress={handleDelete} />
      </Dialog.Container>
    </View>
  );
};

export default MyPageScreen;
