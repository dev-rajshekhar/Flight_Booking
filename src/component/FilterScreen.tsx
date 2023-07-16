import React, {useState} from 'react';
import {View, Text, TouchableOpacity, SafeAreaView, Image} from 'react-native';
import {filterStyle as styles} from '../style/filter_screen';

interface FilterScreenProps {
  selectedFilters: {
    flightFilter: string;
    sortOption: string;
  };
  onFilterApply: (selectedFilters: {
    flightFilter: string;
    sortOption: string;
  }) => void;
  onFilterReset: () => void;
  onCloseModal: () => void;
  flightName: string[];
}

const FilterScreen: React.FC<FilterScreenProps> = ({
  selectedFilters,
  onFilterApply,
  onFilterReset,
  onCloseModal,
  flightName,
}) => {
  const [flightFilter, setFlightFilter] = useState(
    selectedFilters.flightFilter,
  );
  const [sortOption, setSortOption] = useState(selectedFilters.sortOption);

  const handleFilterSelection = (filter: string) => {
    setFlightFilter(filter);
  };

  const handleSortOptionSelection = (option: string) => {
    setSortOption(option);
  };

  const handleApplyFilters = () => {
    onFilterApply({flightFilter, sortOption});
  };

  const handleResetFilters = () => {
    onFilterReset();
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.headerStyle}>
          <TouchableOpacity style={styles.closeButton} onPress={onCloseModal}>
            <Image
              style={styles.crossImageStyle}
              source={require('../../assets/close.png')}
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>Filter & Sort</Text>
          <TouchableOpacity
            style={styles.resetButton}
            onPress={handleResetFilters}>
            <Text style={styles.resetButtonText}>Reset</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Filter By Flight</Text>
        </View>
        <View style={styles.containerPadding}>
          {flightName.map(flightName => (
            <TouchableOpacity
              key={flightName}
              style={[
                styles.filterOption,
                flightFilter === flightName && styles.selectedSortOption,
              ]}
              onPress={() => handleFilterSelection(flightName)}>
              <Text style={styles.filterOptionText}>{flightName}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sort Option</Text>
        </View>
        <View style={styles.containerPadding}>
          <TouchableOpacity
            style={[
              styles.sortOption,
              sortOption === 'PriceLow' && styles.selectedSortOption,
            ]}
            onPress={() => handleSortOptionSelection('PriceLow')}>
            <Text style={styles.sortOptionText}>
              Sort By Fare (Low to High)
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.sortOption,
              sortOption === 'PriceHigh' && styles.selectedSortOption,
            ]}
            onPress={() => handleSortOptionSelection('PriceHigh')}>
            <Text style={styles.sortOptionText}>
              Sort By Fare (High to Low)
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.sortOption,
              sortOption === 'DurationLow' && styles.selectedSortOption,
            ]}
            onPress={() => handleSortOptionSelection('DurationLow')}>
            <Text style={styles.sortOptionText}>
              Sort By Duration (Low to High)
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.sortOption,
              sortOption === 'DurationHigh' && styles.selectedSortOption,
            ]}
            onPress={() => handleSortOptionSelection('DurationHigh')}>
            <Text style={styles.sortOptionText}>
              Sort By Duration (High to Low)
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.applyButton}
            onPress={handleApplyFilters}>
            <Text style={styles.applyButtonText}>Apply</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FilterScreen;
