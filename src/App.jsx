import React, { useState } from 'react';
import './i18n';
import './App.css';
import './Reset.css';
import './Slick.css';
import HomePage from './components/HomePage';
import ContextThemeColor from './context/ContextThemeColor';
import { DARK_THEME, LIGHT_THEME } from './constants/Constants';

function App() {
  const email = 'Company@gmail.com';
  const phone = '(064) 332-1233';
  const location = '450 Wall Street, USA, New York';
  const link = 'www.company.com';
  const introduceGithub = 'https://github.com/kateryna-nikolaienko/kateryna-nikolaienko.github.io';
  const introduceDesign = ''
    + 'https://www.figma.com/file/vnIOQPl9yTWOrZruLTzsbc/Untitled?node-id=0%3A7&t=aBC8SpIdPB3B6ulK-0';
  const [theme, setTheme] = useState(DARK_THEME);

  const toggleTheme = () => {
    setTheme(theme === DARK_THEME ? LIGHT_THEME : DARK_THEME);
  };

  return (
    <ContextThemeColor.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      <HomePage
        email={email}
        phone={phone}
        location={location}
        link={link}
        introduceGithub={introduceGithub}
        introduceDesign={introduceDesign}
      />
    </ContextThemeColor.Provider>
  );
}

export default App;
