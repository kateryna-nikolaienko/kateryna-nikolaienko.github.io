import React, { Component } from 'react';
import burgerIcon from '../../assets/icons/burger.svg';

class BurgerButton extends Component {
  render() {
    return (
      <button className="menu__burger" type="button">
        <img src={burgerIcon} alt="Burger" />
      </button>
    );
  }
}
export default BurgerButton;
