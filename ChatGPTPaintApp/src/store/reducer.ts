import {combineReducers} from 'redux';
import {useFirebaseAuth} from '../hooks/api/useFirebaseAuth';
import {generateImageApi} from '../hooks/api/useGenerateImage';
import {varyImageApi} from '../hooks/api/useVaryImage';
import dialogSlice from '../slices/dialogSlice';
import photoSlice from '../slices/photoSlice';
import userSlice from '../slices/userSlice';

const rootReducer = combineReducers({
  user: userSlice.reducer,
  dialog: dialogSlice.reducer,
  photo: photoSlice.reducer,
  [useFirebaseAuth.reducerPath]: useFirebaseAuth.reducer,
  [varyImageApi.reducerPath]: varyImageApi.reducer,
  [generateImageApi.reducerPath]: generateImageApi.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
