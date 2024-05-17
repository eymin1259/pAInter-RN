import {createSlice} from '@reduxjs/toolkit';
import {saveUserInfo} from '../thunks/encryptedStorageThunk';

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
    builder.addCase(saveUserInfo.fulfilled, (state, {payload}) => {
      state.email = payload.email;
      state.uid = payload.uid;
    });
    builder.addCase(saveUserInfo.rejected, state => {
      state.email = '';
      state.uid = '';
    });
  },
});

export default userSlice;
