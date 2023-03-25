import React from 'react';
import TextEditScreen from '../components/screens/TextEditScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TextEditResult from '../components/screens/TextEditResult';

export type TextEditStackParamList = {
  TextEdit: undefined;
  TextEditResult: undefined;
};

const Stack = createNativeStackNavigator<TextEditStackParamList>();

const TextEdit = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen name="TextEdit" component={TextEditScreen} />
        <Stack.Screen name="TextEditResult" component={TextEditResult} />
      </Stack.Navigator>
    </>
  );
};

export default TextEdit;
