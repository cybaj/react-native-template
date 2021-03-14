import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {UserContextProvider} from '_user';
import RootNavigator from '_navigations';

const App = () => {
  return (
    <UserContextProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </UserContextProvider>
  );
};

export default App;
