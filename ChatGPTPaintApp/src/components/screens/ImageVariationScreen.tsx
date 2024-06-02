import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ImageVariationStackParamList} from '../../screens/ImageVariation';

type ImageVariationProps = NativeStackScreenProps<
  ImageVariationStackParamList,
  'ImageVariation'
>;

const ImageVariationScreen = ({navigation}: ImageVariationProps) => {
  return (
    <View>
      <Text>Image Variation Screen</Text>
      <Pressable
        onPress={() => {
          navigation.navigate('ImageVariationResult');
        }}>
        <Text>go to result</Text>
      </Pressable>
    </View>
  );
};

export default ImageVariationScreen;
