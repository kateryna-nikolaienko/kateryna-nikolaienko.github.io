import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo';
import logo from '../../logo.png';
import playIcon from '../../assets/icons/play-button.svg';
import headerPicture from '../../assets/images/header.png';
import Navigation from './Navigation';
import Button from '../Buttons/Button';
import Partners from '../PartnersList/Partners';
import BurgerButton from '../Buttons/BurgerButton';

class Header extends Component {
  render() {
    const {
      nameCompany, headerContent
    } = this.props;

    return (
      <header className="header">
        <div className="container">
          <div className="header__inner">

            <div className="header__top">

              <Logo className="logo" href="/" src={logo} alt="Logo" />

              <Navigation />

              <div className="header__box">

                <Button className="menu__button" text="Sign In" />

                <BurgerButton />

              </div>
            </div>

            <div className="header__content">
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
                  <Button className="header__btn" text="Get Started" />
                  <a className="header__btn header__btn-box" href="/">
                    <img
                      className="header__btn-img"
                      src={playIcon}
                      alt=""
                    />
                    Watch Video
                  </a>
                </div>
              </div>
              <div className="header__content-right">
                <img src={headerPicture} alt="Cyber security" />
              </div>
            </div>

            <Partners />

          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  nameCompany: PropTypes.string.isRequired,
  headerContent: PropTypes.string.isRequired,
};

export default Header;
