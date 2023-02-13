$(function () {

  $('.slider').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1580,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1220,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
        }
      },

    ],
  });

  $('.menu__burger').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
  });

  $('.menu__item-link').on('click', function () {
    $('.menu__list').removeClass('menu__list--active');
  });

});