import React from 'react';
import burgerIcon from '../../assets/icons/burger.svg';

function BurgerButton() {
  return (
    <button className="menu__burger" type="button">
      <img src={burgerIcon} alt="Burger" />
    </button>
  );
}
export default BurgerButton;
