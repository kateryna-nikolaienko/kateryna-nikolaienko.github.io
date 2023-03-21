import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PartnersItem extends Component {
  render() {
    const { src, alt } = this.props;
    return (
      <li className="header__bottom-item">
        <img src={src} alt={alt} />
      </li>
    );
  }
}

PartnersItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
export default PartnersItem;
