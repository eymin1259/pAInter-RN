import {configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import {useFirebaseAuth} from '../hooks/api/useFirebaseAuth';
import {generateImageApi} from '../hooks/api/useGenerateImage';
import {postPhotoApi} from '../hooks/api/usePhotoPost';
import rootReducer from './reducer';

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(useFirebaseAuth.middleware)
      .concat(postPhotoApi.middleware)
      .concat(generateImageApi.middleware),
});
export default store;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
