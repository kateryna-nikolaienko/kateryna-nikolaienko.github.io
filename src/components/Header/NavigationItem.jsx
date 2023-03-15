import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NavigationItem extends Component {
  render() {
    const { href, title } = this.props;
    return (
      <li className="menu__item">
        <a className="menu__item-link" href={href}>{title}</a>
      </li>
    );
  }
}
NavigationItem.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default NavigationItem;
