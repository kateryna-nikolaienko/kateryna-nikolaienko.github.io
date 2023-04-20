import React, { useContext, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
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
      titleKey: 'slider.title',
      textKey: 'slider.text',
    },
    {
      id: 1,
      src: sliderPicture2,
      titleKey: 'slider.title1',
      textKey: 'slider.text1',
    },
    {
      id: 2,
      src: sliderPicture3,
      titleKey: 'slider.title2',
      textKey: 'slider.text2',
    },
    {
      id: 3,
      src: sliderPicture4,
      titleKey: 'slider.title3',
      textKey: 'slider.text3',
    },
    {
      id: 4,
      src: sliderPicture5,
      titleKey: 'slider.title4',
      textKey: 'slider.text4',
    },
    {
      id: 5,
      src: sliderPicture3,
      titleKey: 'slider.title5',
      textKey: 'slider.text5',
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

  const { t } = useTranslation();

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
        textKey,
        titleKey
      }) => (
        <SliderItem key={id} src={src} text={t(textKey)} title={t(titleKey)} />
      ))}

    </Slider>
  );
}

export default InnerSlider;
