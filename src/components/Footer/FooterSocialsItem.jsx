import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FooterSocialsItem extends Component {
  render() {
    const { href, alt, src } = this.props;
    return (
      <li className="footer__social">
        <a className="footer__social-link" href={href}>
          <img src={src} alt={alt} />
        </a>
      </li>
    );
  }
}
FooterSocialsItem.propTypes = {
  href: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};
export default FooterSocialsItem;
