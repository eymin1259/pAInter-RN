import {createAsyncThunk} from '@reduxjs/toolkit';
import EncryptedStorage from 'react-native-encrypted-storage';
import {IUserInfo} from '../hooks/api/authApi';

export const saveUserIntoStorage = createAsyncThunk<IUserInfo, IUserInfo>(
  'encryptedStorageThunk/saveUserInfo',
  async userinfo => {
    await EncryptedStorage.setItem('email', userinfo.email);
    await EncryptedStorage.setItem('uid', userinfo.uid);
    return userinfo;
  },
);

export const removeUserFromStorage = createAsyncThunk<void, void>(
  'encryptedStorageThunk/removeUserInfo',
  async () => {
    await EncryptedStorage.removeItem('email');
    await EncryptedStorage.removeItem('uid');
  },
);
