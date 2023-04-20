import React, { useContext } from 'react';
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
import ContextThemeColor from '../context/ContextThemeColor';

function HomePage({
  email,
  phone,
  location,
  link,
  introduceGithub,
  introduceDesign,
}) {
  const { theme } = useContext(ContextThemeColor);

  return (
    <div className={`body ${theme}`}>
      <div className="wrapper">
        <Header />

        <main className="page">
          <Table />

          <Team />

          <AboutCompany />

          <InnerSlider />

          <Solutions />
        </main>

        <Footer email={email} phone={phone} link={link} location={location} />

        <Introduce
          introduceGithub={introduceGithub}
          introduceDesign={introduceDesign}
        />
      </div>
    </div>
  );
}

HomePage.propTypes = {
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  introduceGithub: PropTypes.string.isRequired,
  introduceDesign: PropTypes.string.isRequired,
};

export default HomePage;
