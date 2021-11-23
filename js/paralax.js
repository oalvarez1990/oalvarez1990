$(document).ready(function() {

	$(window).scroll(function(){
		var anchoVentana = $(window).width();
		if (anchoVentana > 800) {
			var scroll = $(window).scrollTop();
			// Titulo
			$('header .textos').css({
				'transform': 'translate(0px, ' + scroll / 3 + '%)'
			});
			// Acerca de
			$('.acerca-de article').css({
				'transform': 'translate(0px, -' + scroll / 5 + '%)'
			});
		}
	});

	// Dispositivos Tablets Horizontal Solucion

	$(window).resize(function(){
		var anchoVentana = $(window).width();
		if (anchoVentana < 800) {
			$('.acerca-de article').css({
				'transform': 'translate(0px, 0px)'
			});
		}
	});
	
});