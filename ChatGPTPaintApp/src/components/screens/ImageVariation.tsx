import React, {useState} from 'react';
import {LayoutChangeEvent} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ImageVariationStackParamList} from '../../screens/ImageVariationScreen';
import styled from '@emotion/native';
import PurpleButton from '../common/PurpleButton';
import ResourceUploadHeader from '../common/ResourceUploadHeader';

type ImageVariationProps = NativeStackScreenProps<
  ImageVariationStackParamList,
  'ImageVariation'
>;

const ImageVariation = ({navigation}: ImageVariationProps) => {
  const [parentHeight, setParentHeight] = useState(0);

  const onLayout = (event: LayoutChangeEvent) => {
    const {height} = event.nativeEvent.layout;
    setParentHeight(height);
  };

  return (
    <ImageVariationLayout onLayout={onLayout}>
      <ImageVariationContent height={parentHeight - 80}>
        <ResourceUploadHeader
          titleColor="black"
          fontSize="25px"
          paddingTop="20px"
          paddingBottom="10px">
          Upload Image
        </ResourceUploadHeader>
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
