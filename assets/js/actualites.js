'use strict';

var actus = function(){
	console.log('page actualités');
	$(document).ready(function(){
		$(".ui.button").click(function(e){
			e.preventDefault();
			var url = $(this).attr('href');
			console.log('clicked');
			$('#main').load('partials/'+url);
		});
	});
};

module.exports = actus;