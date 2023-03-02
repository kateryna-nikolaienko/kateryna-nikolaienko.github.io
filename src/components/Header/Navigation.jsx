import React, { Component } from 'react';

class Navigation extends Component {
  render() {
    return (
      <nav className="menu">
        <ul className="menu__list menu__list-left">
          <li className="menu__item">
            <a className="menu__item-link" href="/">Home</a>
          </li>
          <li className="menu__item">
            <a className="menu__item-link" href="/">About</a>
          </li>
          <li className="menu__item">
            <a className="menu__item-link" href="/">Services</a>
          </li>
          <li className="menu__item">
            <a className="menu__item-link" href="/">Blog</a>
          </li>
          <li className="menu__item">
            <a className="menu__item-link" href="/">Contact</a>
          </li>
        </ul>
      </nav>
    );
  }
}
export default Navigation;
