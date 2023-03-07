import React, { Component } from 'react';
import Slider from 'react-slick';
import sliderPicture1 from '../../../assets/images/slider/1.png';
import sliderPicture2 from '../../../assets/images/slider/2.png';
import sliderPicture3 from '../../../assets/images/slider/3.png';
import sliderPicture4 from '../../../assets/images/slider/4.png';
import sliderPicture5 from '../../../assets/images/slider/5.png';
import SliderItem from './SliderItem';

class InnerSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderItems: [
        <SliderItem
          index={0}
          src={sliderPicture1}
          title="Naxly as the Winners in Global Agency Awards"
          text="Lorem ipsum is placeholder text commonly used in print, and publishing industries for
          previewing layouts and visual mockups."
        />,
        <SliderItem
          index={1}
          src={sliderPicture2}
          title="Naxly as the Winners in Global Agency Awards"
          text="Lorem ipsum is placeholder text commonly used in print, and publishing industries for
          previewing layouts and visual mockups."
        />,
        <SliderItem
          index={2}
          src={sliderPicture3}
          title="Naxly as the Winners in Global Agency Awards"
          text="Lorem ipsum is placeholder text commonly used in print, and publishing industries for
          previewing layouts and visual mockups."
        />,
        <SliderItem
          index={3}
          src={sliderPicture4}
          title="Naxly as the Winners in Global Agency Awards"
          text="Lorem ipsum is placeholder text commonly used in print, and publishing industries for
          previewing layouts and visual mockups."
        />,
        <SliderItem
          index={4}
          src={sliderPicture5}
          title="Naxly as the Winners in Global Agency Awards"
          text="Lorem ipsum is placeholder text commonly used in print, and publishing industries for
          previewing layouts and visual mockups."
        />
      ]
    };
    this.sliderRef = React.createRef(); // create a reference to an object
  }

  /**
   *  Needed for the cards in the slider to change. The function sets an interval of 500ms,
   *  and if there is a reference to the object, we call the next one
   */
  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.sliderRef.current) {
        this.sliderRef.current.slickNext();
      }
    }, 500);
  }

  /**
   * The function is needed so that when the slider cards are removed from the screen, they do not apply spacing
   */
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  renderSliderItems = () => {
    const { sliderItems } = this.state;
    return sliderItems.map((item) => {
      return <div key={item.props.index}>{item}</div>;
    });
  };

  render() {
    const settings = {
      dots: true,
      infinite: true,
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
        ref={this.sliderRef}
        className="slider slick-slider"
        dots={settings.dots}
        infinite={settings.infinite}
        slidesToShow={settings.slidesToShow}
        slidesToScroll={settings.slidesToScroll}
        responsive={settings.responsive}
      >
        {this.renderSliderItems()}

      </Slider>
    );
  }
}

export default InnerSlider;
