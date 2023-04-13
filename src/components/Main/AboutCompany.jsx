import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import aboutCompany from '../../assets/images/about.png';
import errorImage from '../../assets/images/logo.png';
import Button from '../Buttons/Button';
import ContextThemeColor from '../../context/ContextThemeColor';

function AboutCompany({ aboutContent }) {
  const [isImageLoaded, setImageLoaded] = useState(true);

  const handleImageLoaded = () => {
    console.log('Loaded');
  };

  const handleImageError = () => {
    setImageLoaded(false);
    console.log('Error image');
  };

  const { theme } = useContext(ContextThemeColor);

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
              Apply AI, Deep Learning and Data Science to solve
            </h2>
            <p className="about__inner-text">
              {aboutContent}
            </p>
            <Button className="about__inner-button" text="Learn More" />
          </div>
        </div>
      </div>
    </section>
  );
}

AboutCompany.propTypes = {
  aboutContent: PropTypes.string.isRequired
};

export default AboutCompany;
