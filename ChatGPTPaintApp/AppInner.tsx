import React, {useEffect, useMemo} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MyPageScreen from './src/screens/MyPageScreen';
import ImageVariationScreen from './src/screens/ImageVariationScreen';
import TextEditScreen from './src/screens/TextEditScreen';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import {useSelector} from 'react-redux';
import {RootState} from './src/store/reducer';
import {useAppDispatch} from './src/store';
import {getUserFromStorage} from './src/thunks/encryptedStorageThunk';
import SplashScreen from 'react-native-splash-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
            name="TextEditTab"
            component={TextEditScreen}
            options={{
              title: 'Text Edit',
              headerShown: false,
              tabBarIcon: ({color}) => {
                return <Ionicons name="pencil-sharp" size={20} color={color} />;
              },
              tabBarActiveTintColor: '#A700CF',
            }}
          />
          <Tab.Screen
            name="ImageVariationTab"
            component={ImageVariationScreen}
            options={{
              title: 'Image Variation',
              headerShown: false,
              tabBarIcon: ({color}) => {
                return <Ionicons name="image" size={20} color={color} />;
              },
              tabBarActiveTintColor: '#A700CF',
            }}
          />
          <Tab.Screen
            name="MyPageTab"
            component={MyPageScreen}
            options={{
              title: 'MyPage',
              tabBarIcon: ({color}) => {
                return <Ionicons name="person" size={20} color={color} />;
              },
              tabBarActiveTintColor: '#A700CF',
            }}
          />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="SignIn"
            component={SignInScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUpScreen}
            options={{headerShown: false, presentation: 'modal'}}
          />
        </Stack.Navigator>
      )}
    </>
  );
};

export default AppInner;
