import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import TextEdit from '../components/screens/TextEdit';
import TextEditResult from '../components/screens/TextEditResult';

export type TextEditStackParamList = {
  TextEdit: undefined;
  TextEditResult: undefined;
};

const Stack = createStackNavigator<TextEditStackParamList>();
const TransitionScreenOptions = {
  ...TransitionPresets.SlideFromRightIOS,
};

const TextEditScreen = () => {
  return (
    <>
      <Stack.Navigator screenOptions={TransitionScreenOptions}>
        <Stack.Screen
          name="TextEdit"
          component={TextEdit}
          options={{title: 'Text Edit'}}
        />
        <Stack.Screen
          name="TextEditResult"
          component={TextEditResult}
          options={{title: 'Edit Result'}}
        />
      </Stack.Navigator>
    </>
  );
};

export default TextEditScreen;
