import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ImageVariation from '../components/screens/ImageVariation';
import ImageVariationResult from '../components/screens/ImageVariationResult';

export type ImageVariationStackParamList = {
  ImageVariation: undefined;
  ImageVariationResult: undefined;
};

const Stack = createNativeStackNavigator<ImageVariationStackParamList>();

const ImageVariationScreen = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="ImageVariation"
          component={ImageVariation}
          options={{title: 'Image Variation'}}
        />
        <Stack.Screen
          name="ImageVariationResult"
          component={ImageVariationResult}
          options={{title: 'Variation Result'}}
        />
      </Stack.Navigator>
    </>
  );
};

export default ImageVariationScreen;
