import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import FlightListScreen from '../src/component/FlightListScreen';

const FlightResponseMock = [
  {
    id: '1',
    fare: 12015,
    displayData: {
      source: {
        airport: [
          {
            cityCode: 'BOM',
            cityName: 'Mumbai',
            terminal: '2',
            airportCode: 'BOM',
            airportName: 'Mumbai',
            countryCode: 'IN',
            countryName: 'India',
          },
        ],
        depTime: '2023-07-18T01:41:13.839116',
      },
      airlines: [
        {
          airlineCode: 'AEC',
          airlineName: 'Vistara',
          flightNumber: '09381',
        },
      ],
      stopInfo: 'Non stop',
      destination: {
        airport: [
          {
            cityCode: 'DEL',
            cityName: 'Delhi',
            terminal: '3',
            airportCode: 'DEL',
            airportName: 'Indira Gandhi Airport',
            countryCode: 'IN',
            countryName: 'India',
          },
        ],
        arrTime: '2023-08-01T01:41:13.839137',
      },
      totalDuration: '3h 54m',
    },
  },
];
jest.mock('../src/component/FlightListScreen', () => ({
  __esModule: true,
  default: jest.fn(() => null),
}));
const mockResponse = {
  flights: FlightResponseMock,
  flightNames: [],
  filteredFlights: FlightResponseMock,
  selectedFilters: {flightFilter: '', sortOption: ''},
  onFilterApply: () => {},
  onFilterReset: () => {},
  onOpenModal: () => {},
  onCloseModal: () => {},
  isModelOpen: false,
};
describe('Should render FlightList Snapshot', () => {
  it('Should match snapshot', () => {
    const component = render(<FlightListScreen {...mockResponse} />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('Should click on Sort button', () => {
    const sortButton = jest.fn();
    const component = render(<FlightListScreen {...mockResponse} />);
    const buttonComponent = component.getByTestId('sort-button');
    expect(buttonComponent).toBeTruthy();
    fireEvent.press(buttonComponent);
    expect(sortButton).toHaveBeenCalledTimes(1);
  });
});
