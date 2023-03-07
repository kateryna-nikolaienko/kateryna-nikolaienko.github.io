import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PartnersItem extends Component {
  render() {
    const { index, src, alt } = this.props;
    return (
      <li className="header__bottom-item" key={index}>
        <img src={src} alt={alt} />
      </li>
    );
  }
}

PartnersItem.propTypes = {
  index: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
export default PartnersItem;
