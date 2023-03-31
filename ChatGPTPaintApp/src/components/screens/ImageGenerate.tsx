import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Alert, LayoutChangeEvent, Keyboard} from 'react-native';
import styled from '@emotion/native';
import PurpleButton from '../common/PurpleButton';
import PreviewImage from '../common/PreviewImage';
import ViewShot from 'react-native-view-shot';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import PromptHeader from '../common/PromptHeader';
import {useImageGeneratioMutation} from '../../hooks/api/useImageGenerationMutation';

const ImageGenerate = () => {
  const [parentLayout, setParentLayout] = useState({
    width: 0,
    height: 0,
  });
  const [prompt, setPropmt] = useState('');
  const [generateImage, {data, isLoading, isError, error}] =
    useImageGeneratioMutation();

  const [saveLoading, setSaveLoading] = useState(false);
  const imageRef = useRef(null);

  const onLayout = (event: LayoutChangeEvent) => {
    const {height, width} = event.nativeEvent.layout;
    setParentLayout({
      width,
      height,
    });
  };

  useEffect(() => {
    if (isError) {
      const errorMessage = error as string;
      Alert.alert('alert', errorMessage);
    }
  }, [isError, error]);

  const onClickGenerate = useCallback(() => {
    if (!prompt) {
      return;
    }
    Keyboard.dismiss();
    generateImage(prompt);
  }, [prompt]);

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
      <PromptHeader
        width={parentLayout.width * 0.9}
        placeholder="Describe the image"
        onChangeText={e => setPropmt(e)}
        isLoading={isLoading}
        onPress={onClickGenerate}
      />
      <ViewShot
        ref={imageRef}
        options={{
          fileName: `${Date.now()}-generate`,
          format: 'png',
          quality: 1,
        }}>
        <PreviewImage
          imageSize={parentLayout.width * 0.8}
          imageUri={data?.url ?? ''}
          isLoading={isLoading}
        />
      </ViewShot>
      {data?.url && (
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

export default ImageGenerate;
