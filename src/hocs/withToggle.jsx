import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

function withToggle(Component) {
  function WrappedComponent({ onClose }) {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    useEffect(() => {
      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }, []);

    return <Component handleKeyDown={handleKeyDown} onClose={onClose} />;
  }

  WrappedComponent.propTypes = {
    onClose: PropTypes.func.isRequired,
  };

  return WrappedComponent;
}

export default withToggle;
