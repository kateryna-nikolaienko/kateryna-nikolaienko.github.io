import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo';
import logo from '../../logo.png';
import playIcon from '../../assets/icons/play-button.svg';
import headerPicture from '../../assets/images/header.png';
import Navigation from './Navigation';
import Button from '../Buttons/Button';
import Partners from '../PartnersList/Partners';
import BurgerButton from '../Buttons/BurgerButton';
import Modal from '../Modals/Modal';
import ModalVideo from '../Modals/ModalVideo';
import ThemeToggleButton from '../Buttons/ThemeToggleButton';
import ContextThemeColor from '../../context/ContextThemeColor';

function Header({
  nameCompany, headerContent
}) {
  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowVideo, setIsShowVideo] = useState(false);

  const handleShowModal = () => {
    setIsShowModal(!isShowModal);
  };

  const handleShowVideo = () => {
    setIsShowVideo(!isShowVideo);
  };

  const { theme } = useContext(ContextThemeColor);

  return (
    <header className={`header ${theme}`}>
      <div className="container">
        <div className="header__inner">

          <div className={`header__top ${theme}`}>

            <Logo className="logo" href="/" src={logo} alt="Logo" />

            <Navigation />

            <div className="header__box">

              <Button className="menu__button" text="Sign In" onClick={handleShowModal} />

              <BurgerButton />

            </div>
          </div>

          <div className="header__content">
            <ThemeToggleButton />
            <div className="header__content-left">
              <span className="header__content-subtitle">
                Next generation platform
              </span>
              <h1 className="header__content-title">
                {nameCompany}
              </h1>
              <p className="header__content-text">
                {headerContent}
              </p>
              <div className="header__content-buttons">
                <Button className="header__btn" text="Get Started" onClick={handleShowModal} />
                <Button
                  className="header__btn header__btn-box"
                  decor={playIcon}
                  text="Watch Video"
                  onClick={handleShowVideo}
                />
                {isShowVideo && <ModalVideo onClose={handleShowVideo} />}
              </div>
            </div>
            <div className="header__content-right">
              <img src={headerPicture} alt="Cyber security" />
            </div>
          </div>

          <Partners />

          {isShowModal && <Modal onClose={handleShowModal} />}

        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  nameCompany: PropTypes.string.isRequired,
  headerContent: PropTypes.string.isRequired,
};

export default Header;
