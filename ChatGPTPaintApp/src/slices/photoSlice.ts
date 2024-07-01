import {createSlice} from '@reduxjs/toolkit';
import {ImageForm} from '../hooks/api/usePhotoPost';

const initialState: {imageInfo: ImageForm; previewUri: string} = {
  imageInfo: {
    name: '',
    uri: '',
    type: '',
  },
  previewUri: '',
};

const photoSlice = createSlice({
  name: 'photo',
  initialState,
  reducers: {
    setPreviewUrl: (state, action) => {
      state.previewUri = action.payload.uri;
    },
    setImageInfo: (state, action) => {
      state.imageInfo = {
        name: action.payload.name,
        uri: action.payload.uri,
        type: action.payload.type,
      };
    },
    resetPhotoInfo: state => {
      state.imageInfo = {
        name: '',
        uri: '',
        type: '',
      };
      state.previewUri = '';
    },
  },
});

export const {setPreviewUrl, setImageInfo, resetPhotoInfo} = photoSlice.actions;
export default photoSlice;
