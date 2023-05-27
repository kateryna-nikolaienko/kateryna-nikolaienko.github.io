import React from 'react';
import PropTypes from 'prop-types';

function LinkedinIcon({ color }) {
  return (
    <div className="footer__social">
      <a className="footer__social-link" href="/">
        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11.1409 5.5C12.3343 5.5 13.4789 5.97411 14.3229 6.81802C15.1668 7.66193 15.6409
          8.80653 15.6409 10V15.25H12.6409V10C12.6409 9.60218 12.4828 9.22064 12.2015 8.93934C11.9202
          8.65804 11.5387 8.5 11.1409 8.5C10.743 8.5 10.3615 8.65804 10.0802 8.93934C9.7989 9.22064
          9.64087 9.60218 9.64087 10V15.25H6.64087V10C6.64087 8.80653 7.11498 7.66193 7.95889
          6.81802C8.8028 5.97411 9.94739 5.5 11.1409 5.5V5.5Z"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.64087 6.25H0.640869V15.25H3.64087V6.25Z"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.14087 4C2.9693 4 3.64087 3.32843 3.64087 2.5C3.64087 1.67157 2.9693 1 2.14087
          1C1.31244 1 0.640869 1.67157 0.640869 2.5C0.640869 3.32843 1.31244 4 2.14087 4Z"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </div>
  );
}

LinkedinIcon.propTypes = {
  color: PropTypes.string.isRequired,
};

export default LinkedinIcon;