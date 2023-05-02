import React from 'react';

const ContextThemeColor = React.createContext({
  theme: 'dark',
  toggleTheme: () => {},
});
export default ContextThemeColor;
