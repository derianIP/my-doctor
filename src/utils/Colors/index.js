const MainColor = {
  green1: '#0BCAD4',
  green2: '#EDFCFD',
  dark1: '#112340',
  grey1: '#7D8797',
  grey2: '#EDEEF0',
  grey3: '#B1B7C2',
  grey4: '#E9E9E9',
  grey5: '#495A75',
  gery6: '#EEEEEE',
  grey7: '#8092AF',
  red1: '#E06379',
  blue1: '#0066CB',
  black1: 'rgba(0,0,0,0.5)',
};

export const Colors = {
  primary: MainColor.green1,
  secondary: MainColor.dark1,
  tertiary: MainColor.blue1,
  white: 'white',
  black: 'black',
  text: {
    primary: MainColor.dark1,
    secondary: MainColor.grey1,
    danger: MainColor.red1,
    tabActive: MainColor.green1,
    tabNonActive: MainColor.grey5,
    headerDesc: MainColor.grey7,
  },
  button: {
    primary: {
      background: MainColor.green1,
      text: 'white',
    },
    secondary: {
      background: MainColor.grey2,
      text: MainColor.grey3,
    },
    disable: {
      background: MainColor.grey2,
      text: MainColor.grey3,
    },
  },
  border: {
    primary: MainColor.grey4,
    secondary: '',
    danger: MainColor.red1,
    line: MainColor.gery6,
  },
  card: MainColor.green1,
  cardLight: MainColor.green2,
  disable: MainColor.grey2,
  loadingBackground: MainColor.black1,
  message: {
    error: MainColor.red1,
  },
};
