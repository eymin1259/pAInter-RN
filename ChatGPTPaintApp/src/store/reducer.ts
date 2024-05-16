import {combineReducers} from 'redux';
import {firebaseAuthApi} from '../hooks/api/authApi';

import userSlice from '../slices/userSlice';

const rootReducer = combineReducers({
  user: userSlice.reducer,
  [firebaseAuthApi.reducerPath]: firebaseAuthApi.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
