'use strict'

$(document).ready(function () {
	$('.slider').slick({
		dots: true,
		arrows: false,
		speed: 2000,
		autoplay: 4000,
		pauseonHover: true,
	});

	$('.autoplay').slick({
		arrows: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		speed: 1000,
		autoplaySpeed: 4000,
		adaptiveHeight: true,
		dots: true,
		pauseOnHover: true,
		pauseOnDotsHover: true,

	})

});
