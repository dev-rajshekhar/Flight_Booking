import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import MainScreen from '../src/container/MainScreen';
const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

describe('MainScreen', () => {
  test('component is rendered', () => {
    const {getByTestId} = render(<MainScreen />);
    const mainScreen = getByTestId('from-input');
    expect(mainScreen).toBeDefined();
  });

  test('fields are empty initially', () => {
    const {getByTestId} = render(<MainScreen />);
    const fromInput = getByTestId('from-input') as any;
    const toInput = getByTestId('to-input') as any;
    expect(fromInput.props.value).toBe('');
    expect(toInput.props.value).toBe('');
  });

  test('calendar button is clicked', () => {
    const {getByTestId} = render(<MainScreen />);
    const calendarButton = getByTestId('calendar-button');
    fireEvent.press(calendarButton);
  });

  test('validation for empty "from" and empty "to"', () => {
    const {getByTestId} = render(<MainScreen />);
    const submitButton = getByTestId('submit-button');
    fireEvent.press(submitButton);
  });
});
