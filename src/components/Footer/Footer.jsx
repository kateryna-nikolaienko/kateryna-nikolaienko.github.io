import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
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

function Footer({
  email, phone, location, link 
}) {
  const informationItems = [
    {
      id: 0,
      href: '/',
      titleKey: 'footer.informationItem',
    },
    {
      id: 1,
      href: '/',
      titleKey: 'footer.informationItem1',
    },
    {
      id: 2,
      href: '/',
      titleKey: 'footer.informationItem2',
    },
    {
      id: 3,
      href: '/',
      titleKey: 'footer.informationItem3',
    },
    {
      id: 4,
      href: '/',
      titleKey: 'footer.informationItem4',
    },
    {
      id: 5,
      href: '/',
      titleKey: 'footer.informationItem5',
    },
  ];

  const menuItems = [
    {
      id: 0,
      href: '/',
      titleKey: 'footer.menuItem',
    },
    {
      id: 1,
      href: '/',
      titleKey: 'footer.menuItem1',
    },
    {
      id: 2,
      href: '/',
      titleKey: 'footer.menuItem2',
    },
    {
      id: 3,
      href: '/',
      titleKey: 'footer.menuItem3',
    },
    {
      id: 4,
      href: '/',
      titleKey: 'footer.menuItem4',
    },
    {
      id: 5,
      href: '/',
      titleKey: 'footer.menuItem5',
    },
  ];

  const usefulLinksItems = [
    {
      id: 0,
      href: '/',
      titleKey: 'footer.linksItem',
    },
    {
      id: 1,
      href: '/',
      titleKey: 'footer.linksItem1',
    },
    {
      id: 2,
      href: '/',
      titleKey: 'footer.linksItem2',
    },
    {
      id: 3,
      href: '/',
      titleKey: 'footer.linksItem3',
    },
    {
      id: 4,
      href: '/',
      titleKey: 'footer.linksItem4',
    },
    {
      id: 5,
      href: '/',
      titleKey: 'footer.linksItem5',
    },
  ];

  const { theme } = useContext(ContextThemeColor);

  const { t, i18n } = useTranslation();

  return (
    <footer className={`footer ${theme}`}>
      <div className="footer__container container">
        <div className="footer__inner">
          <div className="footer__inner-information">
            <a className="footer__inner-logo" href="/">
              <img src={footerLogo} alt="Logotype" />
            </a>
            <p className="footer__inner-text">
              {t('footer.text1')}
            </p>

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
            <h4 className="footer__inner-title">{t('footer.information')}</h4>
            <ul className="footer__inner-list">
              {informationItems.map(({ id, href, titleKey }) => (
                <FooterItem key={id} href={href} title={t(titleKey)} />
              ))}
            </ul>
          </div>

          <div className="footer__inner-box">
            <h4 className="footer__inner-title">{t('footer.menu')}</h4>
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

            <button 
              className={`footer__language ${theme}`} 
              type="button"
              onClick={() => i18n.changeLanguage('Chinese')}
              data-testid="toggle-theme-button"
            >
              {i18n.language}
            </button>
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
