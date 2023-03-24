import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header from './Header/Header';
import AboutCompany from './Main/AboutCompany';
import Table from './Main/Table';
import InnerSlider from './Main/Slider/InnerSlider';
import Solutions from './Main/Solutions';
import Footer from './Footer/Footer';
import Introduce from './Introduce/Introduce';
import Team from './Main/Team';

class HomePage extends Component {
  render() {
    const {
      aboutContent,
      email,
      phone,
      location,
      footerCompanyContent,
      footerAboutContent,
      link,
      nameCompany,
      headerContent,
      introduceName,
      introduceGithub,
      introduceDesign,
    } = this.props;

    return (
      <div className="body">
        <div className="wrapper">

          <Header
            nameCompany={nameCompany}
            headerContent={headerContent}
          />

          <main className="page">

            <Table />

            <Team />

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

HomePage.propTypes = {
  aboutContent: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  footerCompanyContent: PropTypes.string.isRequired,
  footerAboutContent: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  nameCompany: PropTypes.string.isRequired,
  headerContent: PropTypes.string.isRequired,
  introduceName: PropTypes.string.isRequired,
  introduceGithub: PropTypes.string.isRequired,
  introduceDesign: PropTypes.string.isRequired,
};

export default HomePage;
