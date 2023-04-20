import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import solutionPicture from '../../assets/images/solutions.png';
import ContextThemeColor from '../../context/ContextThemeColor';

function Solutions() {
  const { theme } = useContext(ContextThemeColor);
  const { t } = useTranslation();
  return (
    <section className={`solutions ${theme}`}>
      <div className="solutions__container container">
        <div className="solutions__inner">
          <div className="solutions__inner-content">
            <h2 className="solutions__inner-title">
              {t('solutions.title')}
            </h2>
            <p className="solutions__inner-text">
              {t('solutions.text1')}
            </p>
            <p className="solutions__inner-text">
              {t('solutions.text2')}
            </p>
            <p className="solutions__inner-text">
              {t('solutions.text3')}
            </p>
            <p className="solutions__inner-text">
              {t('solutions.text4')}
            </p>
          </div>
          <div className="solutions__inner-img">
            <img src={solutionPicture} alt="About solutions" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solutions;
