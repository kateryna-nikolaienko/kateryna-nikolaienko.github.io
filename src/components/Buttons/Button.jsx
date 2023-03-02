import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { className, text, onClick } = this.props;
    return (
      <button className={className} onClick={onClick} type="button">
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
  onClick: null,
};
export default Button;
