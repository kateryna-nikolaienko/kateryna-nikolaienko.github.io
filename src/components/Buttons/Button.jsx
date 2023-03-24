import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const {
      className, text, onClick, decor 
    } = this.props;
    const hasDecor = !!decor;
    return (
      <button
        className={className}
        onClick={onClick}
        type="button"
      >
        {hasDecor && (
          <img
            className="header__btn-img"
            src={decor}
            alt=""
          />
        )}
        {text}
      </button>
    );
  }
}
Button.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  decor: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  decor: null
};

export default Button;
