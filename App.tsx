import 'react-native-gesture-handler';
import React from 'react';
import {PaperProvider} from 'react-native-paper';
import {Provider as StoreProvider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Routes from './app/routes';
import { store } from './app/redux/store';

const Stack = createNativeStackNavigator();

// testing key
// sk_test_51NiwrbSIsOqzBPzRmuiCQUt5hZypWPSEoFKVWAJekEaZkEqaXF62DzUyT5Z1LWLRVJlH5XcERO6Nn6p02VMpJSuZ00v2wBjhr8

const App = () => {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <SafeAreaProvider>
          <Routes />
        </SafeAreaProvider>
      </PaperProvider>
    </StoreProvider>
  );
};

export default App;
