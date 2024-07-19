import {combineReducers} from 'redux';
import {useFirebaseAuth} from '../hooks/api/useFirebaseAuth';
import {imageGenerationApi} from '../hooks/api/useImageGenerationMutation';
import {imageVariationApi} from '../hooks/api/useImageVariationMutation';
import dialogSlice from '../slices/dialogSlice';
import photoSlice from '../slices/photoSlice';
import userSlice from '../slices/userSlice';

const rootReducer = combineReducers({
  user: userSlice.reducer,
  dialog: dialogSlice.reducer,
  photo: photoSlice.reducer,
  [useFirebaseAuth.reducerPath]: useFirebaseAuth.reducer,
  [imageVariationApi.reducerPath]: imageVariationApi.reducer,
  [imageGenerationApi.reducerPath]: imageGenerationApi.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
