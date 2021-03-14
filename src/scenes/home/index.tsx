import React from 'react';
import {SafeAreaView, Text, TouchableHighlight} from 'react-native';

const HomeScreen = ({navigation}: any) => (
  <SafeAreaView>
    <Text>Screen: Home</Text>

    <TouchableHighlight
      onPress={() =>
        navigation.navigate('AuthNavigator', {
          screen: 'Login',
        })
      }>
      <Text>Go to Login</Text>
    </TouchableHighlight>
  </SafeAreaView>
);

export default HomeScreen;
