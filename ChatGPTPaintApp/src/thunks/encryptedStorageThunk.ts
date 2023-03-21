import {createAsyncThunk} from '@reduxjs/toolkit';
import EncryptedStorage from 'react-native-encrypted-storage';
import {IUserInfo} from '../hooks/api/authApi';

export const saveUserInfo = createAsyncThunk<IUserInfo, IUserInfo>(
  'encryptedStorageThunk/saveUserInfo',
  async userinfo => {
    await EncryptedStorage.setItem('email', userinfo.email);
    await EncryptedStorage.setItem('uid', userinfo.uid);
    return userinfo;
  },
);
