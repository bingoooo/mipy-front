'use strict';

var actus = function(){
	$('body').on('click', '.page_article', function(event){
		event.preventDefault();
		var url = $(this).attr('href');
		$('#main').load('partials/'+url);
	});
};

module.exports = actus;