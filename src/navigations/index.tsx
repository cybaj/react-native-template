import React from 'react';
import AuthNavigator from './auth-navigator';
import AppNavigator from './app-navigator';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={'AuthNavigator'}>
      <Stack.Screen name={'AuthNavigator'} component={AuthNavigator} />
      <Stack.Screen name={'AppNavigator'} component={AppNavigator} />
    </Stack.Navigator>
  );
};
export default RootNavigator;
