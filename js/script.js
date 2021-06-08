let swiper = new Swiper('.history__body', {
	autoHeight: true,
	navigation: {
		nextEl: '.history__next',
		prevEl: '.history__prev',
	},
	speed: 800,
	loop: true,
	effect: "fade",
});