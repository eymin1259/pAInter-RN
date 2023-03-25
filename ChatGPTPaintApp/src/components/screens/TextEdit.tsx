import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {TextEditStackParamList} from '../../screens/TextEditScreen';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type TextEditProps = NativeStackScreenProps<TextEditStackParamList, 'TextEdit'>;

const TextEdit = ({navigation}: TextEditProps) => {
  return (
    <View>
      <Text>text edit</Text>
      <Pressable
        onPress={() => {
          navigation.navigate('TextEditResult');
        }}>
        <Text>go to result</Text>
      </Pressable>
    </View>
  );
};

export default TextEdit;
