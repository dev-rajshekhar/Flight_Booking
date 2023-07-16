/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import MainScreen from './src/container/MainScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import FlightListContainer from './src/container/FlightListContainer';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FlightSearchResults"
          component={FlightListContainer}
          options={{headerTitle: 'See Flights'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
