import {configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import {firebaseAuthApi} from '../api/authApi';
import rootReducer from './reducer';

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(firebaseAuthApi.middleware),
});
export default store;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
