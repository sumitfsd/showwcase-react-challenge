import { darken, lighten } from 'polished'

const scalarSizingUnit = 1

const theme = {
  main: '#1050a2',
  mainDark: '#003f8f',
  grey: '#f1f2f3',
  greyDark: '#7b7b7b',
  black: '#000',
  white: '#fff',
  green: 'green',
  red: 'red',
  lightRed: lighten(0.15, 'red'),

  text: darken(0.2, '#1050a2'),
  success: 'green',
  error: 'red',

  borderRadius: '0.25rem',
  sizingUnit: `${scalarSizingUnit}rem`,
  spacing: (unit = 1) => `${scalarSizingUnit * unit}rem`,

  overlay: 'rgba(0, 0, 0 ,0.4)',
  backgroundDarken: 'rgba(0, 0, 0, 0.05)',
  backgroundLighten: 'rgba(255, 255, 255, 0.15)',

  spinnerHeight: '20px',

  agGridFontSize: '12px',
  agGridBackground: '#f5f7f7',

  verticalUnit: '0.75rem', // sizingUnit * 0.75
  inputHeight: '2rem', // sizingUnit * 2
  headerHeight: '2.5rem', // sizingUnit * 2.5
  inputPadding: '0.5rem' // sizingUnit / 2
}

export default theme
