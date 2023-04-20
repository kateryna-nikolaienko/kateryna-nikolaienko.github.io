import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

function Introduce({
  introduceGithub, introduceDesign
}) {
  const { t } = useTranslation();

  return (
    <div className="introduce">
      <p className="introduce__name">{t('introduce.name')}</p>
      <a
        className="introduce__github"
        href={introduceGithub}
      >
        {t('introduce.account')}
      </a>
      <a
        className="introduce__design"
        href={introduceDesign}
      >
        {t('introduce.design')}
      </a>
    </div>
  );
}

Introduce.propTypes = {
  introduceGithub: PropTypes.string.isRequired,
  introduceDesign: PropTypes.string.isRequired,
};

export default Introduce;
