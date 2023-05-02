import React from 'react';
import PropTypes from 'prop-types';

function PartnersItem({ src, alt }) {
  return (
    <li className="header__bottom-item">
      <img src={src} alt={alt} />
    </li>
  );
}

PartnersItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
export default PartnersItem;
