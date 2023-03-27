import React from 'react';
import styled from '@emotion/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ActivityIndicator, Text} from 'react-native';

interface PromptHeaderProps {
  width?: number;
  height?: number;
  placeholder?: string;
  onChangeText?: (event: string) => void;
  isLoading?: boolean;
  onPress?: () => void;
}

const PromptHeader = (props: PromptHeaderProps) => {
  return (
    <SearchHeaderLayout width={props.width} height={props.height}>
      <GeneratePrompt
        multiline={false}
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
      />
      <SearchButton disabled={props.isLoading} onPress={props.onPress}>
        <Text>
          {props.isLoading ? (
            <ActivityIndicator color="white" />
          ) : (
            <Ionicons name="brush" size={20} color="white" />
          )}
        </Text>
      </SearchButton>
    </SearchHeaderLayout>
  );
};

const GeneratePrompt = styled.TextInput`
  width: 70%;
  height: 50px;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 0 10px;
`;

const SearchButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 15%;
  height: 48px;
  background-color: purple;
  border-radius: 10px;
  margin-left: 10px;
`;

interface SearchHeaderLayoutProps {
  width?: number;
  height?: number;
}

const SearchHeaderLayout = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: ${(props: SearchHeaderLayoutProps) => {
    return props.width ? `${props.width}px` : '100%';
  }};
  height: ${(props: SearchHeaderLayoutProps) => {
    return props.height ? `${props.height}%` : '50px';
  }};
  margin-top: 20px;
`;

export default PromptHeader;
