import {StyleSheet} from 'react-native';
import colors from '../constants/color';
import {fonts} from '../constants/fonts';

export const mainScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
    alignItems: 'center',
  },
  safeAreaStyle: {flex: 1},
  scrollContaine: {flex: 1, backgroundColor: colors.background},

  selectionContainer: {
    marginBottom: 16,
    marginVertical: 10,
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  label: {
    fontSize: 18,
    color: colors.text,
    fontFamily: fonts.medium,
  },
  input: {
    marginTop: 8,
    width: '100%',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    fontSize: 20,
    height: 44,
    color: '#333',
    backgroundColor: '#fff',
    fontFamily: fonts.medium,
  },
  dateButton: {
    marginTop: 8,
    width: '100%',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    height: 44,

    borderColor: '#ccc',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
  },
  dateButtonText: {
    fontSize: 22,
    color: colors.text,
    fontFamily: fonts.medium,
  },
  footer: {
    marginTop: 16,
    alignItems: 'center',
    position: 'absolute',
    bottom: 100,
  },
  footerText: {
    fontSize: 16,
    color: colors.text_03,
    fontFamily: fonts.book,
  },
  buttonStyle: {
    width: '100%',
    height: 44,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: fonts.bold,
    color: colors.background,
  },
  resetButton: {
    alignSelf: 'center',
    marginTop: 16,
  },
  resetButtonText: {
    fontSize: 18,
    color: colors.negativeButtonColor,
    fontFamily: fonts.medium,
  },
  imageStyle: {height: 120, width: 120},
  showHideContainer: {width: '100%'},
});
