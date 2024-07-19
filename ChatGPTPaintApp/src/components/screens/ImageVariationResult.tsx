import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Alert, LayoutChangeEvent} from 'react-native';
import styled from '@emotion/native';
import PreviewImage from '../common/PreviewImage';
import PurpleButton from '../common/PurpleButton';
import {useAppDispatch} from '../../store';
import {resetPhotoInfo} from '../../slices/photoSlice';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/reducer';
import ViewShot from 'react-native-view-shot';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import {useImageVariationMutation} from '../../hooks/api/useImageVariationMutation';

const ImageVariationResult = () => {
  const dispatch = useAppDispatch();
  const [parentLayout, setParentLayout] = useState({
    width: 0,
    height: 0,
  });
  const imageRef = useRef(null);
  const selectedImage = useSelector(
    (state: RootState) => state.photo.imageInfo,
  );
  const [saveLoading, setSaveLoading] = useState(false);
  const [imageVariation, {data, isLoading, isError, error}] =
    useImageVariationMutation();

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
    imageVariation(selectedImage);
  }, []);

  useEffect(() => {
    if (isError) {
      const errorMessage = error as string;
      Alert.alert('alert', errorMessage);
    }
  }, [isError, error]);

  const onClickSaveImage = useCallback(async () => {
    if (saveLoading || imageRef.current === null) {
      return;
    }
    setSaveLoading(true);
    const captureUri = await imageRef.current.capture();
    await CameraRoll.save(captureUri, {
      type: 'photo',
    });
    setSaveLoading(false);
    Alert.alert('The photo has been saved');
  }, [imageRef, saveLoading]);

  return (
    <ImageVariationResultLayout onLayout={onLayout}>
      <VariationResultContent height={parentLayout.height - 100}>
        <ViewShot
          ref={imageRef}
          options={{
            fileName: `${Date.now()}-variation`,
            format: 'png',
            quality: 1,
          }}>
          <PreviewImage
            imageSize={parentLayout.width * 0.8}
            isLoading={isLoading}
            imageUri={data?.url ?? ''}
          />
        </ViewShot>
      </VariationResultContent>
      <PurpleButton
        fontSize="20px"
        isLoading={isLoading || saveLoading}
        onPress={onClickSaveImage}>
        Save !
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
