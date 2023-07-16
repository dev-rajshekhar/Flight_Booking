import React, {useState, useEffect} from 'react';
import FlightListScreen from '../component/FlightListScreen';
import FlightResponse from '../data/FlightResponse';
import {useNavigation} from '@react-navigation/native';
import useApi from '../hooks/useHook';

const FlightListContainer = () => {
  const [filteredFlights, setFilteredFlights] = useState<FlightResponse[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    flightFilter: '',
    sortOption: '',
  });

  const {
    loading,
    error,
    data: flights,
  } = useApi<FlightResponse[]>('https://api.npoint.io/aaac66e0ce2d6db970be');

  useEffect(() => {
    if (flights) {
      setFilteredFlights(flights);
    }
  }, [flights]);

  const handleFilterApply = (filters: {
    flightFilter: string;
    sortOption: string;
  }) => {
    setSelectedFilters(filters);
    setIsModalOpen(false);
    applyFilters(filters);
  };

  const handleFilterReset = () => {
    setSelectedFilters({flightFilter: '', sortOption: ''});
    setFilteredFlights(flights || []);
  };

  const parseDuration = (duration: string) => {
    const [hours, minutes] = duration.split(' ')[0].split('h');
    const parsedHours = parseInt(hours, 10) || 0;
    const parsedMinutes = parseInt(minutes, 10) || 0;
    return parsedHours * 60 + parsedMinutes;
  };

  const applyFilters = (filters: {
    flightFilter: string;
    sortOption: string;
  }) => {
    let filteredData = flights || [];

    if (filters.flightFilter !== '') {
      filteredData = filteredData.filter(
        flight =>
          flight.displayData.airlines[0].airlineName === filters.flightFilter,
      );
    }

    switch (filters.sortOption) {
      case 'PriceLow':
        filteredData.sort((a, b) => a.fare - b.fare);
        break;
      case 'PriceHigh':
        filteredData.sort((a, b) => b.fare - a.fare);
        break;
      case 'DurationLow':
        filteredData.sort(
          (a, b) =>
            parseDuration(a.displayData.totalDuration) -
            parseDuration(b.displayData.totalDuration),
        );
        break;
      case 'DurationHigh':
        filteredData.sort(
          (a, b) =>
            parseDuration(b.displayData.totalDuration) -
            parseDuration(a.displayData.totalDuration),
        );
        break;
      default:
        break;
    }

    setFilteredFlights(filteredData);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const fetchFlightName = () => {
    const flightNamesSet = new Set<string>();
    flights?.forEach(flight => {
      const airlineName = flight.displayData.airlines[0].airlineName;
      flightNamesSet.add(airlineName);
    });
    return Array.from(flightNamesSet);
  };

  const navigation = useNavigation();

  const handleFlightClicked = (item: FlightResponse) => {
    navigation.navigate('Main', {selectedFlight: item});
  };

  return (
    <FlightListScreen
      loading={false}
      error={error}
      flights={filteredFlights}
      flightNames={fetchFlightName()}
      filteredFlights={filteredFlights}
      selectedFilters={selectedFilters}
      onFilterApply={handleFilterApply}
      onFilterReset={handleFilterReset}
      onOpenModal={handleOpenModal}
      onCloseModal={handleCloseModal}
      isModelOpen={isModalOpen}
      onFlightItemClicked={handleFlightClicked}
    />
  );
};

export default FlightListContainer;
