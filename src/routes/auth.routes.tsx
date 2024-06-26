import React, {FunctionComponent} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignIn} from '../pages/SignIn';
import {SignUp} from '../pages/SingUp';

const Auth = createNativeStackNavigator();
export const AuthRoutes: FunctionComponent = () => {
  return (
    <Auth.Navigator
      initialRouteName="SignIn"
      screenOptions={{headerShown: false}}>
      <Auth.Screen name="SignIn" component={SignIn} />
      <Auth.Screen name="SignUp" component={SignUp} />
    </Auth.Navigator>
  );
};
