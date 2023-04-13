import React from 'react';
import NavigationItem from './NavigationItem';

function Navigation() {
  const navigationItems = [
    {
      id: 0,
      href: '/',
      title: 'Home'
    },
    {
      id: 1,
      href: '/',
      title: 'About'
    },
    {
      id: 2,
      href: '/',
      title: 'Services'
    },
    {
      id: 3,
      href: '/',
      title: 'Blog'
    },
    {
      id: 4,
      href: '/',
      title: 'Contact'
    },
  ];

  return (
    <nav className="menu">
      <ul className="menu__list menu__list-left">
        {navigationItems.map(({ id, href, title }) => (
          <NavigationItem key={id} href={href} title={title} />
        ))}
      </ul>
    </nav>
  );
}
export default Navigation;
