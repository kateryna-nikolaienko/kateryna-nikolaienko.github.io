import React, { Component } from 'react';
import NavigationItem from './NavigationItem';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navigationItems: [
        {
          index: 0,
          href: '/',
          title: 'Home'
        },
        {
          index: 1,
          href: '/',
          title: 'About'
        },
        {
          index: 2,
          href: '/',
          title: 'Services'
        },
        {
          index: 3,
          href: '/',
          title: 'Blog'
        },
        {
          index: 4,
          href: '/',
          title: 'Contact'
        },
      ]
    };
  }

  render() {
    const { navigationItems } = this.state;
    return (
      <nav className="menu">
        <ul className="menu__list menu__list-left">
          {navigationItems.map(({ index, href, title }) => (
            <NavigationItem key={index} href={href} title={title} />
          ))}
        </ul>
      </nav>
    );
  }
}
export default Navigation;
