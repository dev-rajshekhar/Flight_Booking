/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

import {it} from '@jest/globals';

import renderer from 'react-test-renderer';
jest.mock('@react-navigation/native-stack', () => ({
  createNativeStackNavigator: jest.fn(),
}));

// Import the component that uses createNativeStackNavigator
it('renders correctly', () => {
  renderer.create(<App />);
});
