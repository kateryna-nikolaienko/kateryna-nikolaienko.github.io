import React from 'react';
import PropTypes from 'prop-types';

function TwitterIcon({ color }) {
  return (
    <div className="footer__social">
      <a className="footer__social-link" href="/">
        <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M19.6409 1.00841C18.8404 1.57307 17.954 2.00495 17.016 2.28741C16.5125 1.70852
          15.8434 1.29822 15.0992 1.112C14.3549 0.925781 13.5715 0.972624 12.8547 1.24619C12.138
          1.51977 11.5225 2.00686 11.0916 2.64161C10.6607 3.27636 10.4352 4.02813 10.4454
          4.79525V5.6312C8.97637 5.6693 7.52068 5.34348 6.20802 4.68277C4.89536 4.02207 3.76647
          3.04698 2.9219 1.84435C2.9219 1.84435 -0.421898 9.36789 7.10164 12.7117C5.38003 13.8803
          3.32914 14.4663 1.25 14.3836C8.77354 18.5633 17.969 14.3836 17.969 4.77018C17.9682 4.53733
          17.9458 4.30505 17.9021 4.07634C18.7553 3.23495 19.3573 2.17264 19.6409 1.00841V1.00841Z"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </div>
  );
}

TwitterIcon.propTypes = {
  color: PropTypes.string.isRequired,
};

export default TwitterIcon;
