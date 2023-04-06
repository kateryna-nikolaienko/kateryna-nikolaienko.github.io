import React, { Component } from 'react';
import PropTypes from 'prop-types';
import footerLogo from '../../assets/images/logo2.png';
import FooterItem from './FooterItem';
import ContextThemeColor from '../../context/ContextThemeColor';
import EmailIcon from '../Icons/EmailIcon';
import PhoneIcon from '../Icons/PhoneIcon';
import LocationIcon from '../Icons/LocationIcon';
import FacebookIcon from '../Icons/FacebookIcon';
import InstagramIcon from '../Icons/InstagramIcon';
import TwitterIcon from '../Icons/TwitterIcon';
import LinkedinIcon from '../Icons/linkedinIcon';
import YoutubeIcon from '../Icons/YoutubeIcon';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      informationItems: [
        {
          id: 0,
          href: '/',
          title: 'New Collection',
        },
        {
          id: 1,
          href: '/',
          title: 'About Store',
        },
        {
          id: 2,
          href: '/',
          title: 'Contact Us',
        },
        {
          id: 3,
          href: '/',
          title: 'Latest News',
        },
        {
          id: 4,
          href: '/',
          title: 'Our Sitemap',
        },
        {
          id: 5,
          href: '/',
          title: 'Orders History',
        },
      ],
      menuItems: [
        {
          id: 0,
          href: '/',
          title: 'Instagram profile',
        },
        {
          id: 1,
          href: '/',
          title: 'New Collection',
        },
        {
          id: 2,
          href: '/',
          title: 'Contact Us',
        },
        {
          id: 3,
          href: '/',
          title: 'Latest News',
        },
        {
          id: 4,
          href: '/',
          title: 'Terms & Conditions',
        },
        {
          id: 5,
          href: '/',
          title: 'Purchase Theme',
        },
      ],
      usefulLinksItems: [
        {
          id: 0,
          href: '/',
          title: 'New Collection',
        },
        {
          id: 1,
          href: '/',
          title: 'About Store',
        },
        {
          id: 2,
          href: '/',
          title: 'Contact Us',
        },
        {
          id: 3,
          href: '/',
          title: 'Latest News',
        },
        {
          id: 4,
          href: '/',
          title: 'Our Sitemap',
        },
        {
          id: 5,
          href: '/',
          title: 'Orders History',
        },
      ]
    };
  }

  render() {
    const {
      email,
      phone,
      location,
      footerCompanyContent,
      footerAboutContent,
      link
    } = this.props;

    const {
      informationItems,
      menuItems,
      usefulLinksItems
    } = this.state;

    return (
      <ContextThemeColor.Consumer>
        {({
          theme
        }) => (
          <footer className={`footer ${theme}`}>
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
                    <a className={`footer__inner-email ${theme}`} href="mailto:Company@gmail.com">
                      <EmailIcon color={theme === 'dark' ? 'white' : 'black'} />
                      {email}
                    </a>
                    <a className={`footer__inner-phone ${theme}`} href="tel:064-332-1233">
                      <PhoneIcon color={theme === 'dark' ? 'white' : 'black'} />
                      {phone}
                    </a>
                    <a
                      className={`footer__inner-location ${theme}`}
                      href="https://goo.gl/maps/pXKYQNYwuocuw3Rq5"
                    >
                      <LocationIcon color={theme === 'dark' ? 'white' : 'black'} />
                      {location}
                    </a>
                  </div>
                </div>

                <div className="footer__inner-box">
                  <h4 className="footer__inner-title">INFORMATION</h4>
                  <ul className="footer__inner-list">
                    {informationItems.map(({
                      id,
                      href,
                      title
                    }) => (
                      <FooterItem key={id} href={href} title={title} />
                    ))}
                  </ul>
                </div>

                <div className="footer__inner-box">
                  <h4 className="footer__inner-title">FOOTER MENU</h4>
                  <ul className="footer__inner-list">
                    {menuItems.map(({
                      id,
                      href,
                      title
                    }) => (
                      <FooterItem key={id} href={href} title={title} />
                    ))}
                  </ul>
                </div>

                <div className="footer__inner-box">
                  <h4 className="footer__inner-title">USEFUL LINKS</h4>
                  <ul className="footer__inner-list">
                    {usefulLinksItems.map(({
                      id,
                      href,
                      title
                    }) => (
                      <FooterItem key={id} href={href} title={title} />
                    ))}
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
                    <FacebookIcon color={theme === 'dark' ? 'white' : 'black'} />
                    <InstagramIcon color={theme === 'dark' ? 'white' : 'black'} />
                    <TwitterIcon color={theme === 'dark' ? 'white' : 'black'} />
                    <LinkedinIcon color={theme === 'dark' ? 'white' : 'black'} />
                    <YoutubeIcon color={theme === 'dark' ? 'white' : 'black'} />
                  </ul>

                  <button className={`footer__language ${theme}`} type="button">
                    English
                  </button>
                </div>
              </div>
            </div>
          </footer>
        )}
      </ContextThemeColor.Consumer>
    );
  }
}

Footer.propTypes = {
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  footerCompanyContent: PropTypes.string.isRequired,
  footerAboutContent: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Footer;
