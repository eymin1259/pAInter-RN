import {combineReducers} from 'redux';
import {firebaseAuthApi} from '../hooks/api/authApi';
import dialogSlice from '../slices/dialogSlice';
import photoSlice from '../slices/photoSlice';
import userSlice from '../slices/userSlice';

const rootReducer = combineReducers({
  user: userSlice.reducer,
  [firebaseAuthApi.reducerPath]: firebaseAuthApi.reducer,
  dialog: dialogSlice.reducer,
  photo: photoSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
