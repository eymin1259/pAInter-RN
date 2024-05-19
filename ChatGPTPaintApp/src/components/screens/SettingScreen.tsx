import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {useAppDispatch} from '../../store';
import {removeUserFromStorage} from '../../thunks/encryptedStorageThunk';

const SettingScreen = () => {
  const dispatch = useAppDispatch();

  return (
    <View>
      <Text>setting</Text>
      <Pressable
        style={{backgroundColor: 'purple'}}
        onPress={() => {
          dispatch(removeUserFromStorage());
        }}>
        <Text>로그아웃</Text>
      </Pressable>
    </View>
  );
};

export default SettingScreen;
