import React from 'react';
import Dialog from 'react-native-dialog';
import {useSelector} from 'react-redux';
import {
  setInput,
  setIsConFirmed,
  setIsDeclined,
} from '../../slices/dialogSlice';
import {useAppDispatch} from '../../store';
import {RootState} from '../../store/reducer';

interface IInputDialogProps {
  inputPlaceholder?: string;
  cancelBtnLabel?: string;
  confirmBtnLable?: string;
}

const InputDialog = (props: IInputDialogProps) => {
  const dispatch = useAppDispatch();
  const visible: boolean = useSelector(
    (state: RootState) => state.dialog.isShow,
  );
  const title = useSelector((state: RootState) => state.dialog.title);
  const message = useSelector((state: RootState) => state.dialog.message);

  return (
    <Dialog.Container visible={visible}>
      <Dialog.Title>{title}</Dialog.Title>
      <Dialog.Description>{message}</Dialog.Description>
      <Dialog.Input
        placeholder={props.inputPlaceholder}
        onChangeText={e => {
          dispatch(setInput({input: e}));
        }}
      />
      <Dialog.Button
        label={props.cancelBtnLabel ? props.cancelBtnLabel : 'Cancel'}
        onPress={() => {
          dispatch(setIsDeclined({isDeclined: true}));
        }}
      />
      <Dialog.Button
        label={props.confirmBtnLable ? props.confirmBtnLable : 'Confirm'}
        onPress={() => {
          dispatch(setIsConFirmed({isConfirmed: true}));
        }}
      />
    </Dialog.Container>
  );
};

export default InputDialog;
