import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Auth from '../../screens/Auth';
import Login from '../../screens/Auth/Login';
const { Navigator, Screen } = createNativeStackNavigator();

const HomeStack = () => (
  <Navigator screenOptions={{ headerShown: false }}>
    <Screen name="Login" component={Login} />
    <Screen name="Auth" component={Auth} />
  </Navigator>
);

export default HomeStack;
