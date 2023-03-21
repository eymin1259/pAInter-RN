import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Setting from './src/screens/Setting';
import Generate from './src/screens/Generate';
import Edit from './src/screens/Edit';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import {useSelector} from 'react-redux';
import {RootState} from './src/store/reducer';
import {useAppDispatch} from './src/store';
import {getUserFromStorage} from './src/thunks/encryptedStorageThunk';

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
  const isLoggedIn = useSelector(
    (state: RootState) => !!state.user.uid && !!state.user.email,
  );

  useEffect(() => {
    dispatch(getUserFromStorage());
  }, [dispatch]);

  return (
    <>
      {isLoggedIn ? (
        <Tab.Navigator>
          <Tab.Screen
            name="Generate"
            component={Generate}
            options={{title: 'Generate'}}
          />
          <Tab.Screen name="Edit" component={Edit} options={{title: 'Edit'}} />
          <Tab.Screen
            name="Setting"
            component={Setting}
            options={{title: 'Setting'}}
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
