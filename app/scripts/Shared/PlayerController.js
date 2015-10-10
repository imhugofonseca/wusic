'use strict';

/**
 * Controller of wusicApp - Player
 * Controlador da aplicação - Player
 *
 */


angular.module('wusicApp')

  .controller('PlayerController', function ($scope, $element, freeMusicService, playerService) {

  	$scope.mp3 = '';
  	$scope.name = '';
  	$scope.artist = '';
  	$scope.duration = '';


    $scope.$watch(function () {
    	return playerService;
	},function(newm, oldm) {

		var audio = $($element).children('audio')[0];
		
		if (oldm.playing != newm.playing){
			$scope.mp3 = newm.playing;
			$scope.name = newm.name;
			$scope.artist = newm.artist;

			audio.play();

	
		}

		//play
		if(newm.status){
			audio.play();
		}
		// Pause
		else{
			audio.pause();
			
		}

    }, true);

  })