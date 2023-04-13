import React from 'react';
import PropTypes from 'prop-types';

function YoutubeIcon({ color }) {
  return (
    <div className="footer__social">
      <a className="footer__social-link" href="/">
        <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M18.2641 2.9799C18.1669 2.59162 17.9689 2.23586 17.6903 1.94856C17.4116 1.66125
          17.062 1.45258 16.6769 1.34362C15.2697 1 9.64087 1 9.64087 1C9.64087 1 4.01207 1 2.60487
          1.37634C2.21973 1.48531 1.87016 1.69398 1.59148 1.98128C1.3128 2.26858 1.11487 2.62434 1.01768
          3.01262C0.760143 4.44073 0.634167 5.88945 0.641337 7.34058C0.632157 8.80263 0.758141 10.2624
          1.01768 11.7013C1.12482 12.0775 1.32719 12.4197 1.60522 12.6949C1.88326 12.97 2.22756 13.1689
          2.60487 13.2721C4.01207 13.6484 9.64087 13.6484 9.64087 13.6484C9.64087 13.6484 15.2697 13.6484
          16.6769 13.2721C17.062 13.1631 17.4116 12.9545 17.6903 12.6672C17.9689 12.3799 18.1669 12.0241
          18.2641 11.6358C18.5196 10.2185 18.6456 8.78078 18.6404 7.34058C18.6496 5.87853 18.5236 4.41876
          18.2641 2.9799V2.9799Z"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.80005 10.0157L12.5043 7.34035L7.80005 4.66504V10.0157Z"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </div>
  );
}

YoutubeIcon.propTypes = {
  color: PropTypes.string.isRequired,
};

export default YoutubeIcon;
