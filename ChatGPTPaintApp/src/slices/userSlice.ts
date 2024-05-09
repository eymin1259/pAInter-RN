import {createSlice} from '@reduxjs/toolkit';

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
});

export default userSlice;
