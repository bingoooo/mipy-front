'use strict';
var emploi = function(){
	console.log('page emploi');
	$('body').on('click','.rl-grobouton',function(){
		$('.rl-modal').show();

	});

	$('body').on('click','.rl-fermeture', function(){
		$('.rl-modal').hide();
	});

	$('body').on('click','.rl-envoyer', function(){
		$('.rl-modal').hide();
	});

	$('body').on('click','.rl-croix', function(){
		$('.rl-modal').hide();
	});



};

module.exports = emploi;