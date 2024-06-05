import React from 'react';
import styled from '@emotion/native';
import {Text} from 'react-native';

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
      <Text style={{color: 'white', fontWeight: 'bold'}}>{resource}</Text>
    </PurplePressable>
  );
};

const PurplePressable = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 46px;
  background-color: purple;
  border-radius: 10px;
`;
export default PhotoButton;
