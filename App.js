/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import AppNavigation from './src/navigation/AppNavigation';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor="#701CA7" barStyle="light-content" />
      <AppNavigation />
    </SafeAreaView>
  );
};


export default App;
