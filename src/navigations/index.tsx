import React from 'react';
import AuthNavigator from './auth-navigator';
import AppNavigator from './app-navigator';
import {createStackNavigator} from '@react-navigation/stack';

const RootNavigatorConfig = {
  initialRouteName: 'AuthNavigator',
  header: null,
  headerMode: 'none',
};

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={RootNavigatorConfig.initialRouteName}
      header={RootNavigatorConfig.header}
      headerMode={RootNavigatorConfig.headerMode}>
      <Stack.Screen name={'AuthNavigator'} component={AuthNavigator} />
      <Stack.Screen name={'AppNavigator'} component={AppNavigator} />
    </Stack.Navigator>
  );
};
export default RootNavigator;
