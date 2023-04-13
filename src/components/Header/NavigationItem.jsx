import React from 'react';
import PropTypes from 'prop-types';

function NavigationItem({ href, title }) {
  return (
    <li className="menu__item">
      <a className="menu__item-link" href={href}>{title}</a>
    </li>
  );
}
NavigationItem.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default NavigationItem;
