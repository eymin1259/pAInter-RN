import React, {useEffect, useMemo} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MyPage from './src/screens/MyPage';
import ImageVariation from './src/screens/ImageVariation';
import TextEdit from './src/screens/TextEdit';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import {useSelector} from 'react-redux';
import {RootState} from './src/store/reducer';
import {useAppDispatch} from './src/store';
import {getUserFromStorage} from './src/thunks/encryptedStorageThunk';
import SplashScreen from 'react-native-splash-screen';

export type LoggedInParamList = {
  Generate: undefined;
  Edit: undefined;
  MyPage: undefined;
};

export type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();

const AppInner = () => {
  const dispatch = useAppDispatch();
  const uid = useSelector((state: RootState) => state.user.uid);
  const email = useSelector((state: RootState) => state.user.email);
  const isLoggedIn = useMemo(() => {
    return !!uid && !!email;
  }, [uid, email]);

  useEffect(() => {
    dispatch(getUserFromStorage());
  }, [dispatch]);

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);

  return (
    <>
      {isLoggedIn ? (
        <Tab.Navigator sceneContainerStyle={{backgroundColor: 'white'}}>
          <Tab.Screen
            name="TextEdit"
            component={TextEdit}
            options={{title: 'Text Edit', headerShown: false}}
          />
          <Tab.Screen
            name="ImageVariation"
            component={ImageVariation}
            options={{title: 'Image Variation', headerShown: false}}
          />
          <Tab.Screen
            name="MyPage"
            component={MyPage}
            options={{title: 'MyPage'}}
          />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{headerShown: false, presentation: 'modal'}}
          />
        </Stack.Navigator>
      )}
    </>
  );
};

export default AppInner;
