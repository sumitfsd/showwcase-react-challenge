import { darken, lighten } from 'polished';
import * as dimensions from './dimensions';

const scalarSizingUnit = 1;

const theme = {
  main: '#1873e8',
  mainDark: '#00459e',
  mainLight: lighten(0.35, '#1873e8'),
  grey: '#f1f2f3',
  greyDark: '#7b7b7b',
  black: '#000',
  white: '#fff',
  greyLight: lighten(0.2, '#7b7b7b'),

  text: darken(0.2, '#1050a2'),
  success: 'green',
  error: 'red',

  borderRadius: '0.25rem',
  sizingUnit: `${scalarSizingUnit}rem`,
  spacing: (unit = 1) => `${scalarSizingUnit * unit}rem`,

  overlay: 'rgba(0, 0, 0 ,0.4)',
  backgroundDarken: 'rgba(0, 0, 0, 0.05)',
  backgroundLighten: 'rgba(255, 255, 255, 0.15)',

  verticalUnit: '0.75rem', // sizingUnit * 0.75
  inputHeight: '2rem', // sizingUnit * 2
  headerHeight: '2.5rem', // sizingUnit * 2.5
  inputPadding: '0.5rem', // sizingUnit / 2
};

export { dimensions };
export default theme;
