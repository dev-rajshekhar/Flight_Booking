import {StyleSheet} from 'react-native';
import colors from '../constants/color';
import {fonts} from '../constants/fonts';

export const filterStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  closeButton: {
    alignSelf: 'flex-end',
    paddingHorizontal: 16,
  },

  sectionTitle: {
    fontSize: 18,
    textAlign: 'center',
    alignSelf: 'center',
    fontFamily: fonts.medium,
  },
  filterOption: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',

    marginBottom: 8,
  },

  filterOptionText: {
    fontSize: 16,
    fontFamily: fonts.book,
  },
  sortOption: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 8,
  },
  selectedSortOption: {
    backgroundColor: colors.selectionCOlor,
    borderColor: colors.primary,
  },
  sortOptionText: {
    fontSize: 16,
    fontFamily: fonts.book,
  },
  applyButton: {
    backgroundColor: colors.primary,
    height: 48,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginTop: 16,
  },
  applyButtonText: {
    color: colors.backgroundPrimary,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: fonts.bold,
  },
  resetButton: {
    alignSelf: 'flex-end',
    marginTop: 8,
    marginEnd: 16,
  },
  resetButtonText: {
    fontSize: 16,
    color: colors.negativeButtonColor,
    fontFamily: fonts.medium,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primary,
    fontFamily: fonts.bold,
  },
  section: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#f5f5f5',
    height: 48,
    alignItems: 'center',
    paddingHorizontal: 16,
    marginVertical: 18,
  },
  containerPadding: {paddingHorizontal: 16},
  headerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  crossImageStyle: {height: 24, width: 24},
});
