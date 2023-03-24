import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      const { onClick } = this.props;
      onClick();
    }
  };

  render() {
    const { className, text, onClick } = this.props;
    return (
      <button
        className={className}
        onClick={onClick}
        type="button"
        onKeyDown={this.handleKeyDown}
        tabIndex={0}
      >
        {text}
      </button>
    );
  }
}
Button.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: () => {},
};

export default Button;
