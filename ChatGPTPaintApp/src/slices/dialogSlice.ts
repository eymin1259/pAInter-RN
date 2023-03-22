import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  title: '',
  message: '',
  input: '',
  isShow: false,
  isConfirmed: false,
  isDeclined: false,
};
const dialogSlice = createSlice({
  name: 'dialog',
  initialState,
  reducers: {
    openDialog: (state, action) => {
      state.title = action.payload.title;
      state.message = action.payload.message;
      state.input = '';
      state.isShow = true;
      state.isConfirmed = false;
      state.isDeclined = false;
    },
    setInput: (state, action) => {
      state.input = action.payload.input;
    },
    setIsConFirmed: (state, action) => {
      state.isConfirmed = action.payload.isConfirmed;
      state.isShow = false;
    },
    setIsDeclined: (state, action) => {
      state.isDeclined = action.payload.isDeclined;
      state.isShow = false;
    },
  },
});

export const {openDialog, setInput, setIsConFirmed, setIsDeclined} =
  dialogSlice.actions;
export default dialogSlice;
