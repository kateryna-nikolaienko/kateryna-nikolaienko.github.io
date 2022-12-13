$(function(){

$('.carousel__inner').slick({
	arrows: false, // открючает стрелки перехода (кнопки)
	dots: true, //это устанавливает дотсы(нижние ориентиры)
	slidesToShow: 3, //показывает 3 слайда
	responsive: [
    {
      breakpoint: 841,
      settings: {
        slidesToShow: 2,
      }
    },
    { 
    	breakpoint: 601,
      settings: {
        slidesToShow: 1,
    }
}
    ],
});

});