import React, { Component } from 'react';
import Slider from 'react-slick';
import sliderPicture1 from '../../../assets/images/slider/1.png';
import sliderPicture2 from '../../../assets/images/slider/2.png';
import sliderPicture3 from '../../../assets/images/slider/3.png';
import sliderPicture4 from '../../../assets/images/slider/4.png';
import sliderPicture5 from '../../../assets/images/slider/5.png';
import SliderItem from './SliderItem';

class InnerSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      autoplaySpeed: 2000,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1580,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 760,
          settings: {
            slidesToShow: 1,
          }
        }
      ],
    };

    return (
      <Slider
        className="slider slick-slider"
        dots={settings.dots}
        infinite={settings.infinite}
        autoplaySpeed={settings.autoplaySpeed}
        slidesToShow={settings.slidesToShow}
        slidesToScroll={settings.slidesToScroll}
        responsive={settings.responsive}
      >
        <SliderItem
          src={sliderPicture1}
          title="Naxly as the Winners in Global Agency Awards"
          text="Lorem ipsum is placeholder text commonly used in print, and publishing industries for
          previewing layouts and visual mockups."
        />

        <SliderItem
          src={sliderPicture2}
          title="Naxly as the Winners in Global Agency Awards"
          text="Lorem ipsum is placeholder text commonly used in print, and publishing industries for
          previewing layouts and visual mockups."
        />

        <SliderItem
          src={sliderPicture3}
          title="Naxly as the Winners in Global Agency Awards"
          text="Lorem ipsum is placeholder text commonly used in print, and publishing industries for
          previewing layouts and visual mockups."
        />

        <SliderItem
          src={sliderPicture4}
          title="Naxly as the Winners in Global Agency Awards"
          text="Lorem ipsum is placeholder text commonly used in print, and publishing industries for
          previewing layouts and visual mockups."
        />

        <SliderItem
          src={sliderPicture5}
          title="Naxly as the Winners in Global Agency Awards"
          text="Lorem ipsum is placeholder text commonly used in print, and publishing industries for
          previewing layouts and visual mockups."
        />

      </Slider>
    );
  }
}

export default InnerSlider;
