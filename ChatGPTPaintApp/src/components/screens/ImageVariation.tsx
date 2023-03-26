import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ImageVariationStackParamList} from '../../screens/ImageVariationScreen';
import styled from '@emotion/native';

type ImageVariationProps = NativeStackScreenProps<
  ImageVariationStackParamList,
  'ImageVariation'
>;

const ImageVariation = ({navigation}: ImageVariationProps) => {
  return (
    <ImageVariationContainer>
      <Text>Image Variation</Text>
      <Pressable
        onPress={() => {
          navigation.navigate('ImageVariationResult');
        }}>
        <Text>go to result</Text>
      </Pressable>
    </ImageVariationContainer>
  );
};

const ImageVariationContainer = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: yellowgreen;
`;

export default ImageVariation;
