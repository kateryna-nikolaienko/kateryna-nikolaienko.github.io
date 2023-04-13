import React from 'react';
import PropTypes from 'prop-types';

function Logo({
  className, href, src, alt 
}) {
  return (
    <a className={className} href={href}>
      <img src={src} alt={alt} />
    </a>
  );
}

Logo.propTypes = {
  className: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Logo;
