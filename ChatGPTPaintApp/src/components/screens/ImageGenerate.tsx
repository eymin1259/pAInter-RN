import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  LayoutChangeEvent,
  Text,
  Keyboard,
} from 'react-native';
import styled from '@emotion/native';
import PurpleButton from '../common/PurpleButton';
import PreviewImage from '../common/PreviewImage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useGenerateImageMutation} from '../../hooks/api/useGenerateImage';
import ViewShot from 'react-native-view-shot';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';

const ImageGenerate = () => {
  const [parentLayout, setParentLayout] = useState({
    width: 0,
    height: 0,
  });
  const [prompt, setPropmt] = useState('');
  const [generateImage, {data: resultUri, isLoading, isError, error}] =
    useGenerateImageMutation();
  const [saveLoading, setSaveLoading] = useState(false);
  const imageRef = useRef(null);

  const onLayout = (event: LayoutChangeEvent) => {
    const {height, width} = event.nativeEvent.layout;
    setParentLayout({
      width,
      height,
    });
  };

  const onClickGenerate = useCallback(() => {
    if (!prompt) {
      return;
    }
    Keyboard.dismiss();
    generateImage(prompt);
  }, [prompt]);

  useEffect(() => {
    if (isError) {
      const errorMessage = error as string;
      Alert.alert('alert', errorMessage);
    }
  }, [isError, error]);

  const onClickSaveImage = useCallback(async () => {
    if (saveLoading || imageRef.current === null) {
      return;
    }
    setSaveLoading(true);
    const captureUri = await imageRef.current.capture();
    await CameraRoll.save(captureUri, {
      type: 'photo',
    });
    setSaveLoading(false);
    Alert.alert('The photo has been saved');
  }, [imageRef, saveLoading]);

  return (
    <ImageGenerateLayout onLayout={onLayout}>
      <SearchHeader>
        <GeneratePrompt
          width={parentLayout.width * 0.65}
          multiline={false}
          placeholder="Describe the image"
          onChangeText={e => setPropmt(e)}
        />
        <SearchButton disabled={isLoading} onPress={onClickGenerate}>
          <Text>
            {isLoading ? (
              <ActivityIndicator color="white" />
            ) : (
              <Ionicons name="brush" size={20} color="white" />
            )}
          </Text>
        </SearchButton>
      </SearchHeader>
      <ViewShot
        ref={imageRef}
        options={{
          fileName: `${Date.now()}-gerate`,
          format: 'png',
          quality: 1,
        }}>
        <PreviewImage
          imageSize={parentLayout.width * 0.8}
          imageUri={resultUri ?? ''}
          isLoading={isLoading}
        />
      </ViewShot>
      {resultUri && (
        <PurpleButton
          isLoading={isLoading || saveLoading}
          onPress={onClickSaveImage}
          fontSize="20px">
          Save !
        </PurpleButton>
      )}
    </ImageGenerateLayout>
  );
};

const ImageGenerateLayout = styled.View`
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
`;

interface GeneratePromptProps {
  width: number;
}

const GeneratePrompt = styled.TextInput`
  width: ${(props: GeneratePromptProps) => {
    return `${props.width}px`;
  }};
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

const SearchHeader = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  margin-top: 20px;
`;

export default ImageGenerate;
