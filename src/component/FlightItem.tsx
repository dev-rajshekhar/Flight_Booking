import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {format} from 'date-fns';
import FlightResponse from '../data/FlightResponse';
import CircleWithLine from './CircleWithLine';
import {filterItemStyle as styles} from '../style/flight_row';

interface FlightItemProps {
  item: FlightResponse;
  onFlightItemClicked: (item: FlightResponse) => void;
  isEnabled: boolean;
}
const FlightItem: React.FC<FlightItemProps> = ({
  item,
  onFlightItemClicked,
  isEnabled = true,
}) => {
  const formatTime = (time: string) => {
    const formattedTime = format(new Date(time), 'hh:mm a');
    return formattedTime;
  };
  const locationInfo = (time: string, code: string) => {
    return (
      <View style={styles.locationBox}>
        <Text style={styles.timeText}>{time}</Text>
        <View style={styles.airPortCodeContainer}>
          <Text style={styles.airPortCodeText}>{code}</Text>
        </View>
      </View>
    );
  };
  const arrowContainer = () => {
    return (
      <View style={styles.arrowContainerStyle}>
        <CircleWithLine />
        <Text style={styles.detailText}>{item.displayData.totalDuration}</Text>
      </View>
    );
  };

  return (
    <TouchableOpacity
      activeOpacity={1}
      disabled={!isEnabled}
      onPress={() => {
        onFlightItemClicked(item);
      }}>
      <View style={styles.flightItemContainer}>
        <View style={styles.timeContainer}>
          {locationInfo(
            formatTime(item.displayData.source.depTime),
            item.displayData.source.airport[0].airportCode,
          )}
          {arrowContainer()}
          {locationInfo(
            formatTime(item.displayData.destination.arrTime),
            item.displayData.destination.airport[0].airportCode,
          )}
        </View>
        <Image
          style={styles.dashContainer}
          source={require('../../assets/dash.png')}
        />
        <View style={styles.detailsContainer}>
          <Text style={styles.flightNameText}>
            {item.displayData.airlines[0].airlineName}
          </Text>

          <Text style={styles.fairText}> ₹{item.fare}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FlightItem;
