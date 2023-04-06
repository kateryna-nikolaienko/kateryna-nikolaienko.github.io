import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InstagramIcon extends Component {
  render() {
    const { color } = this.props;
    return (
      <div className="footer__social">
        <div className="footer__social-link">
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12.5 1H5C2.92893 1 1.25 2.67893 1.25 4.75V12.25C1.25 14.3211 2.92893 16 5
          16H12.5C14.5711 16 16.25 14.3211 16.25 12.25V4.75C16.25 2.67893 14.5711 1 12.5 1Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.75 8.02736C11.8426 8.65154 11.736 9.28902 11.4453 9.84912C11.1547 10.4092
          10.6949 10.8634 10.1312 11.1471C9.5676 11.4308 8.92886 11.5296 8.30586 11.4293C7.68287
          11.3291 7.10734 11.0349 6.66115 10.5887C6.21496 10.1425 5.92082 9.56702 5.82058 8.94402C5.72033
          8.32102 5.81907 7.68228 6.10277 7.11864C6.38647 6.555 6.84066 6.09517 7.40076 5.80454C7.96086
          5.51392 8.59834 5.4073 9.22252 5.49986C9.85922 5.59427 10.4487 5.89096 10.9038 6.34609C11.3589
          6.80122 11.6556 7.39067 11.75 8.02736Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M12.875 4.375H12.8825" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    );
  }
}

InstagramIcon.propTypes = {
  color: PropTypes.string.isRequired,
};

export default InstagramIcon;
