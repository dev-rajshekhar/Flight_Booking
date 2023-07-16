import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView,
  Alert,
} from 'react-native';

export type RootStackParamList = {
  Main: undefined;
  FlightSearchResults: undefined;
};
import DateTimePicker from '@react-native-community/datetimepicker';
import {useNavigation, useRoute} from '@react-navigation/native';

import FlightItem from '../component/FlightItem';
import {mainScreenStyles as styles} from '../style/main_screen_style';
import FlightResponse from '../data/FlightResponse';

const MainScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [departureLocation, setDepartureLocation] = useState('');
  const [destination, setDestination] = useState('');
  const [travelDate, setTravelDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [data, setFlightData] = useState(null);
  const [isFormEditable, setIsEnable] = useState(true);
  const [notes, setNotes] = useState('');

  const createTrip = async () => {
    try {
      const response = await fetch(
        'https://api.npoint.io/d0fe9a5513208c354c52',
      );
      const data = await response.json();
      handleReset();

      Alert.alert('Server Response Success', data.message);
    } catch (error) {
      console.error('Error submitting request:', error);
      Alert.alert('Server Response', error);
    }
  };

  const handleFormSubmit = () => {
    if (!isFormEditable && (!departureLocation || !destination)) {
      Alert.alert('Please add destination and start location');
      return;
    } else {
      if (isFormEditable) {
        createTrip();
      } else {
        setFlightData(null);
        setDepartureLocation('');
        setDestination('');
        navigation.navigate('FlightSearchResults' as never);
      }
    }
  };
  useEffect(() => {
    if (route !== undefined) {
      const param = route?.params?.selectedFlight;
      setFlightData(param);
      setIsEnable(param != null || param !== undefined);
    }
  }, [route]);
  const handleReset = () => {
    setDepartureLocation('');
    setDestination('');
    setNotes('');
    setFlightData(null);
    setIsEnable(false);
  };
  const handleDateChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || travelDate;
    setShowDatePicker(false);
    setTravelDate(currentDate);
  };
  const renderSelectedFlight = (flightData: FlightResponse) => {
    return data != null ? (
      <View style={styles.showHideContainer}>
        <FlightItem
          item={flightData}
          isEnabled={false}
          onFlightItemClicked={() => {}}
        />
      </View>
    ) : null;
  };

  const ButtonTitle = isFormEditable ? 'Book Flight' : 'See Flights';
  return (
    <SafeAreaView style={styles.safeAreaStyle}>
      <ScrollView style={styles.scrollContaine}>
        <View style={styles.container}>
          <Image
            style={styles.imageStyle}
            source={require('../../assets/logo.png')}
          />
          {isFormEditable && renderSelectedFlight(data)}

          {!isFormEditable && (
            <View style={styles.showHideContainer}>
              <View style={styles.selectionContainer}>
                <Text style={styles.label}>FROM</Text>
                <TextInput
                  testID="from-input"
                  style={styles.input}
                  value={departureLocation}
                  onChangeText={setDepartureLocation}
                  placeholder="Enter departure location"
                  placeholderTextColor="#777"
                  editable={!isFormEditable}
                />
              </View>

              <View style={styles.selectionContainer}>
                <Text style={styles.label}>DESTINATION</Text>
                <TextInput
                  testID="to-input"
                  style={styles.input}
                  value={destination}
                  onChangeText={setDestination}
                  placeholder="Enter destination"
                  editable={!isFormEditable}
                  placeholderTextColor="#777"
                />
              </View>
            </View>
          )}

          <View style={styles.selectionContainer}>
            <Text style={styles.label}>TRAVEL DATE</Text>
            <TouchableOpacity
              disabled={isFormEditable}
              testID="calendar-button"
              style={styles.dateButton}
              onPress={() => setShowDatePicker(true)}>
              <Text style={styles.dateButtonText}>
                {travelDate.toDateString()}
              </Text>
            </TouchableOpacity>
          </View>

          {showDatePicker && (
            <DateTimePicker
              value={travelDate}
              mode="date"
              display="inline"
              onChange={handleDateChange}
              minimumDate={new Date()}
              onTouchCancel={() => setShowDatePicker(false)}
            />
          )}
          {isFormEditable && (
            <View style={styles.selectionContainer}>
              <Text style={styles.label}>NOTES</Text>
              <TextInput
                testID="notes-input"
                style={styles.input}
                value={notes}
                onChangeText={setNotes}
                placeholder="Enter Notes"
                placeholderTextColor="#777"
              />
            </View>
          )}
          <TouchableOpacity
            testID="submit-button"
            style={styles.buttonStyle}
            onPress={handleFormSubmit}>
            <Text style={styles.buttonText}>{ButtonTitle}</Text>
          </TouchableOpacity>

          {isFormEditable && (
            <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
              <Text style={styles.resetButtonText}>Reset</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MainScreen;
