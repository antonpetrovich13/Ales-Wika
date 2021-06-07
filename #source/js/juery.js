// ПАРАЛАКС
$(window).scroll(function (event) {
	var s = 0 - $(this).scrollTop() / 3;
	$('.main__background').css('transform', 'translate3d(0, ' + s + 'px, 0)');
});