import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import FlightResponse from '../data/FlightResponse';
import FilterScreen from './FilterScreen';
import FlightItem from './FlightItem';
import {flightResultContainerStyles as styles} from '../style/flight_container';
import colors from '../constants/color';

interface FlightListComponentProps {
  flights: FlightResponse[];
  flightNames: string[];
  selectedFilters: {flightFilter: string; sortOption: string};
  onFilterApply: (selectedFilters: {
    flightFilter: string;
    sortOption: string;
  }) => void;
  onFilterReset: () => void;
  onOpenModal: () => void;
  onCloseModal: () => void;
  filteredFlights: FlightResponse[];
  isModelOpen: boolean;
  onFlightItemClicked: (item: FlightResponse) => void;
  loading: boolean;
  error: any;
}

const FlightListScreen: React.FC<FlightListComponentProps> = ({
  flights,
  selectedFilters,
  onFilterApply,
  onFilterReset,
  onOpenModal,
  onCloseModal,
  flightNames,
  isModelOpen,
  onFlightItemClicked,
  loading,
  error,
}) => {
  const renderFlightItem = ({item}: {item: FlightResponse}) => {
    return (
      <FlightItem
        item={item}
        onFlightItemClicked={onFlightItemClicked}
        isEnabled={true}
      />
    );
  };
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.negativeButtonColor} />
      </View>
    );
  }
  if (error) {
    return (
      <View style={styles.loadingContainer}>
        <Text>{error}</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity
        testID={'sort-button'}
        style={styles.filterButton}
        onPress={onOpenModal}>
        <Text style={styles.filterButtonText}>Filter & Sort</Text>
      </TouchableOpacity>

      <FlatList
        testID="list"
        data={flights}
        renderItem={renderFlightItem}
        ListEmptyComponent={
          <View style={styles.loadingContainer}>
            <Text>No Records Found</Text>
          </View>
        }
        keyExtractor={item => item.id}
      />
      <Modal visible={isModelOpen} animationType="slide">
        <FilterScreen
          flightName={flightNames}
          selectedFilters={selectedFilters}
          onFilterApply={onFilterApply}
          onFilterReset={onFilterReset}
          onCloseModal={onCloseModal}
        />
      </Modal>
    </View>
  );
};

export default FlightListScreen;
