$(document).ready(function(){
// EFECTO MENU:
	$('.menu a').each(function(index, elemento){
		//No son visibles, los pone arriba
		$(this).css({
			'top':'-200px'
		});
		$(this).animate({
			'top':'0'
		},2000 + (index * 500));
	});
// EFECTO HEADER:
	//Comprobamos si la pantalla tiene mas de 800px
	if( $(window).width() > 800 ){
		$('header .textos').css({
			opacity: 0,
			marginTop: 0
		});

		$('header .textos').animate({
			opacity: 1,
			marginTop: '-52px'
		}, 1500);
	}

// SCROLL ELEMENTOS DEL MENUS

var acercaDe = $('#acerca-de').offset().top,
	menu = $('#platos').offset().top,
	galeria = $('#galeria').offset().top,
	ubicacion = $('#ubicacion').offset().top;
	// Acerca de
	$('#btn-acerca-de').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: acercaDe - 250
		}, 500);
	});

	// Menu
	$('#btn-menu').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: menu
		}, 500);
	});


	// Galeria
	$('#btn-galeria').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: galeria - 10
		}, 500);
	});

	// Ubicacion
	$('#btn-ubicacion').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: ubicacion
		}, 500);
	});

});