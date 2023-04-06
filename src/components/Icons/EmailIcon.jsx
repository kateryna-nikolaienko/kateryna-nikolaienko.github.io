import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EmailIcon extends Component {
  render() {
    const { color } = this.props;
    return (
      <div className="footer__inner-icon">
        <svg width="15" height="12" fill="none" viewBox="0 0 15 12" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M2.3 1H12.7C13.415 1 14 1.585 14 2.3V10.1C14 10.815 13.415 11.4 12.7 11.4H2.3C1.585 11.4
        1 10.815 1 10.1V2.3C1 1.585 1.585 1 2.3 1Z"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M14 2.30005L7.5 6.85005L1 2.30005" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    );
  }
}

EmailIcon.propTypes = {
  color: PropTypes.string.isRequired,
};

export default EmailIcon;
