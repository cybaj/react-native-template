import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '_scenes/home';
import AboutScreen from '_scenes/about';

const AppNavigatorConfig = {
  initialRouteName: 'Home',
  header: null,
  headerMode: 'none',
};

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={AppNavigatorConfig.initialRouteName}
      header={AppNavigatorConfig.header}
      headerMode={AppNavigatorConfig.headerMode}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
    </Stack.Navigator>
  );
};
export default AppNavigator;
