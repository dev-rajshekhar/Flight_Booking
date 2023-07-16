import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import colors from '../constants/color';

const CircleWithLine = () => {
  return (
    <View style={styles.container}>
      <View style={styles.outerCircle}>
        <View style={styles.innerCircle} />
      </View>
      <View style={styles.lineContainer}>
        <View style={styles.line} />
        <View style={styles.iconContainer}>
          <Image
            style={{height: 24, width: 24}}
            source={require('../../assets/flight_icon.png')}
          />
        </View>
      </View>
      <View style={styles.outerCircle}>
        <View style={styles.innerCircle} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  outerCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerCircle: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.primary,
  },
  lineContainer: {
    flex: 1,
    height: 1,
    marginHorizontal: 4,
    position: 'relative',
  },
  line: {
    flex: 1,
    backgroundColor: 'grey',
    borderRadius: 1,
  },
  iconContainer: {
    position: 'absolute',
    top: -6,
    left: '50%',
    transform: [{translateX: -8}],
    width: 16,
    height: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CircleWithLine;
