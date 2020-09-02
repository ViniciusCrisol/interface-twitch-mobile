import { Appearance } from 'react-native-appearance';

export default Appearance.getColorScheme() === 'dark'
  ? {
      primary: '#000014',
      black: '#efeff1',
      gray: '#7f7f8b',
      tag: '#323235',
      green: '#14b866',
      red: '#ec1414',
      purple: '#bf94ff',
    }
  : {
      primary: '#f7f7f8',
      black: '#000014',
      gray: '#3a3a44',
      tag: '#323235',
      green: '#14b866',
      red: '#ec1414',
      purple: '#bf94ff',
    };
