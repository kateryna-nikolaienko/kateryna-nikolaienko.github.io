import React, { Component } from 'react';
import ContextThemeColor from '../../context/ContextThemeColor';
import moonIcon from '../../assets/icons/moon.svg';

class ThemeToggleButton extends Component {
  render() {
    return (
      <ContextThemeColor.Consumer>
        {({
          theme,
          toggleTheme
        }) => (
          <div className={`change-theme ${theme}`}>
            <button className="change-theme__button" type="button" onClick={toggleTheme}>
              <img src={moonIcon} alt="moon" />
            </button>
          </div>
        )}
      </ContextThemeColor.Consumer>
    );
  }
}

export default ThemeToggleButton;
