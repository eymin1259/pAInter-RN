import {useAppDispatch} from '../store';
import {DialogContents, openDialogThunkAction} from '../thunks/dialogThunk';

const useDialog = () => {
  const dispatch = useAppDispatch();

  const openDialog = async (contents: DialogContents) => {
    const {payload} = await await dispatch(openDialogThunkAction(contents));
    return payload;
  };

  return {
    openDialog,
  };
};

export default useDialog;
