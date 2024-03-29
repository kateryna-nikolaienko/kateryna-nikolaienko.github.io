import React from 'react';
import PropTypes from 'prop-types';
import withToggle from '../../hocs/withToggle';

function ModalVideo({ onClose, handleKeyDown }) {
  return (
    <div className="modal-video">
      <div className="modal-video__container container">
        <div className="modal-video__body">

          <div className="modal-video__box">
            <iframe
              width="853"
              height="480"
              src="https://www.youtube.com/embed/iicfmXFALM8"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>

          <button
            type="button"
            className="close"
            onClick={onClose}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            &times;
          </button>
        </div>
      </div>
    </div>
  );
}

ModalVideo.propTypes = {
  onClose: PropTypes.func.isRequired,
  handleKeyDown: PropTypes.func.isRequired,
};

export default withToggle(ModalVideo);
