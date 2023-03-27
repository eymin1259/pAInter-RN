import React, {useCallback} from 'react';
import styled from '@emotion/native';
import ImagePicker from 'react-native-image-crop-picker';
import ImageResizer from 'react-native-image-resizer';
import {setImageInfo, setPreviewUrl} from '../../slices/photoSlice';
import {useAppDispatch} from '../../store';

type PhotoResource = 'camera' | 'gallery';

type PhotoButtonProps = {
  resource: PhotoResource;
};

const PhotoButton = ({resource}: PhotoButtonProps) => {
  const dispatch = useAppDispatch();

  const onResponse = useCallback(
    async (response: any) => {
      await dispatch(
        setPreviewUrl({uri: `data:${response.mime};base64,${response.data}`}),
      );
      return ImageResizer.createResizedImage(
        response.path,
        256,
        256,
        'PNG',
        70,
        0,
      ).then(async res => {
        await dispatch(
          setImageInfo({
            uri: res.uri,
            name: res.name,
            type: response.mime,
          }),
        );
      });
    },
    [dispatch],
  );

  const onTakePhoto = useCallback(() => {
    return ImagePicker.openCamera({
      cropping: true,
      includeBase64: true,
      includeExif: true,
      width: 256,
      height: 256,
    })
      .then(onResponse)
      .catch(console.log);
  }, [onResponse]);

  const onSelectPhoto = useCallback(() => {
    return ImagePicker.openPicker({
      cropping: true,
      includeBase64: true,
      includeExif: true,
      mediaType: 'photo',
      width: 256,
      height: 256,
    })
      .then(onResponse)
      .catch(console.log);
  }, [onResponse]);

  const onPress = () => {
    if (resource === 'camera') {
      onTakePhoto();
    } else {
      onSelectPhoto();
    }
  };

  return (
    <PurplePressable onPress={onPress}>
      <ResourceText>{resource}</ResourceText>
    </PurplePressable>
  );
};

const PurplePressable = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 46px;
  background-color: purple;
  border-radius: 20px;
`;

const ResourceText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 17px;
`;

export default PhotoButton;
