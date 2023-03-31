import {configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import {useFirebaseAuth} from '../hooks/api/useFirebaseAuth';
import {imageGenerationApi} from '../hooks/api/useImageGenerationMutation';
import {imageVariationApi} from '../hooks/api/useImageVariationMutation';
import rootReducer from './reducer';

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(useFirebaseAuth.middleware)
      .concat(imageVariationApi.middleware)
      .concat(imageGenerationApi.middleware),
});
export default store;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
