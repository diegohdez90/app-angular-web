$(document).ready(function() {
	$('.colecciones-nav').mouseover(function(event) {
		$(this).children('.dropdown-menu').fadeIn('slow', function() {});
	});
	$('.colecciones-nav>.dropdown-menu').mouseleave(function(event) {
		$(this).fadeOut('slow', function() {});
	});

});