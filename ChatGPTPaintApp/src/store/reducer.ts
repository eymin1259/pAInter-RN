import {combineReducers} from 'redux';
import {firebaseAuthApi} from '../hooks/api/authApi';
import dialogSlice from '../slices/dialogSlice';

import userSlice from '../slices/userSlice';

const rootReducer = combineReducers({
  user: userSlice.reducer,
  [firebaseAuthApi.reducerPath]: firebaseAuthApi.reducer,
  dialog: dialogSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
