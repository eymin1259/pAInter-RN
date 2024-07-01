import React, {useEffect, useState} from 'react';
import {Alert, LayoutChangeEvent} from 'react-native';
import styled from '@emotion/native';
import PreviewImage from '../common/PreviewImage';
import PurpleButton from '../common/PurpleButton';
import {useAppDispatch} from '../../store';
import {resetPhotoInfo} from '../../slices/photoSlice';
import {usePostPhotoMutation} from '../../hooks/api/usePhotoPost';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/reducer';

const ImageVariationResult = () => {
  const dispatch = useAppDispatch();
  const [parentLayout, setParentLayout] = useState({
    width: 0,
    height: 0,
  });

  const selectedImage = useSelector(
    (state: RootState) => state.photo.imageInfo,
  );

  const [postPhoto, {data: resultUri, isLoading, isError, error}] =
    usePostPhotoMutation();

  const onLayout = (event: LayoutChangeEvent) => {
    const {height, width} = event.nativeEvent.layout;
    setParentLayout({
      width,
      height,
    });
  };

  useEffect(() => {
    dispatch(resetPhotoInfo());
  }, [dispatch]);

  useEffect(() => {
    postPhoto(selectedImage);
  }, []);

  useEffect(() => {
    if (isError) {
      const errorMessage = error as string;
      Alert.alert('alert', errorMessage);
    }
  }, [isError, error]);

  return (
    <ImageVariationResultLayout onLayout={onLayout}>
      <VariationResultContent height={parentLayout.height - 100}>
        <PreviewImage
          imageSize={parentLayout.width * 0.8}
          isLoading={isLoading}
          imageUri={resultUri ?? ''}
        />
      </VariationResultContent>
      <PurpleButton
        fontSize="20px"
        isLoading={isLoading}
        onPress={() => {
          console.log('save photo ');
        }}>
        save !
      </PurpleButton>
    </ImageVariationResultLayout>
  );
};

const ImageVariationResultLayout = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

interface VariationResultContentProps {
  height: number;
}

const VariationResultContent = styled.View`
  width: 100%;
  height: ${(props: VariationResultContentProps) => {
    return `${props.height}px`;
  }};
  justify-content: center;
  align-items: center;
`;

export default ImageVariationResult;
