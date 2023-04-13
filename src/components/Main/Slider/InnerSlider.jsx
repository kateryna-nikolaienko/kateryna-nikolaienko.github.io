import React, { useContext, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import sliderPicture1 from '../../../assets/images/slider/1.png';
import sliderPicture2 from '../../../assets/images/slider/2.png';
import sliderPicture3 from '../../../assets/images/slider/3.png';
import sliderPicture4 from '../../../assets/images/slider/4.png';
import sliderPicture5 from '../../../assets/images/slider/5.png';
import SliderItem from './SliderItem';
import ContextThemeColor from '../../../context/ContextThemeColor';

function InnerSlider() {
  const sliderItems = [
    {
      id: 0,
      src: sliderPicture1,
      title: 'Naxly as the Winners in Global Agency Awards',
      text: 'Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing '
        + 'layouts and visual mockups.'
    },
    {
      id: 1,
      src: sliderPicture2,
      title: 'Naxly as the Winners in Global Agency Awards',
      text: 'Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing '
        + 'layouts and visual mockups.'
    },
    {
      id: 2,
      src: sliderPicture3,
      title: 'Naxly as the Winners in Global Agency Awards',
      text: 'Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing '
        + 'layouts and visual mockups.'
    },
    {
      id: 3,
      src: sliderPicture4,
      title: 'Naxly as the Winners in Global Agency Awards',
      text: 'Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing '
        + 'layouts and visual mockups.'
    },
    {
      id: 4,
      src: sliderPicture5,
      title: 'Naxly as the Winners in Global Agency Awards',
      text: 'Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing '
        + 'layouts and visual mockups.'
    },
    {
      id: 4,
      src: sliderPicture3,
      title: 'Naxly as the Winners in Global Agency Awards',
      text: 'Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing '
        + 'layouts and visual mockups.'
    },
  ];

  const sliderRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

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

  const { theme } = useContext(ContextThemeColor);

  return (
    <Slider
      ref={sliderRef}
      className={`slider slick-slider ${theme}`}
      dots={settings.dots}
      infinite={settings.infinite}
      slidesToShow={settings.slidesToShow}
      slidesToScroll={settings.slidesToScroll}
      responsive={settings.responsive}
    >
      {sliderItems.map(({
        id,
        src,
        text,
        title
      }) => (
        <SliderItem key={id} src={src} text={text} title={title} />
      ))}

    </Slider>
  );
}

export default InnerSlider;
