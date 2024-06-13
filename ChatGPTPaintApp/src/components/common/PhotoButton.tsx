import React from 'react';
import styled from '@emotion/native';

type PhotoResource = 'camera' | 'gallery';

type PhotoButtonProps = {
  resource: PhotoResource;
};

const PhotoButton = ({resource}: PhotoButtonProps) => {
  const onPress = () => {
    if (resource === 'camera') {
      console.log('take photo');
    } else {
      console.log('pick photo from gallery');
    }
  };

  return (
    <PurplePressable onPress={onPress}>
      <ResourceText>{resource}</ResourceText>
    </PurplePressable>
  );
};

const PurplePressable = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 46px;
  background-color: purple;
  border-radius: 20px;
`;

const ResourceText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 17px;
`;

export default PhotoButton;
