import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ImageVariationStackParamList} from '../../screens/ImageVariationScreen';

type ImageVariationProps = NativeStackScreenProps<
  ImageVariationStackParamList,
  'ImageVariation'
>;

const ImageVariation = ({navigation}: ImageVariationProps) => {
  return (
    <View>
      <Text>Image Variation</Text>
      <Pressable
        onPress={() => {
          navigation.navigate('ImageVariationResult');
        }}>
        <Text>go to result</Text>
      </Pressable>
    </View>
  );
};

export default ImageVariation;
