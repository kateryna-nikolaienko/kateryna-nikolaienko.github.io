import React from 'react';
import { useTranslation } from 'react-i18next';
import NavigationItem from './NavigationItem';

function Navigation() {
  const navigationItems = [
    {
      id: 0,
      href: '/',
      titleKey: 'header.navigationHome'
    },
    {
      id: 1,
      href: '/',
      titleKey: 'header.navigationAbout'
    },
    {
      id: 2,
      href: '/',
      titleKey: 'header.navigationServices'
    },
    {
      id: 3,
      href: '/',
      titleKey: 'header.navigationBlog'
    },
    {
      id: 4,
      href: '/',
      titleKey: 'header.navigationContact'
    },
  ];

  const { t } = useTranslation();

  return (
    <nav className="menu">
      <ul className="menu__list menu__list-left">
        {navigationItems.map(({ id, href, titleKey }) => (
          <NavigationItem key={id} href={href} title={t(titleKey)} />
        ))}
      </ul>
    </nav>
  );
}
export default Navigation;
