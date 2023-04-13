import React, { useState } from 'react';
import './App.css';
import './Reset.css';
import './Slick.css';
import HomePage from './components/HomePage';
import ContextThemeColor from './context/ContextThemeColor';
import { DARK_THEME, LIGHT_THEME } from './constants/Constants';

function App() {
  const nameCompany = 'Artificial intelligence & Cyber security';
  const headerContent = 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing '
    + 'industries '
    + 'for previewing layouts and visual mockups.';
  const aboutContent = 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing '
    + 'industries '
    + 'for previewing layouts and visual mockups.';
  const footerCompanyContent = 'Lorem ipsum is placeholder text commonly used in the graphic, print, and layouts '
    + 'and visual mockups.';
  const footerAboutContent = 'Lorem ipsum is placeholder text commonly used in the graphic, print, and layouts and '
    + 'visual mockups.';
  const email = 'Company@gmail.com';
  const phone = '(064) 332-1233';
  const location = '450 Wall Street, USA, New York';
  const link = 'www.company.com';
  const introduceName = 'Kateryna Nikolaienko';
  const introduceGithub = 'https://github.com/kateryna-nikolaienko/kateryna-nikolaienko.github.io';
  const introduceDesign = ''
    + 'https://www.figma.com/file/vnIOQPl9yTWOrZruLTzsbc/Untitled?node-id=0%3A7&t=aBC8SpIdPB3B6ulK-0';
  const [theme, setTheme] = useState(DARK_THEME);

  const toggleTheme = () => {
    setTheme(theme === DARK_THEME ? LIGHT_THEME : DARK_THEME);
  };

  return (
    <ContextThemeColor.Provider value={{
      theme,
      toggleTheme
    }}
    >
      <HomePage
        nameCompany={nameCompany}
        headerContent={headerContent}
        aboutContent={aboutContent}
        footerCompanyContent={footerCompanyContent}
        footerAboutContent={footerAboutContent}
        email={email}
        phone={phone}
        location={location}
        link={link}
        introduceName={introduceName}
        introduceGithub={introduceGithub}
        introduceDesign={introduceDesign}
      />
    </ContextThemeColor.Provider>
  );
}

export default App;
