import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import ImageVariation from '../components/screens/ImageVariation';
import ImageVariationResult from '../components/screens/ImageVariationResult';

export type ImageVariationStackParamList = {
  ImageVariation: undefined;
  ImageVariationResult: undefined;
};

const Stack = createStackNavigator<ImageVariationStackParamList>();
const TransitionScreenOptions = {
  ...TransitionPresets.SlideFromRightIOS,
};

const ImageVariationScreen = () => {
  return (
    <>
      <Stack.Navigator screenOptions={TransitionScreenOptions}>
        <Stack.Screen
          name="ImageVariation"
          component={ImageVariation}
          options={{title: 'Image Variation'}}
        />
        <Stack.Screen
          name="ImageVariationResult"
          component={ImageVariationResult}
          options={{
            title: 'Variation Result',
          }}
        />
      </Stack.Navigator>
    </>
  );
};

export default ImageVariationScreen;
