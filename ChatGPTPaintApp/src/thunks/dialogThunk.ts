import {createAsyncThunk} from '@reduxjs/toolkit';
import {openDialog} from '../slices/dialogSlice';
import store from '../store';
import {RootState} from '../store/reducer';

export type DialogContents = {
  title: string;
  message: string;
};

type DialogResult = {
  result: boolean;
  dialogInput: string;
};

export const openDialogThunkAction = createAsyncThunk<
  DialogResult,
  DialogContents
>('openDialogThunkAction', (payload, thunkapi) => {
  thunkapi.dispatch(openDialog(payload));

  return new Promise<DialogResult>(resolve => {
    const unsubscribe = store.subscribe(() => {
      const {dialog} = store.getState() as RootState;
      if (dialog.isConfirmed) {
        unsubscribe();
        resolve({
          result: true,
          dialogInput: dialog.input,
        });
      }
      if (dialog.isDeclined) {
        unsubscribe();
        resolve({
          result: false,
          dialogInput: dialog.input,
        });
      }
    });
  });
});
