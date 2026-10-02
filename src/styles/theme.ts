const theme = {
  colors: {
    background: '#ffffff',
    foreground1: '#FEE3E8',
    foreground2: '#FDDDCA',
    foreground3: '#E5E2FF',
    colorMain: '#001A3B',
    secondaryColor: '#CEA834',
    texts: '#1b1b1b',
    reverseTexts: '#888',

    dark: {
      background: '#333333',
      foreground1: '#414141',
      foreground2: '#2c2c2c',
      foreground3: '#0c0c0c',
      colorMain: '#001A3B',
      secondaryColor: '#CEA834',
      texts: '#1b1b1b',
      reverseTexts: '#888',
    },
  },
  spacing: {
    xs: '5px',
    sm: '10px',
    md: '15px',
    lg: '30px',
    xl: '50px',
    xxl: '100px',
  },
  typography: {
    primary: 'var(--font-primary)',
    secondary: 'var(--font-secondary)',
  },
  fontSize: {
    smText: '.9em',
    mdText: '1.1em',
    lgText: '1.3em',
    smTitle: '2em',
    mdTitle: '5em',
    lgTitle: '8em',
  },
  borderRadius: {
    xs: '3px',
    sm: '5px',
    md: '10px',
    lg: '30px',
  },
} as const;

export type Theme = typeof theme;

export default theme;
