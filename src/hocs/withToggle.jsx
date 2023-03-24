import React from 'react';
import PropTypes from 'prop-types';

function withToggle(Component) {
  class WrappedComponent extends React.Component {
    componentDidMount() {
      document.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
      document.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        const { onClose } = this.props;
        onClose();
      }
    };

    render() {
      const {
        onClose
      } = this.props;
      return <Component handleKeyDown={this.handleKeyDown} onClose={onClose} />;
    }
  }

  WrappedComponent.propTypes = {
    onClose: PropTypes.func.isRequired,
  };

  return WrappedComponent;
}

export default withToggle;
