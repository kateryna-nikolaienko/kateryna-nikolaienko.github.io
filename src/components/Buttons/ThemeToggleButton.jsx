import React, { useContext } from 'react';
import ContextThemeColor from '../../context/ContextThemeColor';
import moonIcon from '../../assets/icons/moon.svg';

function ThemeToggleButton() {
  const { theme, toggleTheme } = useContext(ContextThemeColor);

  return (
    <div className={`change-theme ${theme}`}>
      <button className="change-theme__button" type="button" onClick={toggleTheme}>
        <img src={moonIcon} alt="moon" />
      </button>
    </div>
  );
}

export default ThemeToggleButton;
