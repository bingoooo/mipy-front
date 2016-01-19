'use strict';

var actus = function(){
	console.log('page actualités');
	
	$('body').on('click', '.page_article', function(event){
		event.preventDefault();
		var url = $(this).attr('href');
		$('#main').load('partials/'+url);
	});
};

module.exports = actus;