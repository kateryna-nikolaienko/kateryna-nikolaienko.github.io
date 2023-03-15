import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NavigationItem extends Component {
  render() {
    const { key, href, title } = this.props;
    return (
      <li className="menu__item" key={key}>
        <a className="menu__item-link" href={href}>{title}</a>
      </li>
    );
  }
}
NavigationItem.propTypes = {
  key: PropTypes.number.isRequired,
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default NavigationItem;
