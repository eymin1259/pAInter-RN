import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  imageName: '',
  imageUri: '',
  imageType: '',
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
      state.imageName = action.payload.name;
      state.imageUri = action.payload.uri;
      state.imageType = action.payload.type;
    },
    resetPhotoInfo: state => {
      state.imageName = '';
      state.imageUri = '';
      state.imageType = '';
      state.previewUri = '';
    },
  },
});

export const {setPreviewUrl, setImageInfo, resetPhotoInfo} = photoSlice.actions;
export default photoSlice;
