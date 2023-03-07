import React, { Component } from 'react';
import NavigationItem from './NavigationItem';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navigationItems: [
        <NavigationItem index={0} href="/" title="Home" />,
        <NavigationItem index={1} href="/" title="About" />,
        <NavigationItem index={2} href="/" title="Services" />,
        <NavigationItem index={3} href="/" title="Blog" />,
        <NavigationItem index={4} href="/" title="Contact" />,
      ]
    };
  }

  renderNavigationItems = () => {
    const { navigationItems } = this.state;
    return navigationItems.map((item) => {
      return <div key={item.props.index}>{item}</div>;
    });
  };

  render() {
    return (
      <nav className="menu">
        <ul className="menu__list menu__list-left">
          {this.renderNavigationItems()}
        </ul>
      </nav>
    );
  }
}
export default Navigation;
