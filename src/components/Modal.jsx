import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Modal extends Component {
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
    const { onClose } = this.props;
    return (
      <div className="modal" id="myModal">
        <div className="modal__body">
          <div className="modal__content">
            <button
              type="button"
              className="close"
              onClick={onClose}
              onKeyDown={this.handleKeyDown}
              tabIndex={0}
            >
              &times;
            </button>
            <div className="form-popup">
              <form className="form-popup__container">
                <h1 className="form-popup__title">Fill the form</h1>

                <label htmlFor="name">
                  <b>Name:</b>
                  <input type="text" id="name" placeholder="Roman" required />
                </label>

                <label htmlFor="number">
                  <b>Phone number:</b>
                  <input type="tel" id="number" placeholder="+380..." required />
                </label>

                <label htmlFor="email">
                  <b>Email:</b>
                  <input type="text" id="email" placeholder="example@gmail.com" required />
                </label>

                <button className="form-popup__btn btn" type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Modal;
