import React from 'react';
import styled from '@emotion/native';
import {ActivityIndicator} from 'react-native';

interface PreviewImageProps {
  imageSize: number;
  imageUri: string;
  isLoading?: boolean;
}

const PreviewImage = ({imageSize, imageUri, isLoading}: PreviewImageProps) => {
  return (
    <PreviewImageContainer size={imageSize}>
      {isLoading ? (
        <ActivityIndicator color="purple" />
      ) : (
        imageUri && <PreviewBox source={{uri: imageUri}} />
      )}
    </PreviewImageContainer>
  );
};

interface ImageContainerProps {
  size: number;
}

const PreviewImageContainer = styled.View`
  justify-content: center;
  align-items: center;
  background-color: #f7f7f7;
  width: ${(props: ImageContainerProps) => {
    return `${props.size}px`;
  }};
  height: ${(props: ImageContainerProps) => {
    return `${props.size}px`;
  }};
  margin-top: 30px;
`;

const PreviewBox = styled.Image`
  width: 100%;
  height: 100%;
`;

export default PreviewImage;
