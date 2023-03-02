import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SliderItem extends Component {
  render() {
    const { src, text, title } = this.props;
    return (
      <div className="slider__box slick-list">
        <div className="slider__item">
          <div className="slider__picture">
            <img src={src} alt="" />
          </div>
          <h4 className="slider__title">
            {title}
          </h4>
          <p className="slider__text">
            {text}
          </p>
        </div>
      </div>
    );
  }
}

SliderItem.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default SliderItem;
