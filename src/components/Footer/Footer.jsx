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
import FooterItem from './FooterItem';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      footerSocials: [
        {
          index: 0,
          href: '/',
          src: facebookIcon,
          alt: 'Facebook'
        },
        {
          index: 1,
          href: '/',
          src: instagramIcon,
          alt: 'Instagram'
        },
        {
          index: 2,
          href: '/',
          src: twitterIcon,
          alt: 'Twitter'
        },
        {
          index: 3,
          href: '/',
          src: linkedinIcon,
          alt: 'Linkedin'
        },
        {
          index: 4,
          href: '/',
          src: youtubeIcon,
          alt: 'Youtube'
        },
      ],
      informationItems: [
        <FooterItem href="/" title="New Collection" index={0} />,
        <FooterItem href="/" title="About Store" index={1} />,
        <FooterItem href="/" title="Contact Us" index={2} />,
        <FooterItem href="/" title="Latest News" index={3} />,
        <FooterItem href="/" title="Our Sitemap" index={4} />,
        <FooterItem href="/" title="Orders History" index={5} />,
      ],
      menuItems: [
        <FooterItem href="/" title="Instagram profile" index={0} />,
        <FooterItem href="/" title="New Collection" index={1} />,
        <FooterItem href="/" title="Contact Us" index={2} />,
        <FooterItem href="/" title="Latest News" index={3} />,
        <FooterItem href="/" title="Terms & Conditions" index={4} />,
        <FooterItem href="/" title="Purchase Theme" index={5} />,
      ],
      usefulLinksItems: [
        <FooterItem href="/" title="New Collection" index={0} />,
        <FooterItem href="/" title="About Store" index={1} />,
        <FooterItem href="/" title="Contact Us" index={2} />,
        <FooterItem href="/" title="Latest News" index={3} />,
        <FooterItem href="/" title="Our Sitemap" index={4} />,
        <FooterItem href="/" title="Orders History" index={5} />,
      ]
    };
  }

  renderFooterSocials = () => {
    const { footerSocials } = this.state;
    return footerSocials.map((item) => {
      return (
        <li className="footer__social" key={item.index}>
          <a className="footer__social-link" href={item.href}>
            <img src={item.src} alt={item.alt} />
          </a>
        </li>
      );
    });
  };

  renderFooterItems = (itemsArray) => {
    return itemsArray.map((item) => {
      return <div key={item.props.index}>{item}</div>;
    });
  };

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
      <footer className="footer">
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
                {this.renderFooterItems(informationItems)}
              </ul>
            </div>

            <div className="footer__inner-box">
              <h4 className="footer__inner-title">FOOTER MENU</h4>
              <ul className="footer__inner-list">
                {this.renderFooterItems(menuItems)}
              </ul>
            </div>

            <div className="footer__inner-box">
              <h4 className="footer__inner-title">USEFUL LINKS</h4>
              <ul className="footer__inner-list">
                {this.renderFooterItems(usefulLinksItems)}
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
                {this.renderFooterSocials()}
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
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  footerCompanyContent: PropTypes.string.isRequired,
  footerAboutContent: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Footer;