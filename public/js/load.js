'use strict';
$(function() {
	var pages = ["index.html?0","formdev.html?1","promotion.html?2","actualites.html?3","emploi.html?4","partenaires.html?5","profile.html?6","temoignage.html?7","team.html?8","contact.html?9"];
	var page = window.location.search.substring(1);
	console.log(page);
	$('a[href="' + pages[page] + '"]').addClass('active');

	$("#main_menu a").click(function(e){
		/*e.preventDefault();
		var fichier = $(this).attr('href');
		$("section").load("partials/" + fichier + ".html");*/
		$("#main_menu .active").removeClass("active");
		$(this).addClass("active");
	});
});