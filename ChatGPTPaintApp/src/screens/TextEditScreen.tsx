import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TextEdit from '../components/screens/TextEdit';
import TextEditResult from '../components/screens/TextEditResult';

export type TextEditStackParamList = {
  TextEdit: undefined;
  TextEditResult: undefined;
};

const Stack = createNativeStackNavigator<TextEditStackParamList>();

const TextEditScreen = () => {
  return (
    <>
      <Stack.Navigator>
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
