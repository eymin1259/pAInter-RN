import {createAsyncThunk} from '@reduxjs/toolkit';
import EncryptedStorage from 'react-native-encrypted-storage';
import {IUserInfo} from '../hooks/api/authApi';

export const saveUserIntoStorage = createAsyncThunk<IUserInfo, IUserInfo>(
  'encryptedStorageThunk/saveUserIntoStorage',
  async userinfo => {
    await EncryptedStorage.setItem('email', userinfo.email);
    await EncryptedStorage.setItem('uid', userinfo.uid);
    return userinfo;
  },
);

export const removeUserFromStorage = createAsyncThunk<void, void>(
  'encryptedStorageThunk/removeUserFromStorage',
  async () => {
    await EncryptedStorage.removeItem('email');
    await EncryptedStorage.removeItem('uid');
  },
);

export const getUserFromStorage = createAsyncThunk<IUserInfo, void>(
  'encryptedStorageThunk/getUserFromStorage',
  async () => {
    const email = (await EncryptedStorage.getItem('email')) ?? '';
    const uid = (await EncryptedStorage.getItem('uid')) ?? '';
    return {email, uid};
  },
);
