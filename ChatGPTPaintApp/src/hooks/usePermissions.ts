import {useEffect} from 'react';
import {Alert, Linking, Platform} from 'react-native';
import {check, PERMISSIONS, request, RESULTS} from 'react-native-permissions';

function usePermissions() {
  // 1.android
  useEffect(() => {
    if (Platform.OS !== 'android') {
      return;
    }
    // 1-1. camera
    check(PERMISSIONS.ANDROID.CAMERA)
      .then(result => {
        if (result === RESULTS.DENIED || result === RESULTS.GRANTED) {
          return request(PERMISSIONS.ANDROID.CAMERA);
        } else if (result === RESULTS.BLOCKED) {
          Alert.alert(
            'This app requires camera permissions to upload photos for editing.',
            'Please open the app settings screen and change it to "Allow"',
            [
              {
                text: 'confirm',
                onPress: () => Linking.openSettings(),
              },
              {
                text: 'cancel',
                onPress: () => console.log('No Pressed'),
                style: 'cancel',
              },
            ],
          );
        } else {
          console.log(result);
          console.log('camera invailable');
        }
      })
      .catch(console.error);

    // 1-2. read photo
    check(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE)
      .then(result => {
        if (result === RESULTS.DENIED || result === RESULTS.GRANTED) {
          return request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);
        } else if (result === RESULTS.BLOCKED) {
          Alert.alert(
            'This app requires photo permissions to upload photos for editing.',
            'Please open the app settings screen and change it to "Allow"',
            [
              {
                text: 'confirm',
                onPress: () => Linking.openSettings(),
              },
              {
                text: 'cancel',
                onPress: () => console.log('No Pressed'),
                style: 'cancel',
              },
            ],
          );
        } else {
          console.log(result);
          console.log('READ_EXTERNAL_STORAGE invailable');
        }
      })
      .catch(console.error);

    // 1-3. write photo
    check(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE)
      .then(result => {
        if (result === RESULTS.DENIED || result === RESULTS.GRANTED) {
          return request(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE);
        } else if (result === RESULTS.BLOCKED) {
          Alert.alert(
            'Permission is required to save edited text or photos.',
            'Please open the app settings screen and change it to "Allow"',
            [
              {
                text: 'confirm',
                onPress: () => Linking.openSettings(),
              },
              {
                text: 'cancel',
                onPress: () => console.log('No Pressed'),
                style: 'cancel',
              },
            ],
          );
        } else {
          console.log(result);
          console.log('WRITE_EXTERNAL_STORAGE invailable');
        }
      })
      .catch(console.error);
  }, []);

  // 2. ios
  useEffect(() => {
    if (Platform.OS === 'android') {
      return;
    }
    // 2-1. camera
    check(PERMISSIONS.IOS.CAMERA)
      .then(result => {
        if (
          result === RESULTS.DENIED ||
          result === RESULTS.LIMITED ||
          result === RESULTS.GRANTED
        ) {
          return request(PERMISSIONS.IOS.CAMERA);
        } else if (result === RESULTS.BLOCKED) {
          Alert.alert(
            'This app requires camera permissions to upload photos for editing.',
            'Please open the app settings screen and change it to "Allow"',
            [
              {
                text: 'confirm',
                onPress: () => Linking.openSettings(),
              },
              {
                text: 'cancel',
                onPress: () => console.log('No Pressed'),
                style: 'cancel',
              },
            ],
          );
        } else {
          console.log(result);
          console.log('camera invailable');
        }
      })
      .catch(console.error);

    // 2-1. photo library
    check(PERMISSIONS.IOS.PHOTO_LIBRARY)
      .then(result => {
        if (
          result === RESULTS.DENIED ||
          result === RESULTS.LIMITED ||
          result === RESULTS.GRANTED
        ) {
          return request(PERMISSIONS.IOS.PHOTO_LIBRARY);
        } else if (result === RESULTS.BLOCKED) {
          Alert.alert(
            'This app requires photo library permissions to upload photos for editing.',
            'Please open the app settings screen and change it to "Allow"',
            [
              {
                text: 'confirm',
                onPress: () => Linking.openSettings(),
              },
              {
                text: 'cancel',
                onPress: () => console.log('No Pressed'),
                style: 'cancel',
              },
            ],
          );
        } else {
          console.log(result);
          console.log('PHOTO_LIBRARY invailable');
        }
      })
      .catch(console.error);
  }, []);
}

export default usePermissions;
