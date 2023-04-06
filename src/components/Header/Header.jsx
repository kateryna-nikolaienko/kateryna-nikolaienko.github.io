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
import Modal from '../Modals/Modal';
import ModalVideo from '../Modals/ModalVideo';
import ThemeToggleButton from '../Buttons/ThemeToggleButton';
import ContextThemeColor from '../../context/ContextThemeColor';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowModal: false,
      isShowVideo: false,
    };
  }

  handleShowModal = () => {
    this.setState({ isShowModal: true });
  };

  handleCloseModal = () => {
    this.setState({ isShowModal: false });
  };

  handleShowVideo = () => {
    this.setState({ isShowVideo: true });
  };

  handleCloseVideo = () => {
    this.setState({ isShowVideo: false });
  };

  render() {
    const {
      nameCompany,
      headerContent
    } = this.props;

    const {
      isShowModal,
      isShowVideo
    } = this.state;
    return (
      <ContextThemeColor.Consumer>
        {({
          theme
        }) => (
          <header className={`header ${theme}`}>
            <div className="container">
              <div className="header__inner">

                <div className={`header__top ${theme}`}>

                  <Logo className="logo" href="/" src={logo} alt="Logo" />

                  <Navigation />

                  <div className="header__box">

                    <Button className="menu__button" text="Sign In" onClick={this.handleShowModal} />

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
                      <Button className="header__btn" text="Get Started" onClick={this.handleShowModal} />
                      <Button
                        className="header__btn header__btn-box"
                        decor={playIcon}
                        text="Watch Video"
                        onClick={this.handleShowVideo}
                      />
                      {isShowVideo && <ModalVideo onClose={this.handleCloseVideo} />}
                    </div>
                  </div>
                  <div className="header__content-right">
                    <img src={headerPicture} alt="Cyber security" />
                  </div>
                </div>

                <Partners />

                {isShowModal && <Modal onClose={this.handleCloseModal} />}

              </div>
            </div>
          </header>
        )}
      </ContextThemeColor.Consumer>
    );
  }
}

Header.propTypes = {
  nameCompany: PropTypes.string.isRequired,
  headerContent: PropTypes.string.isRequired,
};

export default Header;
