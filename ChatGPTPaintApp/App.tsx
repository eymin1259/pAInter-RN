import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useState} from 'react';
import Profile from './src/pages/Profile';
import Generate from './src/pages/Generate';
import Edit from './src/pages/Edit';
import SignIn from './src/pages/SignIn';
import SignUp from './src/pages/SignUp';
import {Provider} from 'react-redux';
import store from './src/store';

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

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <Provider store={store}>
      <NavigationContainer>
        {isLoggedIn ? (
          <Tab.Navigator>
            <Tab.Screen
              name="Generate"
              component={Generate}
              options={{title: 'Generate'}}
            />
            <Tab.Screen
              name="Edit"
              component={Edit}
              options={{title: 'Edit'}}
            />
            <Tab.Screen
              name="Profile"
              component={Profile}
              options={{title: 'Profile'}}
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
      </NavigationContainer>
    </Provider>
  );
}

export default App;
