import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
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
import { BLACK_ICON, WHITE_ICON, DARK_THEME } from '../../constants/Constants';
import { changeLanguage } from '../../store/translates/actions';

function Footer({
  email, phone, location, link 
}) {
  const dispatch = useDispatch();

  const informationItems = [
    {
      id: 0,
      href: '/',
      titleKey: 'footer.information.newCollection',
    },
    {
      id: 1,
      href: '/',
      titleKey: 'footer.information.aboutStore',
    },
    {
      id: 2,
      href: '/',
      titleKey: 'footer.information.contactUs',
    },
    {
      id: 3,
      href: '/',
      titleKey: 'footer.information.latestNews',
    },
    {
      id: 4,
      href: '/',
      titleKey: 'footer.information.ourSitemap',
    },
    {
      id: 5,
      href: '/',
      titleKey: 'footer.information.ordersHistory',
    },
  ];

  const menuItems = [
    {
      id: 0,
      href: '/',
      titleKey: 'footer.menu.instagramProfile',
    },
    {
      id: 1,
      href: '/',
      titleKey: 'footer.menu.newCollection',
    },
    {
      id: 2,
      href: '/',
      titleKey: 'footer.menu.contactUs',
    },
    {
      id: 3,
      href: '/',
      titleKey: 'footer.menu.latestNews',
    },
    {
      id: 4,
      href: '/',
      titleKey: 'footer.menu.termsConditions',
    },
    {
      id: 5,
      href: '/',
      titleKey: 'footer.menu.purchaseTheme',
    },
  ];

  const usefulLinksItems = [
    {
      id: 0,
      href: '/',
      titleKey: 'footer.links.newCollection',
    },
    {
      id: 1,
      href: '/',
      titleKey: 'footer.links.aboutStore',
    },
    {
      id: 2,
      href: '/',
      titleKey: 'footer.links.contactUs',
    },
    {
      id: 3,
      href: '/',
      titleKey: 'footer.links.latestNews',
    },
    {
      id: 4,
      href: '/',
      titleKey: 'footer.links.ourSitemap',
    },
    {
      id: 5,
      href: '/',
      titleKey: 'footer.links.ordersHistory',
    },
  ];

  const { theme } = useContext(ContextThemeColor);

  const { t, i18n } = useTranslation();

  const localeLng = i18n.language;

  const [open, setOpen] = useState(false);
  const handleButton = () => {
    setOpen(!open);
  };

  const handleLanguageChange = (language) => {
    dispatch(changeLanguage(language));
    setOpen(false);
  };

  return (
    <footer className={`footer ${theme}`}>
      <div className="footer__container container">
        <div className="footer__inner">
          <div className="footer__inner-information">
            <a className="footer__inner-logo" href="/">
              <img src={footerLogo} alt="Logotype" />
            </a>
            <p className="footer__inner-text">{t('footer.text1')}</p>

            <div className="footer__inner-contacts">
              <a
                className={`footer__inner-email ${theme}`}
                href="mailto:Company@gmail.com"
              >
                <EmailIcon
                  color={theme === DARK_THEME ? WHITE_ICON : BLACK_ICON}
                />
                {email}
              </a>
              <a
                className={`footer__inner-phone ${theme}`}
                href="tel:064-332-1233"
              >
                <PhoneIcon
                  color={theme === DARK_THEME ? WHITE_ICON : BLACK_ICON}
                />
                {phone}
              </a>
              <a
                className={`footer__inner-location ${theme}`}
                href="https://goo.gl/maps/pXKYQNYwuocuw3Rq5"
              >
                <LocationIcon
                  color={theme === DARK_THEME ? WHITE_ICON : BLACK_ICON}
                />
                {location}
              </a>
            </div>
          </div>

          <div className="footer__inner-box">
            <h4 className="footer__inner-title">{t('footer.informationTitle')}</h4>
            <ul className="footer__inner-list">
              {informationItems.map(({ id, href, titleKey }) => (
                <FooterItem key={id} href={href} title={t(titleKey)} />
              ))}
            </ul>
          </div>

          <div className="footer__inner-box">
            <h4 className="footer__inner-title">{t('footer.menuTitle')}</h4>
            <ul className="footer__inner-list">
              {menuItems.map(({ id, href, titleKey }) => (
                <FooterItem key={id} href={href} title={t(titleKey)} />
              ))}
            </ul>
          </div>

          <div className="footer__inner-box">
            <h4 className="footer__inner-title">{t('footer.usefulLinks')}</h4>
            <ul className="footer__inner-list">
              {usefulLinksItems.map(({ id, href, titleKey }) => (
                <FooterItem key={id} href={href} title={t(titleKey)} />
              ))}
            </ul>
          </div>

          <div className="footer__inner-about">
            <h4 className="footer__inner-title">{t('footer.aboutStore')}</h4>
            <p className="footer__inner-text footer__text">
              {t('footer.text2')}
            </p>
            <a className="footer__inner-site" href="https://www.company.com">
              {link}
            </a>

            <ul className="footer__socials">
              <FacebookIcon
                color={theme === DARK_THEME ? WHITE_ICON : BLACK_ICON}
              />
              <InstagramIcon
                color={theme === DARK_THEME ? WHITE_ICON : BLACK_ICON}
              />
              <TwitterIcon
                color={theme === DARK_THEME ? WHITE_ICON : BLACK_ICON}
              />
              <LinkedinIcon
                color={theme === DARK_THEME ? WHITE_ICON : BLACK_ICON}
              />
              <YoutubeIcon
                color={theme === DARK_THEME ? WHITE_ICON : BLACK_ICON}
              />
            </ul>

            <div className="footer__language-dropdown">
              <button
                className={`footer__language ${theme}`}
                type="button"
                onClick={handleButton}
              >
                {localeLng}
              </button>
              {open && (
              <ul className="footer__language-menu">
                <li className="footer__language-item">
                  <button
                    className={`footer__language-button ${theme}`}
                    type="button"
                    onClick={() => handleLanguageChange('Italian')}
                  >
                    Italian
                  </button>
                </li>
                <li className="footer__language-item">
                  <button
                    className={`footer__language-button ${theme}`}
                    type="button"
                    onClick={() => handleLanguageChange('Chinese')}
                  >
                    Chinese
                  </button>
                </li>
                <li className="footer__language-item">
                  <button
                    className={`footer__language-button ${theme}`}
                    type="button"
                    onClick={() => handleLanguageChange('Ukrainian')}
                  >
                    Ukrainian
                  </button>
                </li>
                <li className="footer__language-item">
                  <button
                    className={`footer__language-button ${theme}`}
                    type="button"
                    onClick={() => handleLanguageChange('English')}
                  >
                    English
                  </button>
                </li>
              </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Footer;
