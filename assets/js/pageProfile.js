'use strict';

var Mustache = require('mustache');

var profile = function(){
	$.getJSON("user.json", function(data){
		var tpl = $('#profilepage').html();
		console.log(data.users[0]);
		var html = Mustache.render(tpl,data.users[2]);
		$('#to-profile').html(html);   
	});

};

if ($("#page-profile").length > 0) {
	promo();
}