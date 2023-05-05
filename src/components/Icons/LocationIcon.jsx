import React from 'react';
import PropTypes from 'prop-types';

function LocationIcon({ color }) {
  return (
    <div className="footer__inner-icon">
      <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M14 7.5C14 12.5556 7.5 16.8889 7.5 16.8889C7.5 16.8889 1 12.5556 1 7.5C1 5.77609
          1.68482 4.12279 2.90381 2.90381C4.12279 1.68482 5.77609 1 7.5 1C9.22391 1 10.8772 1.68482
          12.0962 2.90381C13.3152 4.12279 14 5.77609 14 7.5Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.49998 9.66671C8.6966 9.66671 9.66665 8.69666 9.66665 7.50004C9.66665 6.30342
          8.6966 5.33337 7.49998 5.33337C6.30336 5.33337 5.33331 6.30342 5.33331 7.50004C5.33331
          8.69666 6.30336 9.66671 7.49998 9.66671Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

LocationIcon.propTypes = {
  color: PropTypes.string.isRequired,
};

export default LocationIcon;