import React from 'react';
import { DARK_THEME } from '../constants/Constants';

const ContextThemeColor = React.createContext({
  theme: DARK_THEME,
  toggleTheme: () => {},
});
export default ContextThemeColor;
