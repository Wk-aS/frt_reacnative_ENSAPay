import React from 'react';
import { createAppContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import Main from '../screens/Main';
import Signup from '../screens/Signup';
import { Image } from 'react-native';
import { theme } from '../constants';

const Stack = createStackNavigator();
/* {
    Login,
    Main,
    Signup,
  },
  {
    defaultNavigatorOption: {
      headerStyle: {},
      headerBackImage: <Image />,
      headerBackTitle: null,
      headerLeftContainerStyle: {},
      headerRightContainerStyle: {},
    },
  } */

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Main"
        component={Main}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
export default MyStack;
