"use strict";

window.$ = window.jQuery = require('jquery');
require('../components/headroom.js/dist/headroom.js');
require('../components/headroom.js/dist/jQuery.headroom.js');

require('./promotion.js');
require('./emploiShowModalbox.js');
require('./pageProfile.js');
	//"actualites": require('./actualites.js')


var menu = (function(){
	//if ($('.fg-hero').html());
	$("#main_menu").headroom({
		"offset": 405,
		"tolerance": 5,
		"classes": {
			"initial": "animated",
			"pinned": "slideDown",
			"unpinned": "slideUp"
		}
	});
});

if ($('.fg-hero').length > 0){
	menu();
};
