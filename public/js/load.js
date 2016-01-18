'use strict';
$(function() {

	$("#main_menu a").click(function(e){
		e.preventDefault();
		var url = $(this).attr('href');
		$('#main').load('partials/'+url);
		$("#main_menu .active").removeClass("active");
		$(this).addClass("active");
	});
});