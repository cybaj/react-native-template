import React from 'react';
import {SafeAreaView, Text, TouchableHighlight} from 'react-native';

const LoginScreen = ({navigation}: any) => (
  <SafeAreaView>
    <Text>Screen: Login</Text>

    <TouchableHighlight
      onPress={() =>
        navigation.navigate('AppNavigator', {
          screen: 'Home',
        })
      }>
      <Text>Go to home</Text>
    </TouchableHighlight>
  </SafeAreaView>
);

export default LoginScreen;
