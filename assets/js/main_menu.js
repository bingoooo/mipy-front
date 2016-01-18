"use strict";
var menu = function(){
	$("#main_menu").headroom({
		"offset": 205,
		"tolerance": 5,
		"classes": {
			"initial": "animated",
			"pinned": "slideDown",
			"unpinned": "slideUp"
		}
	});

// menu disparait
$("#main_menu").headroom("destroy");
};
$(document).ready(function(){
	menu.init();
});