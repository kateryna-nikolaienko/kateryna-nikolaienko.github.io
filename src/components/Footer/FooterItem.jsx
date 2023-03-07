import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FooterItem extends Component {
  render() {
    const { href, title, index } = this.props;
    return (
      <li className="footer__inner-item" key={index}>
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
  index: PropTypes.number.isRequired
};

export default FooterItem;
