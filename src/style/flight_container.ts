import {StyleSheet} from 'react-native';
import colors from '../constants/color';
import {fonts} from '../constants/fonts';

export const flightResultContainerStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  filterButton: {
    backgroundColor: colors.primary,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 16,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 40,
    right: 20,
    zIndex: 40,
    height: 40,
    elevation: 4,
  },
  filterButtonText: {
    color: colors.backgroundPrimary,
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: fonts.medium,
  },
  flightItem: {
    backgroundColor: colors.background,
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
  },
  flightText: {
    fontSize: 16,
    marginBottom: 8,
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});
