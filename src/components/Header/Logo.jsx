import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Logo extends Component {
  render() {
    const {
      className,
      href,
      src,
      alt
    } = this.props;
    return (
      <a className={className} href={href}>
        <img src={src} alt={alt} />
      </a>
    );
  }
}

Logo.propTypes = {
  className: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Logo;
