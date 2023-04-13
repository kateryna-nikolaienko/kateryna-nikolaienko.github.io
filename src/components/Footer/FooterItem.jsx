import React from 'react';
import PropTypes from 'prop-types';

function FooterItem({ href, title }) {
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

FooterItem.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default FooterItem;
