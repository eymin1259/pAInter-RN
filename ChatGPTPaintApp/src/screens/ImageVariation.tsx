import React from 'react';
import ImageVariationScreen from '../components/screens/ImageVariationScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ImageVariationResult from '../components/screens/ImageVariationResult';

export type ImageVariationStackParamList = {
  ImageVariation: undefined;
  ImageVariationResult: undefined;
};

const Stack = createNativeStackNavigator<ImageVariationStackParamList>();

const ImageVariation = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen name="ImageVariation" component={ImageVariationScreen} />
        <Stack.Screen
          name="ImageVariationResult"
          component={ImageVariationResult}
        />
      </Stack.Navigator>
    </>
  );
};

export default ImageVariation;
