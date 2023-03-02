import React, { Component } from 'react';
import PropTypes from 'prop-types';
import footerLogo from '../../assets/images/logo2.png';
import emailIcon from '../../assets/icons/contacts/email.svg';
import phoneIcon from '../../assets/icons/contacts/phone.svg';
import locationIcon from '../../assets/icons/contacts/location.svg';
import facebookIcon from '../../assets/icons/socials/facebook.svg';
import instagramIcon from '../../assets/icons/socials/instagram.svg';
import twitterIcon from '../../assets/icons/socials/twitter.svg';
import linkedinIcon from '../../assets/icons/socials/linkedin.svg';
import youtubeIcon from '../../assets/icons/socials/youtube.svg';

class Footer extends Component {
  render() {
    const {
      className, email, phone, location, footerCompanyContent, footerAboutContent, link
    } = this.props;

    return (
      <footer className={className}>
        <div className="footer__container container">
          <div className="footer__inner">
            <div className="footer__inner-information">
              <a className="footer__inner-logo" href="/">
                <img src={footerLogo} alt="Logotype" />
              </a>
              <p className="footer__inner-text">
                {footerCompanyContent}
              </p>

              <div className="footer__inner-contacts">
                <a className="footer__inner-email" href="mailto:Company@gmail.com">
                  <img
                    className="footer__inner-icon"
                    src={emailIcon}
                    alt="Email"
                  />
                  {email}
                </a>
                <a className="footer__inner-phone" href="tel:064-332-1233">
                  <img
                    className="footer__inner-icon"
                    src={phoneIcon}
                    alt="Phone"
                  />
                  Phone:
                  {' '}
                  {phone}
                </a>
                <a
                  className="footer__inner-location"
                  href="https://goo.gl/maps/pXKYQNYwuocuw3Rq5"
                >
                  <img
                    className="footer__inner-icon"
                    src={locationIcon}
                    alt="location"
                  />
                  {location}
                </a>
              </div>
            </div>

            <div className="footer__inner-box">
              <h4 className="footer__inner-title">INFORMATION</h4>
              <ul className="footer__inner-list">
                <li className="footer__inner-item">
                  <a className="footer__inner-link" href="/"> New Collection </a>
                </li>
                <li className="footer__inner-item">
                  <a className="footer__inner-link" href="/"> About Store </a>
                </li>
                <li className="footer__inner-item">
                  <a className="footer__inner-link" href="/"> Contact Us </a>
                </li>
                <li className="footer__inner-item">
                  <a className="footer__inner-link" href="/"> Latest News </a>
                </li>
                <li className="footer__inner-item">
                  <a className="footer__inner-link" href="/"> Our Sitemap </a>
                </li>
                <li className="footer__inner-item">
                  <a className="footer__inner-link" href="/"> Orders History </a>
                </li>
              </ul>
            </div>

            <div className="footer__inner-box">
              <h4 className="footer__inner-title">FOOTER MENU</h4>
              <ul className="footer__inner-list">
                <li className="footer__inner-item">
                  <a className="footer__inner-link" href="/"> Instagram profile </a>
                </li>
                <li className="footer__inner-item">
                  <a className="footer__inner-link" href="/"> New Collection </a>
                </li>
                <li className="footer__inner-item">
                  <a className="footer__inner-link" href="/"> Contact Us </a>
                </li>
                <li className="footer__inner-item">
                  <a className="footer__inner-link" href="/"> Latest News </a>
                </li>
                <li className="footer__inner-item">
                  <a className="footer__inner-link" href="/"> Terms & Conditions </a>
                </li>
                <li className="footer__inner-item">
                  <a className="footer__inner-link" href="/"> Purchase Theme </a>
                </li>
              </ul>
            </div>

            <div className="footer__inner-box">
              <h4 className="footer__inner-title">USEFUL LINKS</h4>
              <ul className="footer__inner-list">
                <li className="footer__inner-item">
                  <a className="footer__inner-link" href="/"> New Collection </a>
                </li>
                <li className="footer__inner-item">
                  <a className="footer__inner-link" href="/"> About Store </a>
                </li>
                <li className="footer__inner-item">
                  <a className="footer__inner-link" href="/"> Contact Us </a>
                </li>
                <li className="footer__inner-item">
                  <a className="footer__inner-link" href="/"> Latest News </a>
                </li>
                <li className="footer__inner-item">
                  <a className="footer__inner-link" href="/"> Our Sitemap </a>
                </li>
                <li className="footer__inner-item">
                  <a className="footer__inner-link" href="/"> Orders History </a>
                </li>
              </ul>
            </div>

            <div className="footer__inner-about">
              <h4 className="footer__inner-title">ABOUT THE STORE</h4>
              <p className="footer__inner-text footer__text">
                {footerAboutContent}
              </p>
              <a className="footer__inner-site" href="https://www.company.com">
                {link}
              </a>

              <ul className="footer__socials">
                <li className="footer__social">
                  <a className="footer__social-link" href="/">
                    <img src={facebookIcon} alt="Facebook" />
                  </a>
                </li>
                <li className="footer__social">
                  <a className="footer__social-link" href="/">
                    <img src={instagramIcon} alt="Instagram" />
                  </a>
                </li>
                <li className="footer__social">
                  <a className="footer__social-link" href="/">
                    <img src={twitterIcon} alt="Twitter" />
                  </a>
                </li>
                <li className="footer__social">
                  <a className="footer__social-link" href="/">
                    <img src={linkedinIcon} alt="Linkedin" />
                  </a>
                </li>
                <li className="footer__social">
                  <a className="footer__social-link" href="/">
                    <img src={youtubeIcon} alt="Youtube" />
                  </a>
                </li>
              </ul>

              <button className="footer__language" type="button">
                English
              </button>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

Footer.propTypes = {
  className: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  footerCompanyContent: PropTypes.string.isRequired,
  footerAboutContent: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Footer;
