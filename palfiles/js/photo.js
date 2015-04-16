$(document).ready(function() {
	$(".topphotos").fancybox({
		'padding'           : 0,
		'autoScale'     	: true,
		'transitionIn'		: 'none',
		'transitionOut'		: 'none',
		'titleShow'		: false
		});
});

$(document).ready(function() {
	$("p.zoom a").fancybox({
		'padding'           : 0,
		'autoScale'     	: false,
		'transitionIn'		: 'none',
		'transitionOut'		: 'none',
		'titleShow'		: false
		});
});

$(document).ready(function() {
	$("p.mapzoom a").fancybox({
		'padding'           : 0,
		'width'           : 600,
		'height'           : 370,
		'autoScale'     	: false,
		'transitionIn'		: 'none',
		'transitionOut'		: 'none',
		'titleShow'		: false
		});
});



