import {createSlice} from '@reduxjs/toolkit';
import {
  saveUserIntoStorage,
  removeUserFromStorage,
  getUserFromStorage,
} from '../thunks/encryptedStorageThunk';

const initialState = {
  email: '',
  uid: '',
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.uid = action.payload.uid;
    },
  },
  extraReducers: builder => {
    builder.addCase(saveUserIntoStorage.fulfilled, (state, {payload}) => {
      state.email = payload.email;
      state.uid = payload.uid;
    });
    builder.addCase(saveUserIntoStorage.rejected, state => {
      state.email = '';
      state.uid = '';
    });
    builder.addCase(removeUserFromStorage.fulfilled, state => {
      state.email = '';
      state.uid = '';
    });
    builder.addCase(getUserFromStorage.fulfilled, (state, {payload}) => {
      state.email = payload.email;
      state.uid = payload.uid;
    });
  },
});

export default userSlice;
