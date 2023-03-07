import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NavigationItem extends Component {
  render() {
    const { index, href, title } = this.props;
    return (
      <li className="menu__item" key={index}>
        <a className="menu__item-link" href={href}>{title}</a>
      </li>
    );
  }
}
NavigationItem.propTypes = {
  index: PropTypes.number.isRequired,
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default NavigationItem;
