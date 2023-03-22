import React, {useCallback, useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import {useAppDispatch} from '../../store';
import {removeUserFromStorage} from '../../thunks/encryptedStorageThunk';
import Dialog from 'react-native-dialog';
import auth from '@react-native-firebase/auth';

const MypageScreen = () => {
  const dispatch = useAppDispatch();
  const [visible, setVisible] = useState(false);
  const [inputPassword, setInputPassword] = useState('');

  const handleLogout = useCallback(async () => {
    await auth().signOut();
    dispatch(removeUserFromStorage());
  }, [dispatch]);

  const handleCancel = () => {
    setInputPassword('');
    setVisible(false);
  };

  const handleDelete = () => {
    // The user has pressed the "Delete" button, so here you can do your own logic.
    // ...Your logic
    console.log(inputPassword);
    setInputPassword('');
    setVisible(false);
  };

  return (
    <View>
      <Text>setting</Text>
      <Pressable
        onPress={() => {
          handleLogout();
        }}>
        <Text>로그아웃</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          setVisible(true);
        }}>
        <Text>회원탈퇴</Text>
      </Pressable>
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

export default MypageScreen;
