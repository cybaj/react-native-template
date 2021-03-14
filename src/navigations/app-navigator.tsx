import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '_scenes/home';
import AboutScreen from '_scenes/about';

const AuthNavigatorConfig = {
  initialRouteName: 'Home',
  header: null,
  headerMode: 'none',
};

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={AuthNavigatorConfig.initialRouteName}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
    </Stack.Navigator>
  );
};
export default AuthNavigator;
