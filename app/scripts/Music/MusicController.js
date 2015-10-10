'use strict';

/**
 * Controller of wusicApp - Music Details
 * Controlador da aplicação - Detalhes de Musica
 *
 */

angular.module('wusicApp')

.controller('MusicController', function ($scope, $routeParams, freeMusicService, playerService) {
	
	$scope.playingId = playerService.id;
	$scope.music = {};
	var count = 0;

	// Wait for all images to load
	// Looks better
	$scope.countLoad = function () {
		count++;

		if(count >= 1){
			$('.loader').addClass('loaded');
			count = 0;
		}

	}

	// Get data and search
	if(freeMusicService.list() != null) {
		$scope.music = freeMusicService.search($routeParams.name);
	} else {

		freeMusicService.get().then(function () {
			$scope.music = freeMusicService.search($routeParams.name);
		});

	}

	// Binding
	$scope.play = playerService.playExe;
	$scope.pause = playerService.pauseExe;

});
