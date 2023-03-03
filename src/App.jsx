import React, { Component } from 'react';
import './App.css';
import './Reset.css';
import './Slick.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header from './components/Header/Header';
import AboutCompany from './components/Main/AboutCompany';
import Table from './components/Main/Table';
import InnerSlider from './components/Main/Slider/InnerSlider';
import Solutions from './components/Main/Solutions';
import Footer from './components/Footer/Footer';
import Introduce from './components/Introduce/Introduce';

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
    };
  }

  render() {
    const {
      aboutContent, email, phone, location, footerCompanyContent, footerAboutContent, link, nameCompany,
      headerContent, introduceName, introduceGithub, introduceDesign,
    } = this.state;

    return (
      <div className="body">
        <div className="wrapper">

          <Header nameCompany={nameCompany} headerContent={headerContent} />

          <main className="page">

            <Table />

            <AboutCompany aboutContent={aboutContent} />

            <InnerSlider />

            <Solutions />

          </main>

          <Footer
            email={email}
            phone={phone}
            link={link}
            location={location}
            footerCompanyContent={footerCompanyContent}
            footerAboutContent={footerAboutContent}
          />

          <Introduce
            introduceName={introduceName}
            introduceGithub={introduceGithub}
            introduceDesign={introduceDesign}
          />

        </div>
      </div>
    );
  }
}

export default App;
