/* eslint-disable prettier/prettier */
import React, { useReducer, useMemo, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStackScreen from './AuthNavigator';
import AppNavigator from './AppNavigator';
import { AuthContext } from '../context/authContext.js';
import Box from '../components/Box';
import Loader from '../components/Loader';
const AppStack = createNativeStackNavigator();

const initialAuthState = {
  isLoading: true,
  email: null,
};



const Route = () => {
  const authReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          email: action.email,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          email: action.email,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          email: null,
          isLoading: false,
        };
    }
  };

  const [authState, dispatch] = useReducer(authReducer, initialAuthState);
  const authContext = useMemo(
    () => ({
      signIn: async (values) => {
        try {
          const email = values.email;
          const profile = JSON.stringify(values);
          await AsyncStorage.setItem('profile', profile);
          await AsyncStorage.setItem('email', email);
          dispatch({ type: 'LOGIN', email });
        } catch (e) {
          console.log('error in signIn', e);
        }
      },
      signOut: async () => {
        await AsyncStorage.clear();
        dispatch({ type: 'LOGOUT' });
      },
    }),
    [],
  );

  const retrieveToken = async () => {
    let email = null;
    try {
      email = await AsyncStorage.getItem('email');
      dispatch({ type: 'RETRIEVE_TOKEN', email });
    } catch (error) {
      console.log('error retrieving token', error);
    }
  };

  useEffect(() => {
    SplashScreen.hide();
    retrieveToken();
  }, []);

  if (authState.isLoading) {
    return (
      <Box flex>
        <Loader />
      </Box>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <AppStack.Navigator screenOptions={{ headerShown: false }}>
          {authState.email ? (
            <AppStack.Screen component={AppNavigator} name="AppNavigator" />
          ) : (
            <AppStack.Screen
              name="AuthStackScreen"
              component={AuthStackScreen}
              screenOptions={{ headerShown: false }}
            />
          )
          }
        </AppStack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default Route;
