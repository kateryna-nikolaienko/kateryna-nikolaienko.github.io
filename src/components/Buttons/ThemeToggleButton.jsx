import React, { Component } from 'react';
import ContextThemeColor from '../../context/ContextThemeColor';

class ThemeToggleButton extends Component {
  render() {
    return (
      <ContextThemeColor.Consumer>
        {({
          theme,
          toggleTheme
        }) => (
          <div className={`change-theme ${theme}`}>
            <button className="change-theme__button" type="button" onClick={toggleTheme}>Change Theme</button>
          </div>
        )}
      </ContextThemeColor.Consumer>
    );
  }
}

export default ThemeToggleButton;
