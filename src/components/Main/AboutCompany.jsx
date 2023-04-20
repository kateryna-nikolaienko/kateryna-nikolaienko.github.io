import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import aboutCompany from '../../assets/images/about.png';
import errorImage from '../../assets/images/logo.png';
import Button from '../Buttons/Button';
import ContextThemeColor from '../../context/ContextThemeColor';

function AboutCompany() {
  const [isImageLoaded, setImageLoaded] = useState(true);

  const handleImageLoaded = () => {
    console.log('Loaded');
  };

  const handleImageError = () => {
    setImageLoaded(false);
    console.log('Error image');
  };

  const { theme } = useContext(ContextThemeColor);

  const { t } = useTranslation();

  return (
    <section className={`about ${theme}`}>
      <div className="about__container container">
        <div className="about__inner">
          <div className="about__inner-img">
            <img
              src={isImageLoaded ? aboutCompany : errorImage}
              alt="About company"
              onLoad={handleImageLoaded}
              onError={handleImageError}
            />
          </div>
          <div className="about__inner-content">
            <h2 className="about__inner-title">
              {t('about.title')}
            </h2>
            <p className="about__inner-text">
              {t('about.text')}
            </p>
            <Button className="about__inner-button" text={t('about.button')} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutCompany;
