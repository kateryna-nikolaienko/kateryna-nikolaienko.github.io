import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FooterItem extends Component {
  render() {
    const { href, title } = this.props;
    return (
      <li className="footer__inner-item">
        <a className="footer__inner-link" href={href}> 
          {' '}
          {title}
          {' '}
        </a>
      </li>
    );
  }
}

FooterItem.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default FooterItem;
