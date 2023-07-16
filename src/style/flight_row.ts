import {StyleSheet} from 'react-native';
import colors from '../constants/color';
import {fonts} from '../constants/fonts';

export const filterItemStyle = StyleSheet.create({
  flightItemContainer: {
    flexDirection: 'column',
    backgroundColor: colors.backgroundPrimary,
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
    elevation: 5,
    shadowRadius: 5,
  },
  timeContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailsContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
  },
  detailText: {
    fontSize: 18,
    marginVertical: 10,
    fontFamily: fonts.bold,
    color: colors.text_03,
  },
  flightNameText: {
    fontSize: 18,
    marginVertical: 10,
    color: colors.text_02,
    fontFamily: fonts.medium,
  },
  fairText: {
    color: '#FFD700',
    fontSize: 22,
    fontFamily: fonts.bold,
  },
  arrowContainerStyle: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  airPortCodeContainer: {
    borderRadius: 20,
    marginVertical: 10,
    height: 28,
    backgroundColor: colors.selectionCOlor,
    justifyContent: 'center',
    alignItems: 'center',
  },

  locationBox: {flexDirection: 'column'},
  timeText: {fontSize: 24, fontFamily: fonts.bold, color: colors.text_02},
  airPortCodeText: {
    fontSize: 14,
    fontFamily: fonts.book,
    color: colors.text,
  },
  dashContainer: {height: 1, width: '100%'},
});
