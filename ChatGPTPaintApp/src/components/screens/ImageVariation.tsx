import React, {useEffect, useState} from 'react';
import {LayoutChangeEvent} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ImageVariationStackParamList} from '../../screens/ImageVariationScreen';
import styled from '@emotion/native';
import PurpleButton from '../common/PurpleButton';
import ResourceUploadHeader from '../common/ResourceUploadHeader';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/reducer';
import {useAppDispatch} from '../../store';
import {resetPhotoInfo} from '../../slices/photoSlice';
import PreviewImage from '../common/PreviewImage';

type ImageVariationProps = NativeStackScreenProps<
  ImageVariationStackParamList,
  'ImageVariation'
>;

const ImageVariation = ({navigation}: ImageVariationProps) => {
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

  const previewSrc = useSelector((state: RootState) => {
    return state.photo.previewUri;
  });

  useEffect(() => {
    dispatch(resetPhotoInfo());
  }, [dispatch]);

  return (
    <ImageVariationLayout onLayout={onLayout}>
      <ImageVariationContent height={parentLayout.height - 80}>
        <ResourceUploadHeader
          titleColor="black"
          fontSize="25px"
          paddingTop="20px"
          paddingBottom="10px">
          Upload Image
        </ResourceUploadHeader>
        <PreviewImage
          imageSize={parentLayout.width * 0.8}
          imageUri={previewSrc}
        />
      </ImageVariationContent>
      <PurpleButton
        fontSize="20px"
        onPress={() => {
          navigation.navigate('ImageVariationResult');
        }}>
        Variation
      </PurpleButton>
    </ImageVariationLayout>
  );
};

const ImageVariationLayout = styled.View`
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
`;

interface ImageVariationContentProps {
  height: number;
}

const ImageVariationContent = styled.View`
  width: 100%;
  height: ${(props: ImageVariationContentProps) => {
    return `${props.height}px`;
  }};
  justify-content: flex-start;
  align-items: center;
`;

export default ImageVariation;
