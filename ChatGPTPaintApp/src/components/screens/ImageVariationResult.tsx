import React, {useEffect, useState} from 'react';
import {LayoutChangeEvent} from 'react-native';
import styled from '@emotion/native';
import PreviewImage from '../common/PreviewImage';
import PurpleButton from '../common/PurpleButton';
import {useAppDispatch} from '../../store';
import {resetPhotoInfo} from '../../slices/photoSlice';

const ImageVariationResult = () => {
  const dispatch = useAppDispatch();
  const [parentLayout, setParentLayout] = useState({
    width: 0,
    height: 0,
  });

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

  return (
    <ImageVariationResultLayout onLayout={onLayout}>
      <VariationResultContent height={parentLayout.height - 100}>
        <PreviewImage
          imageSize={parentLayout.width * 0.8}
          isLoading={true}
          imageUri=""
        />
      </VariationResultContent>
      <PurpleButton
        fontSize="20px"
        isLoading={true}
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
