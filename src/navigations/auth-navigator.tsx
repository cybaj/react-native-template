import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '_scenes/login';

const AuthNavigatorConfig = {
  initialRouteName: 'Login',
  header: null,
  headerMode: 'none',
};

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={AuthNavigatorConfig.initialRouteName}
      header={AuthNavigatorConfig.header}
      headerMode={AuthNavigatorConfig.headerMode}>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};
export default AuthNavigator;
