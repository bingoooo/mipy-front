"use strict";


window.jQuery = require('jquery');
require('../components/headroom.js/dist/headroom.js');
require('../components/headroom.js/dist/jQuery.headroom.js');


var menu = function(){

	console.log('blabla');
	$("#main_menu").headroom({
		"offset": 605,
		"tolerance": 5,
		"classes": {
			"initial": "animated",
			"pinned": "slideDown",
			"unpinned": "slideUp"
		}
	});
};

menu();