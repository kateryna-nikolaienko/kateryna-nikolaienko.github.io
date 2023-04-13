import React from 'react';
import PropTypes from 'prop-types';

function Button({
  className,
  text,
  onClick,
  decor
}) {
  return (
    <button
      className={className}
      onClick={onClick}
      type="button"
    >
      {!!decor && (
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

Button.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  decor: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {
  },
  decor: null
};

export default Button;
