"use strict";

//require('./alchimy.js');

window.$ = require('jquery');
var tab = {
	"promotion": require('./promotion.js'),
	"emploiShowModalbox": require('./emploiShowModalbox.js')
};

$("#main_menu a").click(function(e){
		e.preventDefault();
		var url = $(this).attr('href');
		$('#main').load('partials/'+url);
		$("#main_menu .active").removeClass("active");
		$(this).addClass("active");
		var xs = $(this).attr('x-script');
		if (typeof xs != 'undefined') {
			tab[xs]();
		}
	});
