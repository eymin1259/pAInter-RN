import React, {useState} from 'react';
import {LayoutChangeEvent} from 'react-native';
import {TextEditStackParamList} from '../../screens/TextEditScreen';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import styled from '@emotion/native';
import ResourceUploadHeader from '../common/ResourceUploadHeader';
import PurpleButton from '../common/PurpleButton';

type TextEditProps = NativeStackScreenProps<TextEditStackParamList, 'TextEdit'>;

const TextEdit = ({navigation}: TextEditProps) => {
  const [parentHeight, setParentHeight] = useState(0);

  const onLayout = (event: LayoutChangeEvent) => {
    const {height} = event.nativeEvent.layout;
    setParentHeight(height);
  };

  return (
    <TextEditLayout onLayout={onLayout}>
      <TextEditContent height={parentHeight - 80}>
        <ResourceUploadHeader
          titleColor="black"
          fontSize="25px"
          paddingTop="20px"
          paddingBottom="10px">
          Upload Text
        </ResourceUploadHeader>
      </TextEditContent>
      <PurpleButton
        fontSize="20px"
        onPress={() => {
          navigation.navigate('TextEditResult');
        }}>
        Edit
      </PurpleButton>
    </TextEditLayout>
  );
};

const TextEditLayout = styled.View`
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
`;

interface TextEditContentProps {
  height: number;
}

const TextEditContent = styled.View`
  width: 100%;
  height: ${(props: TextEditContentProps) => {
    return `${props.height}px`;
  }};
  justify-content: flex-start;
  align-items: center;
`;

export default TextEdit;
