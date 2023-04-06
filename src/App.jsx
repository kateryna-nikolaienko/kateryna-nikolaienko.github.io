import React, { Component } from 'react';
import './App.css';
import './Reset.css';
import './Slick.css';
import HomePage from './components/HomePage';
import ContextThemeColor from './context/ContextThemeColor';
import { DARK_THEME, LIGHT_THEME } from './constants/Constants';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameCompany: 'Artificial intelligence & Cyber security',
      headerContent: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries '
        + 'for previewing layouts and visual mockups.',
      aboutContent: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries '
        + 'for previewing layouts and visual mockups.',
      footerCompanyContent: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and layouts '
        + 'and visual mockups.',
      footerAboutContent: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and layouts and '
        + 'visual mockups.',
      email: 'Company@gmail.com.com',
      phone: '(064) 332-1233',
      location: '450 Wall Street, USA, New York',
      link: 'www.company.com',
      introduceName: 'Kateryna Nikolaienko',
      introduceGithub: 'https://github.com/kateryna-nikolaienko/kateryna-nikolaienko.github.io',
      introduceDesign: 'https://www.figma.com/file/vnIOQPl9yTWOrZruLTzsbc/Untitled?node-id=0%3A7&t=aBC8SpIdPB3B6ulK-0',
      theme: DARK_THEME,
    };
  }

  toggleTheme = () => {
    this.setState((prevState) => ({
      theme: prevState.theme === DARK_THEME ? LIGHT_THEME : DARK_THEME,
    }));
  };

  render() {
    const {
      aboutContent, email, phone, location, footerCompanyContent, footerAboutContent, link, nameCompany,
      headerContent, introduceName, introduceGithub, introduceDesign, theme
    } = this.state;

    return (
      <ContextThemeColor.Provider value={{ theme, toggleTheme: this.toggleTheme }}>
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
}

export default App;
