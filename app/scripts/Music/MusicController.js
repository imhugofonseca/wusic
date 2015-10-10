'use strict';

/**
 * Controller of wusicApp - Music Details
 * Controlador da aplicação - Detalhes de Musica
 *
 */

angular.module('wusicApp')

  .controller('MusicController', function ($scope, $routeParams, freeMusicService) {
	$('.loader').addClass('loaded');

	$scope.music = {};
	if(freeMusicService.list() != null) {
		$scope.music = freeMusicService.search($routeParams.name);
		console.log($scope.music.track_id);
	} else {
		  freeMusicService.get().then(function () {
		  	$scope.music = freeMusicService.search($routeParams.name);
		  });
	}



  });
